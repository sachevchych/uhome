<template>
  <page-container title="Список замовлень">
    <template slot="content">
        <el-table :data="orders" class="w-100">
          <el-table-column
            prop="_id"
            label="№"
            width="180">
          </el-table-column>
          <el-table-column
            prop="name"
            label="Ім'я клієнта"
            width="180">
          </el-table-column>
          <el-table-column
            prop="phone"
            label="Номер телефону">
          </el-table-column>
        </el-table>
    </template>
  </page-container>
</template>

<script>
import PageContainer from "@/components/admin/PageContainer";
export default {
  components: {PageContainer},
  layout: "admin",
  middleware: ['admin-auth'],
  head() {
    return {
      title: 'Список замовлень'
    }
  },
  data() {
    return {
      orders: []
    }
  },
  async asyncData({store}) {
    const orders =  await store.dispatch('admin/order/fetchAll')
    return {orders}
  }
}
</script>

<style scoped>

</style>
