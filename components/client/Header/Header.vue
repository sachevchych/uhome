<template>
  <el-header height="auto" style="padding: 0">
    <HeaderBar/>
    <HeaderNav/>
  </el-header>
</template>

<script>
import HeaderBar from "@/components/client/Header/HeaderBar";
import HeaderNav from "@/components/client/Header/HeaderNav";

export default {
  name: "Header",
  components: {
    HeaderNav,
    HeaderBar
  }
}
</script>

<style scoped>

</style>
