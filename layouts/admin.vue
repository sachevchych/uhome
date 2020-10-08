<template>
  <el-container :style="{height: '100%'}">
    <Aside/>
    <el-container style="width: 100%">
      <el-main class="main">
        <Header/>
        <nuxt/>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import Aside from "../components/admin/Aside";
import Header from "../components/admin/Header";

export default {
  components: {Header, Aside},
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

<style>
body {
  background-color: #F2F3F8;
}

.main {
  padding: 0;
  min-width: 768px;
}
</style>
