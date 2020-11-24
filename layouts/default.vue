<template>
  <div class="client">
    <header class="client-header">
      <HeaderBar/>
      <HeaderNav/>
      <div class="container">
        <Navigation/>
      </div>
    </header>
    <main class="client-main">
      <AppPageBar/>
      <div class="container" style="padding: 3rem 0">
        <nuxt/>
      </div>
    </main>
    <footer class="client-footer">
      <AppFooterFirstFlore/>
      <AppFooterSecondFlore/>
    </footer>
  </div>
</template>

<script>
import AppPageBar from "../components/client/PageBar";
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
    AppFooterFirstFlore,
    AppPageBar
  }
}
</script>

<style lang="scss">
html, body, #__nuxt, #__layout {
  height: 100%;
}

.client {
  background-color: #ffffff;
  font-family: 'Rubik', sans-serif;

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
