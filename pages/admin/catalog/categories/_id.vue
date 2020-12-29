<template>
  <PageContainer title="Редагування категорії">
    <template slot="header">

    </template>
    <template slot="content">
      <el-form
        :model="category"
        :rules="validation"
        ref="category"
        label-width="150px">
        <el-form-item label="Назва" prop="name">
          <el-input v-model="category.name" @input="handlerOnNameChange"></el-input>
        </el-form-item>
        <el-form-item label="Символьний код" prop="url">
          <el-input v-model="category.url">
            <i slot="suffix" v-if="isTranslitLock" @click="translitToggle" class="el-input__icon el-icon-lock input-lock"></i>
            <i slot="suffix" v-else @click="translitToggle" class="el-input__icon el-icon-unlock input-unlock"></i>
          </el-input>
        </el-form-item>
        <el-form-item label="Активна" prop="active">
          <el-switch v-model="category.active"></el-switch>
        </el-form-item>
        <el-form-item label="Належить до" prop="parent">
          <el-select v-model="category.parent" filterable placeholder="Корінева категорія">
            <el-option
              v-for="category in categories"
              :key="category._id"
              :label="category.name"
              :value="category._id"
              :disabled="category.disabled"
            >
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="Властивості" prop="properties">
          <!-- Table of selected properties -->
          <draggable tag="ul" :list="category.properties" handle=".property-handle" class="properties">
            <li v-for="property in category.properties" :key="property._id" :class="property.type">
              <div class="property-info">
                <span class="property-handle">
                  <font-awesome-icon :icon="['fas', 'ellipsis-v']"/>
                </span>
                <span v-if="property.type === 'property'" class="property-name">
                  {{ property.name }}
                </span>
                <span v-else-if="property.type === 'divider'" class="property-name">
                  <el-input size="small" v-model="property.name"></el-input>
                </span>
              </div>
              <div>
                <el-button size="mini" type="danger" plain @click="deletePropertyFromList(property)">Видалити</el-button>
              </div>
            </li>
          </draggable>
          <!-- Add property to list block -->
          <div class="mt-2">
            <el-select v-model="selectedPropertyId" filterable placeholder="Оберіть властивість">
              <el-option
                v-for="property in propertiesList"
                :key="property.index"
                :label="property.name"
                :value="property._id"
                :disabled="property.disabled"
              >
              </el-option>
            </el-select>
            <el-button type="primary" @click="addPropertyToList" plain>
              Додати властивість
            </el-button>
            <el-button type="success" @click="addDividerToList" plain>
              Додати розділювач
            </el-button>
          </div>
        </el-form-item>
      </el-form>
    </template>
    <template slot="footer">
      <el-button v-if="$route.params.id === 'create'"
                 type="primary"
                 @click="handlerCreate(category)"
                 :loading="loading">
        Стоврити категорію
      </el-button>
      <el-button v-else
                 type="primary"
                 @click="handlerUpdate(category)"
                 :loading="loading">
        Зберегти
      </el-button>
    </template>
  </PageContainer>
</template>

<script>
import PageContainer from "@/components/admin/PageContainer";
import draggable from "vuedraggable"
import moment from "moment"
import cyrillicToTranslit from "cyrillic-to-translit-js"

export default {
  layout: 'admin',
  middleware: ['admin-auth'],
  components: {PageContainer, draggable},
  data() {
    return {
      loading: false,
      category: {
        _id: '',
        name: '',
        url: '',
        active: true,
        parent: 'root',
        properties: []
      },
      propertiesList: [],
      selectedPropertyId: '',
      isTranslitLock: this.$route.params.id === 'create',
      validation: {
        name: [
          {required: true, message: 'Назва категорії не може бути пустою', trigger: 'blur'}
        ],
        url: [
          {required: true, message: 'Символьний код повинен бути заповнений', trigger: 'blur'}
        ],
      }
    }
  },
  async asyncData({store, params}) {
    if (params.id !== 'create') {
      const category = await store.dispatch('category/fetchById', params.id)
      const propertiesList = await store.dispatch('property/fetchProperties')
      return {category, propertiesList}
    } else {
      return {
        category: {
          _id: '',
          name: '',
          url: '',
          active: true,
          parent: 'root',
          properties: []
        },
        propertiesList: [],
      }
    }
  },
  computed: {
    categories() {
      const categories = this.$store.state.category.categories
      if (this.$route.params.id !== 'create') {
        categories.find(category => category._id === this.category._id).disabled = true
      }
      return [{name: 'Корінева категорія', _id: 'root'}, ...categories]
    },
  },
  mounted() {
    this.category.properties.forEach(property => {
      if (property.type === 'property') {
        const index = this.propertiesList.findIndex(prop => prop._id === property._id)
        this.propertiesList[index].disabled = true
      }
    })
  },
  methods: {
    addPropertyToList() {
      if (this.selectedPropertyId !== '') {

        const index = this.propertiesList.findIndex(prop => prop._id === this.selectedPropertyId)
        const property = this.propertiesList[index]

        this.category.properties.push({
          type: 'property',
          name: property.name,
          _id: property._id
        })

        this.propertiesList[index].disabled = true
        this.selectedPropertyId = ''
      } else {
        this.$message.warning('Спершу потрібно обрати властивість')
      }
    },
    addDividerToList() {
      this.category.properties.push({
        type: 'divider',
        name: '',
        _id: moment().format('DDMMYYYYHHmmssSSS')
      })
    },
    deletePropertyFromList(property) {
      this.category.properties = this.category.properties.filter(prop => prop !== property)

      if (property.type === 'property') {
        const index = this.propertiesList.findIndex(prop => prop._id === property._id)
        this.propertiesList[index].disabled = false
      }
    },
    async handlerCreate(category) {
      try {
        this.loading = true
        await this.$store.dispatch('category/create', category)
        this.$message.success(`Категорія "${this.category.name}" успішно створена`)
        await this.$router.push('/admin/catalog/categories/')
      } catch (e) {
        this.$message.error(`Не вдалося створити категорію. Помилка ${e}`)
      } finally {
        this.loading = false
      }
    },
    async handlerUpdate(category) {
      try {
        this.loading = true
        await this.$store.dispatch('category/update', category)
        this.$message.success(`Категорія "${this.category.name}" успішно оновлена`)
      } catch (e) {
        this.$message.error(`Не вдалося оновити категорію. Помилка ${e}`)
      } finally {
        this.loading = false
      }
    },
    handlerOnNameChange() {
      if (this.isTranslitLock) {
        this.category.url = cyrillicToTranslit({ preset: "uk" }).transform(this.category.name.toLocaleLowerCase(), '-')
      }
    },
    translitToggle() {
      this.isTranslitLock = !this.isTranslitLock
      this.handlerOnNameChange()
    }
  }
}
</script>

<style lang="scss" scoped>
.properties {
  list-style: none;
  margin: 0;
  padding: 0;
  color: #606266;
}

.property {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid $gray;
  border-radius: 0.5rem;
  padding: .2rem 1rem;
  margin-bottom: .5rem;
  margin-left: 1rem;

  &:hover {
    box-shadow: 0 0 10px 0px rgb(0 0 0 / 5%);;
  }

  &-info {
    display: flex;
    align-items: center;
    justify-content: space-between;

  }

  &-handle {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 1.2rem;
    width: 1.2rem;
    cursor: grab;
  }

  &-name {
    padding-left: .7rem;
  }
}

.divider {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid $main-color;
  padding: .2rem 1rem;
  margin-bottom: .5rem;
}

.input-lock {
  cursor: pointer;
  color: $main-color;
}
.input-unlock {
  cursor: pointer;

}
</style>
