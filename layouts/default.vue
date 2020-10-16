<template>
  <el-container>
    <Header/>
    <el-main class="main">
      <AppPageBar/>
      <div class="container" style="padding: 3rem 0">
        <nuxt/>
      </div>
    </el-main>
    <el-footer class="footer">
      <AppFooterFirstFlore/>
      <AppFooterSecondFlore/>
    </el-footer>
  </el-container>
</template>

<script>
import AppPageBar from "../components/client/PageBar";
import AppFooterFirstFlore from "../components/client/FooterFirstFlore";
import AppFooterSecondFlore from "../components/client/FooterSecondFlore";
import Header from "@/components/client/Header/Header";

export default {
  components: {
    Header,
    AppFooterSecondFlore,
    AppFooterFirstFlore,
    AppPageBar
  }
}
</script>

<style>
body {
  background-color: #ffffff !important;
}

.main {
  padding: 0;
}

.footer {
  padding: 0;
}
</style>
