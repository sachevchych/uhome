<template>
  <div>
    <page-bar title="Блог"/>
    <div class="container-xl pt-4">
      <div class="row">
        <div class="col-12 col-md-7 col-lg-8">
          <div class="row row-cols-1 row-cols-lg-2">
            <div class="col" v-for="(post, index) in 6" :key="index">
              <app-blog-post-cart/>
            </div>
          </div>
        </div>
        <div class="aside col-12 col-md-5 col-lg-4">
          <AppBlogAside/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import 'element-ui/lib/theme-chalk/display.css';
import AppBlogPostCart from "../../components/client/Blog/BlogPostCart";
import AppBlogAside from "../../components/client/Blog/BlogAside";
import PageBar from "@/components/client/PageBar";

export default {
  components: {
    PageBar,
    AppBlogAside,
    AppBlogPostCart
  }
}
</script>

<style lang="scss" scoped>

</style>
