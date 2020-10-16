<template>
  <el-menu class="nav-menu hidden-sm-and-down" router :default-active="$route.path" mode="horizontal"
           @select="handleSelect">
    <el-submenu index="/catalog/">
      <template slot="title">Каталог товарів</template>
      <el-menu-item index="2-1">Велика побутова техніка</el-menu-item>
      <el-menu-item index="2-2">Вбудована побутова техніка</el-menu-item>
      <el-menu-item index="2-3">Техніка для дому</el-menu-item>
      <el-submenu index="2-4">
        <template slot="title">Техніка для кухні</template>
        <el-menu-item index="2-4-1">Соковитискачі</el-menu-item>
        <el-menu-item index="2-4-2">Міксери</el-menu-item>
        <el-menu-item index="2-4-3">Блендери</el-menu-item>
        <el-menu-item index="2-4-3">Кухонні комбайни</el-menu-item>
      </el-submenu>
    </el-submenu>
    <el-menu-item index="/">Головна сторінка</el-menu-item>
    <el-menu-item index="/vendors/">Виробники</el-menu-item>
    <el-menu-item index="/blog/">Наш блог</el-menu-item>
    <el-menu-item index="5">Контакти</el-menu-item>
    <el-menu-item index="6">Про нас</el-menu-item>
  </el-menu>
</template>

<script>
export default {
  name: "Navigation",
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style scoped>

</style>
