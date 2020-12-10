<template>
  <div class="d-flex h-100 align-items-center justify-content-center">
      <nuxt/>
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
