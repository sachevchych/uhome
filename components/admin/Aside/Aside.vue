<template>
  <div class="aside">
    <el-menu
      router
      :default-active="$route.path"
      class="aside-menu"
      text-color="#989eb3"
      active-text-color="#5867dd"
      background-color="#242939"
    >
      <el-menu-item index="/admin" class="menu-link">
        <i class="el-icon-menu"></i>
        <span>Робочий стіл</span>
      </el-menu-item>
      <el-submenu index="/admin/store" class="menu-link">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">Магазин</span>
        </template>
        <el-menu-item index="/admin/store/orders">Замовленя</el-menu-item>
        <el-menu-item index="2-2">Список клієнтів</el-menu-item>
      </el-submenu>
      <el-submenu index="/admin/catalog" class="menu-link">
        <template slot="title">
          <i class="el-icon-document"></i>
          <span>Каталог товарів</span>
        </template>
        <el-menu-item index="/admin/catalog/products/">Список товарів</el-menu-item>
        <el-menu-item index="/admin/catalog/categories/">Категорії</el-menu-item>
        <el-menu-item index="/admin/catalog/properties/">Властивості товарів</el-menu-item>
      </el-submenu>
      <el-submenu index="/admin/settings" class="menu-link">
        <template slot="title">
          <i class="el-icon-setting"></i>
          <span>Налаштування</span>
        </template>
        <el-menu-item index="/admin/settings/users/">Користувачі</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<style lang="scss" scoped>

.aside {
  background-color: #242939;
  height: 100vh;
}

.aside-menu {
  border: 0;
  width: auto;
}

.aside-menu:not(.el-menu--collapse) {
  width: 250px;
}

.menu-link:hover span, li {
  color: #ffffff;
}

.menu-link:hover i {
  color: $main-color;
}

i {
  color: #434d6b;
}

.is-active {
  color: #ffffff !important;
}

.is-active > i {
  color: $main-color !important;
}


</style>

<script>
export default {}
</script>
