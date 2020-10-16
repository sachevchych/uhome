<template>
  <div>
    <div>
      Список категорій
    </div>
  </div>

</template>

<script>
export default {
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
