<template>
  <PageContainer :title="isCreateNew ? 'Створення властивості' : 'Редагування властивості' ">
    <template v-slot:header>
      <!-- TODO some actions -->
    </template>
    <template v-slot:content>
      <el-form ref="propertyForm" :model="property" :rules="rules" label-width="180px" v-loading="loading.page">
        <el-form-item label="Назва" prop="name">
          <el-input v-model="property.name"></el-input>
        </el-form-item>
        <el-form-item label="Тип">
          <el-select v-model="property.type" placeholder="Оберіть тип властивості">
            <el-option label="Рядок" value="string"></el-option>
            <el-option label="Список" value="list"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="Множинне">
          <el-switch v-model="property.multiple"></el-switch>
        </el-form-item>
        <el-form-item label="Головна властивість">
          <el-switch v-model="property.main"></el-switch>
        </el-form-item>
        <el-form-item label="Значення" v-if="property.type === 'list'">
          <draggable tag="ul" class="value-list" :list="property.options" handle=".handle" v-bind="dragOptions">
            <transition-group type="transition" name="flip-list">
              <li v-for="option in property.options" :key="option.id" class="value-item">
                <span class="handle">
                  <font-awesome-icon :icon="['fas', 'bars']"/>
                </span>
                <el-input v-model="option.name" size="small" class="value-input"></el-input>
                <div class="value-remove">
                  <el-button type="danger" size="mini" plain @click="handleDeletePropertyValue(option.id)">Видалити</el-button>
                </div>
              </li>
            </transition-group>
          </draggable>
          <el-button @click="handleAddValueInput" class="mt-2">Додати значення</el-button>
        </el-form-item>
      </el-form>
    </template>
    <template v-slot:footer>
      <el-button v-if="isCreateNew" type="primary" @click="handleCreate" :loading="loading.action">Створити</el-button>
      <el-button v-else type="primary" @click="handleUpdate" :loading="loading.action">Зберегти</el-button>
    </template>
  </PageContainer>
</template>

<script>
import PageContainer from "@/components/admin/PageContainer";
import draggable from 'vuedraggable'
import moment from 'moment'

export default {
  layout: 'admin',
  middleware: ['admin-auth'],
  components: {PageContainer, draggable},
  data() {
    return {
      loading: {
        page: true,
        action: false
      },
      property: {
        _id: '',
        name: '',
        type: 'string',
        multiple: false,
        main: false,
        options: []
      },
      rules: {
        name: [{required: true, message: 'Властивість не може бути збережена без назви', trigger: 'blur'}]
      }
    };
  },
  computed: {
    isCreateNew: function () {
      return this.$route.params.id === 'create'
    },
    id: function () {
      return this.$route.params.id
    },
    dragOptions() {
      return {
        animation: 0,
        group: "description",
        disabled: false,
        ghostClass: "ghost"
      };
    }
  },
  mounted() {
    if (this.isCreateNew) {
      this.loading.page = false
    } else {
      this.fetchProperty(this.id)
    }
  },
  methods: {
    async fetchProperty(id) {
      try {
        this.loading.page = true
        this.property = await this.$store.dispatch('property/fetchById', id)
      } catch (e) {
        this.$message.error(e)
      } finally {
        this.loading.page = false
      }
    },
    handleCreate() {
      this.$refs.propertyForm.validate(async valid => {
        if (valid) {
          this.loading.action = true

          try {
            const response = await this.$store.dispatch('property/create', this.property)
            this.$message.success('Властивість створено')
            await this.$router.push(`./${response._id}`)
          } catch (e) {
            this.$message.error(e)
          } finally {
            this.loading.action = false
          }
        } else {
          this.$message.warning("Ви не заповнили всі необхідні поля")
        }
      })
    },
    handleUpdate() {
      this.$refs.propertyForm.validate(async valid => {
        if (valid) {
          try {
            this.loading.action = true
            await this.$store.dispatch('property/update', this.property)
            this.$message.success('Властивість оновлено')
          } catch (e) {
            this.$message.error(e)
          } finally {
            this.loading.action = false
          }
        } else {
          this.$message.warning("Ви не заповнили всі необхідні поля")
        }
      })
    },
    handleAddValueInput() {
      this.property.options.push({
        id: moment().format('DDMMYYYYHHmmssSSS'),
        name: '',
      });
    },
    handleDeletePropertyValue(id) {
      this.$confirm('Ви впевнені що бажаєте видалити значення?', 'Увага!', {
        confirmButtonText: 'Так',
        cancelButtonText: 'Відмінити',
        type: 'warning'
      }).then(() => {
        this.property.options = this.property.options.filter(option => option.id !== id)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.value-list {
  list-style: none;
  margin: 0;
  padding: 0;
  border: 1px solid $divider;
  border-radius: .5rem;
  max-width: 500px;

  .value-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: .5rem;
    border-bottom: 1px solid $divider;

    &:last-child {
      border-bottom: none;
    }

    .handle {
      font-size: 1rem;
      color: $dark;
      cursor: grab;
      margin-right: 1rem;
      margin-left: .5rem;
    }
  }

  .value-remove {
    margin-left: 1rem;
    margin-right: .5rem;
  }

  .ghost {
    opacity: 0.5;
    background: #c8ebfb;
  }

  .flip-list-move {
    transition: transform 0.5s;
  }

  .value-empty {
    font-size: 14px;
    color: #909399;
    text-align: center;
    display: block;
  }
}
</style>
