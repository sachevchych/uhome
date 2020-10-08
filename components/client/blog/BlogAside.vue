<template>
  <aside class="aside">
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
    padding: 0 1.5rem;
  }
</style>
