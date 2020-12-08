<template>
  <div class="client">
    <header class="client-header">
      <Header/>
    </header>
    <main class="client-main">
      <nuxt/>
    </main>
    <footer class="client-footer">
      <AppFooterFirstFlore/>
      <AppFooterSecondFlore/>
    </footer>
  </div>
</template>

<script>
import Header from "@/components/client/Header/Header";
import AppFooterFirstFlore from "../components/client/FooterFirstFlore";
import AppFooterSecondFlore from "../components/client/FooterSecondFlore";

export default {
  components: {
    Header,
    AppFooterSecondFlore,
    AppFooterFirstFlore
  }
}
</script>

<style lang="scss" scoped>
.client {
  background-color: #ffffff;

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
