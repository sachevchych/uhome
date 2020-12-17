<template>
  <div>
    <page-bar :title="title" :breadcrumbs="breadcrumbs" theme="dark" size="large"></page-bar>
    <div class="container-xxl">
      <div class="main row">
        <div :class="['col', leftAside ? 'order-lg-2' : 'order-lg-1']">
          <article class="article">
            <slot name="article"></slot>
          </article>
        </div>
        <div :class="['order-lg-1 col-12 col-lg-4 col-xl-4', leftAside ? 'order-lg-1' : 'order-lg-2'].join(' ')"
             v-if="aside">
          <aside class="aside">
            <slot name="aside"></slot>
          </aside>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PageBar from "@/components/client/PageBar";

export default {
  components: {PageBar},
  props: {
    title: {
      type: String,
      required: true
    },
    breadcrumbs: {
      type: Array,
      required: true
    },
    aside: {
      type: Boolean,
      default: false
    },
    leftAside: {
      type: Boolean,
      default: true
    }
  },
}
</script>

<style lang="scss" scoped>
.main {
  margin-top: -4rem;
}

.article {
  margin-bottom: 2rem;
}

.aside {
  background-color: #ffffff;
  box-shadow: 0 0.3rem 1.525rem -0.375rem rgba(0, 0, 0, 0.1);
  border-radius: $border-radius-lg;
  padding: 1rem;
  margin-bottom: 2rem;
}

</style>
