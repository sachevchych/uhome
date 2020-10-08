<template>
  <div class="wrap">
    <div class="page-bar">
      <h1>Список категорії</h1>
    </div>
    <div class="container">

    </div>
  </div>

</template>

<script>
export default {
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
