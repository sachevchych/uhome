<template>
  <div :class="`theme-${theme}`">
    <div class="container-xxl">
      <div :class="`size-${size}`">
        <div class="d-lg-flex justify-content-between align-items-center h-100">
          <div class="order-lg-2 d-flex justify-content-center">
            <breadcrumb :data="breadcrumbs"/>
          </div>
          <div class="order-lg-1 pr-lg-4 text-center text-lg-left d-flex justify-content-center">
            <h1 class="title">{{ title }}</h1>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Breadcrumb from "@/components/client/Pages/Breadcrumb";

export default {
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
    size: {
      type: String,
      default: 'medium'
    },
    breadcrumbs: {
      type: Array
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

.theme {
  &-light {
    background-color: #f6f9fc;
    color: $gray-dark;

    .title {
      color: $gray-dark;;
    }
  }

  &-dark {
    background-color: $gray-dark;
    color: $white;

    .title {
      color: $white;
    }
  }
}

.size {
  &-medium {
    padding: 2rem 0;
  }

  &-large {
    padding: 2rem 0 6rem 0;
  }
}
</style>
