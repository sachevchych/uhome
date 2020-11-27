<template>
  <div :class="theme">
    <div class="container-xl pt-lg-3">
      <div class="d-lg-flex justify-content-between align-items-center py-4 py-lg-3">
        <div class="order-lg-2 mb-3 mb-lg-0 pt-lg-2 d-flex justify-content-center">
          <el-breadcrumb separator-class="el-icon-arrow-right" >
            <el-breadcrumb-item :to="{ path: '/' }" class="breadcrumb-item">
              Головна сторінка
            </el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/blog/' }" class="breadcrumb-item">Блог</el-breadcrumb-item>
            <el-breadcrumb-item class="breadcrumb-item">{{ title }}</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <div class="order-lg-1 pr-lg-4 text-center text-lg-left d-flex justify-content-center">
          <h1 class="title">{{ title }}</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PageBar",
  props: {
    title: {
      type: String,
      required: true
    },
    theme: {
      type: String,
      default: 'light'
    }
  }
}
</script>

<style lang="scss" scoped>
.title {
  font-size: 1.70rem;
  font-weight: 500;
  line-height: 1.2;
  margin: 0;
}

.light {
  background-color: #f6f9fc;
  .title {
    color: $dark-light;
  }
}

.dark {
  background-color: $dark-light;
  .title {
    color: $white;
  }
}
</style>
