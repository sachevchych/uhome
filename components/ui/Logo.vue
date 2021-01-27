<template>
  <div class="logo">
    <nuxt-link to="/">
      <nuxt-img :src="dark ? '/img/logo_dark.png': '/img/logo.png'" alt="Логотип uHome" width="188" />
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: "Logo",
  props: {
    dark: {
      type: Boolean,
      default: false
    },
    size: {
      type: String, // sm, md, lg
      default: 'md'
    }
  }
}
</script>

<style scoped>

</style>
