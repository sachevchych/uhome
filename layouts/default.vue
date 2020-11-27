<template>
  <div class="client">
    <header class="client-header">
      <HeaderBar/>
      <HeaderNav/>
      <div class="container-lg">
        <Navigation/>
      </div>
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
import AppFooterFirstFlore from "../components/client/FooterFirstFlore";
import AppFooterSecondFlore from "../components/client/FooterSecondFlore";
import HeaderBar from "@/components/client/Header/HeaderBar";
import HeaderNav from "@/components/client/Header/HeaderNav";
import Navigation from "@/components/client/Header/Navigation";

export default {
  components: {
    HeaderBar,
    HeaderNav,
    Navigation,
    AppFooterSecondFlore,
    AppFooterFirstFlore
  }
}
</script>

<style lang="scss">
html, body, #__nuxt, #__layout {
  height: 100%;
}

.client {
  background-color: #ffffff;
  font-family: 'Rubik', sans-serif !important;


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
