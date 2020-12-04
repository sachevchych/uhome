<template>
  <PageContainer title="Каталог товарів">
    <template v-slot:header>
      <el-button type="primary" @click="addNewProduct" size="medium">Додати товар</el-button>
    </template>
    <template v-slot:content>
      <el-table :data="products">
        <el-table-column label="Фото" width="80px">
          <template slot-scope="{row: {images}}">
            <el-image
              :src="images.length ? images[0].url : ''"
              fit="scale-down"
              style="width: 45px; height: 45px"
            >
            </el-image>
          </template>
        </el-table-column>
        <el-table-column label="Модель" prop="model" min-width="150px"/>
        <el-table-column label="Статус" prop="active" width="120px">
          <template slot-scope="{row: {active}}">
            <el-tag :type="active === true ? 'success' : 'warning'" disable-transitions>
              {{ active === true ? 'Активний' : 'Не активний' }}
            </el-tag>
          </template>
        </el-table-column>
        <el-table-column label="Дата" width="180px">
          <template slot-scope="{row: {date}}">
            {{ new Date(date).toLocaleString() }}
          </template>
        </el-table-column>
        <el-table-column fixed="right" label="Операції" width="150px">
          <template slot-scope="{row: {_id, model}}">
            <el-button @click="openProduct(_id)" type="primary" size="mini" icon="el-icon-edit" plain round class="mb-1">
              Редагувати
            </el-button>
            <el-button @click="removeProduct(_id, model)" type="danger" size="mini" icon="el-icon-delete" plain round>
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
