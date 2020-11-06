<template>
  <PageContainer title="Каталог товарів">
    <template v-slot:header>
      <el-button type="primary" @click="addNewProduct" size="medium">Додати товар</el-button>
    </template>
    <template v-slot:content>
      <el-table :data="products">
        <el-table-column type="selection"/>
        <el-table-column label="Фото" width="80px">
          <template slot-scope="{row: {imageUrl}}">
            <el-image
              :src="imageUrl"
              fit="scale-down"
              style="width: 45px; height: 45px"
            >
            </el-image>
          </template>
        </el-table-column>
        <el-table-column label="Назва товару" prop="name"/>
        <el-table-column
          label="Статус"
          prop="active"
        >
          <template slot-scope="{row: {active}}">
            <el-tag
              :type="active === true ? 'success' : 'warning'"
              disable-transitions
            >
              {{ active === true ? 'Активний' : 'Не активний' }}
            </el-tag>
          </template>
        </el-table-column>
        <el-table-column label="Дата">
          <template slot-scope="{row: {date}}">
            {{ new Date(date).toLocaleString() }}
          </template>
        </el-table-column>
        <el-table-column
          fixed="right"
          label="Операції"
        >
          <template slot-scope="{row: {_id, name}}">
            <el-button @click="openProduct(_id)" type="primary" size="mini" plain>
              Редагувати
            </el-button>
            <el-button @click="removeProduct(_id, name)" type="danger" size="mini" plain>
              Видалити
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </template>
  </PageContainer>

</template>

<script>
import PageContainer from "@/components/admin/PageContainer";

export default {
  layout: 'admin',
  middleware: ['admin-auth'],
  components: {PageContainer},
  head() {
    return {
      title: 'Каталог товарів'
    }
  },
  data() {
    return {
      loading: true,
      products: null
    }
  },
  async asyncData({store}) {
    const products = await store.dispatch('product/fetchProducts')
    return {products}
  },
  methods: {
    addNewProduct() {
      this.$router.push(`/admin/catalog/products/create/`)
    },
    openProduct(id) {
      this.$router.push(`/admin/catalog/products/${id}`)
    },
    async removeProduct(id, name) {
      try {
        await this.$confirm(`Видалити ${name}?`, 'Увага!', {
          confirmButtonText: 'Так',
          cancelButtonText: 'Відмінити',
          type: "warning"
        })
        await this.$store.dispatch('product/remove', id)
        this.products = this.products.filter(p => p._id !== id)
        this.$message.success(`${name} видалено`)
      } catch (e) {
        this.$message.warning(e)
      }
    }
  }
}
</script>

<style scoped>
</style>
