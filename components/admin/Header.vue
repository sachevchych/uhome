<template>
  <el-header class="header">
    <el-page-header title="Назад" @back="goBack"></el-page-header>
    <BreadCrumb/>
    <UserBar/>
  </el-header>
</template>

<script>
import UserBar from "./UserBar";
import BreadCrumb from "./BreadCrumb";

export default {
  name: "Header",
  components: {BreadCrumb, UserBar},
  methods: {
    goBack() {
      console.log('go back');
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
}
</style>
