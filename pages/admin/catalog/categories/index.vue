<template>
  <PageContainer title="Список категорій">
    <template slot="header">
      <el-button type="primary" @click="$router.push('/admin/catalog/categories/create')" size="medium">
        Додати категорію
      </el-button>
    </template>
    <template slot="content">
      <el-table
        :data="categories"
        v-loading="loading.data"
        row-key="_id">
        <el-table-column prop="name" label="Назва" sortable></el-table-column>
        <el-table-column prop="active" label="Активність">
          <template slot-scope="scope">
            <el-tag :type="scope.row.active ? '' : 'warning'">{{ scope.row.active ? 'Активний' : 'Не активний' }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column align="right">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEditCategory(scope.row)">Редагувати</el-button>
            <el-button size="mini" type="danger" @click="handleDeleteCategory(scope.row)">Видалити</el-button>
          </template>
        </el-table-column>
      </el-table>
    </template>
  </PageContainer>
</template>

<script>
import PageContainer from "@/components/admin/PageContainer";

export default {
  components: {PageContainer},
  layout: 'admin',
  middleware: ['admin-auth'],
  head() {
    return {
      title: 'Список категорій'
    }
  },
  data() {
    return {
      loading: {
        data: false
      },
      categories: []
    }
  },
  async asyncData({store}) {
    const categories = await store.dispatch('category/fetchCategoriesTree')
    return {categories}
  },
  methods: {
    handleEditCategory(category) {
      this.$router.push(`/admin/catalog/categories/${category._id}`)
    },
    async handleDeleteCategory(category) {
      try {
        await this.$confirm(`Ви впевнені що хочете видалити категорію "${category.name}"?`, 'Увага!', {
          confirmButtonText: 'Так',
          cancelButtonText: 'Ні',
          type: 'warning'
        })
        try {
          await this.$store.dispatch('category/remove', category._id)
          this.categories = this.categories.filter(cate => cate._id !== category._id)
          this.$message.success('Категорія була успішно видалена')
        } catch (e) {
          this.$message.error(`Не вдалося видалити категорію. Помилка: ${e}`)
        }
      } catch (e) {
        this.$message({
          type: 'info',
          message: 'Категорія не була видалена'
        })
      }
    }
  },
}
</script>

<style scoped>
</style>
