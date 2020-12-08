<template>
  <aside class="aside pl-md-4">
    <app-blog-categories/>
    <app-blog-trending-posts/>
    <app-blog-popular-tags/>
  </aside>
</template>

<script>
  import AppBlogCategories from "./BlogCategories";
  import AppBlogTrendingPosts from "./BlogTrendingPosts";
  import AppBlogPopularTags from "./BlogPopularTags";

  export default {
    name: "BlogAside",
    components: {AppBlogPopularTags, AppBlogTrendingPosts, AppBlogCategories}
  }
</script>

<style scoped>
  .aside {
    border-left: 1px solid #e3e9ef;
  }
</style>
