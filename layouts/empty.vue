<template>
  <div>
    <div class="header">
      <img src="/img/logo.png" alt="logo">
    </div>
    <div class="content">
      <nuxt/>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    error() {
      return this.$store.getters.error
    }
  },
  watch: {
    error(value) {
      this.$message.error(value.response.data.message);
    }
  }
}
</script>

<style scoped>
.header {
  padding: 2rem 3rem;
}

.content {
  display: flex;
  justify-content: center;
  padding-top: 3rem;
}
</style>
