<template>
  <el-container>
    <el-header height="auto" class="basic-box-shadow" style="padding: 0">
      <AppHeaderBar/>
      <AppHeaderNav/>
    </el-header>
    <el-main style="padding: 0">
      <AppPageBar/>
      <div class="container" style="padding: 3rem 0">
        <nuxt/>
      </div>
    </el-main>
    <el-footer style="padding: 0">
      <AppFooterFirstFlore/>
      <AppFooterSecondFlore/>
    </el-footer>
  </el-container>
</template>

<script>
  import AppHeaderBar from "../components/client/HeaderBar";
  import AppHeaderNav from "../components/client/HeaderNav";
  import AppPageBar from "../components/client/PageBar";
  import AppFooterFirstFlore from "../components/client/FooterFirstFlore";
  import AppFooterSecondFlore from "../components/client/FooterSecondFlore";

  export default {
    components: {
      AppFooterSecondFlore,
      AppFooterFirstFlore,
      AppPageBar,
      AppHeaderBar,
      AppHeaderNav,
    }
  }
</script>

<style>
  body {
    margin: 0;
  }
</style>
