<template>
  <el-header class="header-panel">
    <el-button type="primary" icon="el-icon-arrow-left" size="small" @click="goBack" plain round>Попередня сторінка</el-button>
    <UserBar/>
  </el-header>
</template>

<script>
import UserBar from "./UserBar";
import BreadCrumb from "./BreadCrumb";

export default {
  name: "Header",
  components: {UserBar},
  methods: {
    goBack() {
      this.$router.back()
    }
  }
}
</script>

<style lang="scss" scoped>
.header-panel {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
