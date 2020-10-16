<template>
  <div class="breadcrumb">
    <el-breadcrumb separator-class="el-icon-arrow-right" class="breadcrumb">
      <el-breadcrumb-item :to="{ path: '/admin' }">Робочий стіл</el-breadcrumb-item>
      <el-breadcrumb-item>Статистика</el-breadcrumb-item>
      <el-breadcrumb-item>Статистика за січень</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
    export default {
        name: "AdminHeaderBreadCrumb"
    }
</script>

<style scoped>
  .breadcrumb {

  }
</style>
