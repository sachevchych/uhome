<template>
  <div class="container-xxl">
    <div class="header">
      <div class="d-flex align-items-center justify-content-between">
        <nuxt-link to="/" class="logo">
          <img src="~/assets/images/logo_dark.svg" alt="logo">
        </nuxt-link>
        <div class="mobile-menu d-md-none">
          <el-dropdown trigger="click">
            <span class="mobile-menu-btn">
              <font-awesome-icon :icon="['fas', 'bars']" class="mobile-menu-icon"/> Меню
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item v-for="link in links" :key="link.link" class="mobile-menu-item">
                <nuxt-link :to="link.link" class="mobile-menu-link">
                  {{ link.label }}
                </nuxt-link>
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
        <div class="search mx-4 d-none d-md-block">
          <el-input placeholder="Пошук за товарами та категоріями" v-model="search">
            <i slot="suffix" class="el-icon-search el-input__icon"></i>
          </el-input>
        </div>
        <div class="nav-buttons d-none d-md-flex justify-content-between align-items-center">
          <!-- Account -->
          <el-tooltip content="Особистий кабінет" placement="top">
            <el-col class="nav-sign-in">
              <i class="el-icon-user"></i>
              <span>
                <small>Привіт, гість</small>
                <br>Мій аккаунт
              </span>
            </el-col>
          </el-tooltip>
          <!-- Cart -->
          <cart-button/>
        </div>
      </div>
    </div>
    <desktop-nav :links="links"/>
    <mobile-nav/>
  </div>
</template>

<script>
import DesktopNav from "@/components/client/Header/Navigation/DesktopNav";
import MobileNav from "@/components/client/Header/Navigation/MobileNav";
import CartButton from "@/components/client/Cart/CartButton";

export default {
  components: {CartButton, MobileNav, DesktopNav},
  data() {
    return {
      search: '',
      links: [
        {label: 'Головна сторінка', link: '/'},
        {label: 'Блог', link: '/blog'},
        {label: 'Про нас', link: '#'},
        {label: 'Доставка та оплата', link: '#'}
      ]
    };
  }
}
</script>

<style lang="scss" scoped>
.header {
  padding: .75rem 0;
}

.logo {
  display: block;

  img {
    margin-top: .5rem;
    height: 70px;
    width: auto;
  }
}

.mobile-menu {
  &-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: $primary;
    padding: .625rem 1.375rem;
    transition: all 0.25s ease-in-out;
    cursor: pointer;
    box-shadow: 0 0.5rem 1.125rem -0.5rem rgba($primary, 0.9);
    font-size: .9rem;
    line-height: 1.5;
    color: #ffffff;
    border-radius: .3125rem;
  }

  &-icon {
    font-size: 1rem;
    margin-right: .5rem;
  }

  &-link {
    color: #606266;
    cursor: pointer;
    text-decoration: none;
  }

  &-item {
    &:hover {
      .mobile-menu-link {
        color: $primary;
      }
    }
  }
}

.search {
  width: 100%;
}

.nav-buttons {
  i {
    font-size: 1.45rem;
    color: #4b566b;
  }

  small {
    color: #7d879c;
    font-size: 80%;
    line-height: 1rem;
  }

  span {
    color: #4b566b;
    font-size: .875rem;
    line-height: 1.2rem;
    margin-left: 10px;
  }
}

.nav-sign-in {
  height: 46px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  min-width: 130px;
  cursor: pointer;
}


</style>
