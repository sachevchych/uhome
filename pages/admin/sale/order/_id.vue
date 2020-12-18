<template>
  <page-container :title="`Замовлення №${order._id}`">
    <template slot="content">
      Замовлення
    </template>
  </page-container>
</template>

<script>
import PageContainer from "@/components/admin/PageContainer";
export default {
  layout: 'admin',
  middleware: ['admin-auth'],
  components: {PageContainer},
  async validate({store, params}) {
    await store.dispatch('admin/order/fetchOne', params.id)
    return !!store.state.admin.order.order
  },
  computed: {
    order() {
      return this.$store.state.admin.order.order
    }
  }
}
</script>

<style scoped>

</style>
