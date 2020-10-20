<template>
  <PageContainer title="Редагування категорії">
    <template slot="header">

    </template>
    <template slot="content">
      <el-form
        :model="category"
        :rules="validation"
        :default-sort="{prop: 'sort', order: 'descending'}"
        ref="category"
        label-width="120px">
        <el-form-item label="Назва" prop="name">
          <el-input v-model="category.name"></el-input>
        </el-form-item>
        <el-form-item label="Активна" prop="active">
          <el-switch v-model="category.active"></el-switch>
        </el-form-item>
        <el-form-item label="Належить до" prop="parent">
          <el-select v-model="category.parent" placeholder="Оберіть батківську категорію">
            <el-option
              v-for="item in categories"
              :key="item._id"
              :label="item.name"
              :value="item._id"
            >
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="Властивості" prop="properties">
          <!-- Table of selected properties -->
          <el-table :data="category.properties" size="small">
            <el-table-column prop="sort" label="Сортування" sortable>
              <template slot-scope="scope">
                <el-input-number size="small" v-model="scope.row.sort" :min="1" :max="100"></el-input-number>
              </template>
            </el-table-column>
            <el-table-column prop="name" label="Назва"></el-table-column>
            <el-table-column>
              <template slot-scope="scope">
                <el-button
                  size="mini"
                  type="danger"
                  @click="deletePropertyFromList(scope.row)">Видалити
                </el-button>
              </template>
            </el-table-column>
          </el-table>
          <!-- Add property to list block -->
          <div class="mt-2">
            <el-select v-model="selectedProperty" filterable placeholder="Оберіть властивість">
              <el-option
                v-for="property in properties"
                :key="property.index"
                :label="property.name"
                :value="property._id"
                :disabled="property.disabled"
              >
              </el-option>
            </el-select>
            <el-button type="primary" @click="addPropertyToList(selectedProperty)" :loading="loading.addButton" plain>
              Додати властивість
            </el-button>
          </div>
        </el-form-item>
      </el-form>
      <div class="d-flex justify-content-end">
        <el-button type="primary" @click="handlerCreate(category)">Стоврити категорію</el-button>
      </div>
    </template>
  </PageContainer>
</template>

<script>
import PageContainer from "@/components/admin/PageContainer";

export default {
  layout: 'admin',
  middleware: ['admin-auth'],
  components: {PageContainer},
  data() {
    return {
      loading: {

      },
      category: {
        name: '',
        active: true,
        parent: 'root',
        properties: []
      },
      categories: [
        {_id: 'root', name: 'Корінева категорія'}
      ],
      properties: [],
      selectedProperty: '',
      validation: {
        name: [
          {required: true, message: 'Назва категорії не може бути пустою', trigger: 'blur'}
        ],
      }
    }
  },
  mounted() {
    this.fetchProperties()
  },
  methods: {
    async fetchProperties() {
      try {
        this.properties = await this.$store.dispatch('property/fetchProperties')
      } catch (e) {
        this.$message.error(`Не вдалося завантажити властивості. Помилка: ${e}`)
      }
    },
    addPropertyToList(id) {
      if (this.selectedProperty !== '') {

        const index = this.properties.findIndex(prop => prop._id === id)
        const property = this.properties[index]

        this.category.properties.push({
          sort: 50,
          name: property.name,
          _id: property._id
        })

        this.properties[index].disabled = true
        this.selectedProperty = ''
      } else {
        this.$message.warning('Спершу потрібно обрати властивість')
      }
    },
    deletePropertyFromList(property) {
      this.category.properties = this.category.properties.filter(prop => prop !== property)

      const index = this.properties.findIndex(prop => prop._id === property._id)
      this.properties[index].disabled = false
    },
    async handlerCreate(category) {
      console.log(category)
    }
  }
}
</script>

<style scoped>

</style>
