<template>
  <div class="bar-wrap">
    <div class="container-xxl">
      <div class="header-bar d-flex justify-content-between align-items-center">
        <div class="header-dark-bar-el">
          <el-dropdown>
              <span class="el-dropdown-link">
                <i class="el-icon-phone"></i>
                <span>+38 (050) 024 3637</span>
                <i class="el-icon-arrow-down"></i>
              </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item class="clearfix dropdown-item">
                <i class="el-icon-phone-outline "></i>
                <span>+38 050 024 3637</span>
              </el-dropdown-item>
              <el-dropdown-item class="clearfix dropdown-item">
                <i class="el-icon-phone-outline"></i>
                <span>+38 050 024 3637</span>
              </el-dropdown-item>
              <el-dropdown-item class="clearfix dropdown-item">
                <i class="el-icon-phone-outline"></i>
                <span>+38 050 024 3637</span>
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
        <div>
          <div class="header-dark-bar-el">
            <el-dropdown>
              <span>
                <i class="el-icon-location-information"></i>
                Відслідкувати
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>За номером замовлення</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Topbar"
}
</script>

<style lang="scss" scoped>
.bar-wrap {
  background-color: #373F50;
}

.header-dark-bar-el {
  margin: 0.7rem 0;
  color: rgba(255, 255, 255, 0.65);
  font-size: 14px;
  cursor: pointer;
}

.header-dark-bar-el {
  margin-right: 1rem;
}

.header-dark-bar-el:last-child {
  margin-right: 0;
}

.header-dark-bar-el span {
  color: rgba(255, 255, 255, 0.85);
}

.header-dark-bar-el:hover span {
  color: #ffffff;
}

.header-bar i {
  color: $main-color;
  padding-right: 2px;
}
</style>
