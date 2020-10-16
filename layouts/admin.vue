<template>
  <el-container class="admin">
    <el-aside width="250px">
      <Aside/>
    </el-aside>
    <el-container>
      <el-header class="header">
        <Header/>
      </el-header>
      <el-main>
        <nuxt/>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import Aside from "@/components/admin/Aside/Aside";
import Header from "@/components/admin/Header/HeaderPanel";

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

<style lang="scss" scoped>
.admin {
  background-color: #E9F0F6;
}

.header {
  background-color: $white;
  box-shadow: 0 0 40px 0 rgba(82, 63, 105, 0.1);
}

</style>
