<template>
  <PageContainer title="Редагування категорії">
    <template slot="header">

    </template>
    <template slot="content">
      <el-form
        :model="category"
        :rules="validation"
        ref="category"
        label-width="120px">
        <el-form-item label="Назва" prop="name">
          <el-input v-model="category.name"></el-input>
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
          <el-table
            :data="category.properties"
            border
            style="width: 100%">
            <el-table-column
              prop="label"
              label="Name"
              width="180">
            </el-table-column>
            <el-table-column
              prop="key"
              label="key">
            </el-table-column>
          </el-table>
          <el-select v-model="selectedProperty" filterable placeholder="Оберіть властивість">
            <el-option
              v-for="property in properties"
              :key="property._id"
              :label="property.name"
              :value="property._id">
            </el-option>
          </el-select>
          <el-button type="primary" @action="" plain >Додати властивість</el-button>
        </el-form-item>

      </el-form>
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
      category: {
        name: '',
        parent: '',
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
    addProperty() {
      this.category.properties.push()
    }
  }
}
</script>

<style scoped>

</style>
