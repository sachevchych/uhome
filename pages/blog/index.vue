<template>
  <el-row :gutter="40">
    <el-col :sm="24" :md="16" :lg="17" class="content">
      <el-row :gutter="30">
        <el-col v-for="post in 6" :key="post" :xs="24" :sm="12">
          <app-blog-post-cart/>
        </el-col>
      </el-row>
    </el-col>
    <el-col :sm="24" :md="8" :lg="7">
      <AppBlogAside></AppBlogAside>
    </el-col>
  </el-row>
</template>

<script>
  import 'element-ui/lib/theme-chalk/display.css';
  import AppBlogPostCart from "../../components/client/Blog/BlogPostCart";
  import AppBlogAside from "../../components/client/Blog/BlogAside";

  export default {
    components: {
      AppBlogAside,
      AppBlogPostCart
    }
  }
</script>

<style scoped>
  .content {
    padding: 0 1.5rem 0 0;
    margin: 0;
  }
</style>
