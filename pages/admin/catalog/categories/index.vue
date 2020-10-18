<template>
  <PageContainer title="Список категорій">
    <template slot="header">
      <el-button type="primary" @click="$router.push('/admin/catalog/categories/create')" size="medium">
        Додати категорію
      </el-button>
    </template>
    <template slot="content">

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
  }
}
</script>

<style scoped>
</style>
