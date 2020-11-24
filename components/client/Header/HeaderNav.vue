<template>
  <div class="container">
    <el-row :gutter="20" class="nav-bar" type="flex" justify="space-between">
      <el-col :xs="8" :sm="8" :md="5" :lg="5" class="logo">
        <nuxt-link to="/">
          <img src="https://demo.createx.studio/cartzilla/img/logo-dark.png" alt="logo">
        </nuxt-link>
      </el-col>
      <el-col :xs="8" :sm="8" :md="7" :lg="7" class="hidden-sm-and-down search">
        <el-input placeholder="Пошук за товарами та категоріями" v-model="search">
          <i slot="suffix" class="el-icon-search el-input__icon"></i>
        </el-input>
      </el-col>
      <el-col :xs="8" :sm="8" :md="12" :lg="12" class="nav-buttons">
        <el-row :gutter="15" type="flex" justify="end">
          <!-- More -->
          <el-col class="nav-more hidden-md-and-up">
            <el-tooltip placement="top">
              <i class="el-icon-menu"></i>
            </el-tooltip>
          </el-col>
          <!-- Compare -->
          <el-popover placement="bottom" class="hidden-sm-and-down">
            <div>
              COMPARE CONTENT
            </div>
            <el-col class="nav-compare" slot="reference">
              <el-tooltip content="Таблиця порівняння" placement="top">
                <i class="el-icon-s-data"></i>
              </el-tooltip>
            </el-col>
          </el-popover>
          <!-- Wish List -->
          <el-popover placement="bottom" class="hidden-sm-and-down">
            <div>
              WISH LIST CONTENT
            </div>
            <el-col class="nav-wish-list" slot="reference">
              <el-tooltip content="Список бажань" placement="top">
                <i class="el-icon-star-off"></i>
              </el-tooltip>
            </el-col>
          </el-popover>
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
          <el-popover placement="bottom" width="280" trigger="hover" :close-delay="300">
            <div>
              CART CONTENT
            </div>
            <el-col class="nav-cart" slot="reference">
              <div class="nav-cart-icon">
                <el-badge :max="99" :value="2" class="cart-counter"/>
                <i class="el-icon-shopping-cart-2"></i>
              </div>
              <span>
                <small>Моя коризна</small>
                <br>15 299₴
              </span>
            </el-col>
          </el-popover>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
    import 'element-ui/lib/theme-chalk/display.css';

    export default {
        data() {
            return {
                activeIndex: '1',
                search: '',
            };
        }
    }
</script>

<style>
  .nav-bar {
    padding: .75rem 0;
  }

  .logo a {
    display: block;
    height: auto;
  }

  .logo {
    padding: 0.7rem 0;
    float: left;
  }

  .logo img {
    height: 34px;
    width: auto;
  }

  .search {
    padding: 0.7rem 1rem;
    width: 80%;
  }

  .nav-buttons {
    padding-top: 0.4rem;
  }

  .nav-buttons i {
    font-size: 1.45rem;
    color: #4b566b;
  }

  .nav-buttons small {
    color: #7d879c;
    font-size: 80%;
    line-height: 1rem;
  }

  .nav-buttons span {
    color: #4b566b;
    font-size: .875rem;
    line-height: 1.2rem;
    margin-left: 10px;
  }

  .nav-more {
    height: 46px;
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  .nav-compare {
    height: 46px;
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  .nav-wish-list {
    height: 46px;
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  .nav-sign-in {
    height: 46px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    min-width: 130px;
    cursor: pointer;
  }

  .nav-cart {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    min-width: 140px;
    cursor: pointer;
  }

  .nav-cart-icon {
    background-color: #f3f5f9;
    border-radius: 50%;
    width: 46px;
    height: 46px;
    display: block;
    text-align: center;
    position: relative;
  }

  .nav-cart-icon i {
    margin: 0.76rem 0 0 0;
  }

  .cart-counter {
    position: absolute;
    left: 1.8rem;
    top: -0.3rem;
    font-weight: 500;
  }

  .nav-menu {
    border-bottom: none !important;
  }
</style>
