<template>
  <page-container title="Список замовлень" :footer="false">
    <template slot="content">
      <el-table :data="orders" class="w-100" :default-sort = "{prop: '_id', order: 'descending'}">
        <el-table-column prop="_id" label="№" width="80" sortable>
        </el-table-column>
        <el-table-column  label="Ім'я клієнта" width="180">
          <template slot-scope="scope">
            {{ scope.row.contacts.name }} {{ scope.row.contacts.surname }}
          </template>
        </el-table-column>
        <el-table-column prop="contacts.phone" label="Номер телефону">
        </el-table-column>
        <el-table-column label="Статус замовлення">
          <template slot-scope="scope">
            <el-tag :type="orderStatuses[scope.row.status].type" size="medium">{{ orderStatuses[scope.row.status].label }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column label="Дії" width="150">
          <template slot-scope="scope">
            <el-button size="mini" icon="el-icon-edit" @click="edit(scope.row._id)" round>Редагувати</el-button>
          </template>
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
    const orders = await store.dispatch('admin/order/fetchAll')
    return {orders}
  },
  computed: {
    orderStatuses() {
      return this.$store.state.admin.order.statuses
    }
  },
  methods: {
    edit(id) {
      this.$router.push(`/admin/sale/order/${id}`)
    }
  }
}
</script>

<style scoped>

</style>
