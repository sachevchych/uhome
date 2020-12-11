<template>
  <div :class="theme">
    <div class="container-xxl pt-lg-3">
      <div class="d-lg-flex justify-content-between align-items-center py-4 py-lg-3">
        <div class="order-lg-2 mb-3 mb-lg-0 pt-lg-2 d-flex justify-content-center">
          <breadcrumb :data="breadcrumbs"/>
        </div>
        <div class="order-lg-1 pr-lg-4 text-center text-lg-left d-flex justify-content-center">
          <h1 class="title">{{ title }}</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Breadcrumb from "@/components/client/Pages/Breadcrumb";

export default {
  name: "PageBar",
  components: {Breadcrumb},
  props: {
    title: {
      type: String,
      required: true
    },
    theme: {
      type: String,
      default: 'light'
    },
    breadcrumbs: {
      type: Array
    }
  },
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
    color: $gray-dark;
  }
}

.dark {
  background-color: $gray-dark;

  .title {
    color: $white;
  }
}

.breadcrumb {
  &-link{
    color: #ffffff !important;
  }

  &-active {

  }
}
</style>
