<template>
  <div class="client">
    <header class="client-header">
      <header-public/>
    </header>
    <main class="client-main">
      <nuxt/>
    </main>
    <footer class="client-footer">
      <footer-public/>
    </footer>
  </div>
</template>

<script>
import HeaderPublic from "@/components/client/Header/Header";
import FooterPublic from "@/components/client/Footer/Footer";

export default {
  components: {
    HeaderPublic,
    FooterPublic
  }
}
</script>

<style lang="scss" scoped>
.client {
  background-color: #ffffff;
  min-width: 400px;

  &-header {
    padding: 0;
  }

  &-main {
    padding: 0;
  }

  &-footer {
    padding: 0;
  }
}


</style>
