<template>
  <div class="trending-posts">
    <h3 class="title">Популярні публікації</h3>
    <div class="post">
      <div>
        <el-image class="rounded" src="https://picsum.photos/100/100" fit="cover" style="width: 64px; height: 64px"></el-image>
      </div>
      <div class="post-body">
        <h6><a href="#">Як здаватись розумним не знаючи про що говориш?</a></h6>
        <span>автор <a href="#" class="blog-entry-meta-link">Ліфанчук Роман</a></span>
      </div>
    </div>
    <div class="post">
      <div>
        <el-image class="rounded" src="https://picsum.photos/100/100" fit="cover" style="width: 64px; height: 64px"></el-image>
      </div>
      <div class="post-body">
        <h6><a href="#">Що робити коли закінчилась кава?</a></h6>
        <span>автор <a href="#" class="blog-entry-meta-link">Бонецька Соломія</a></span>
      </div>
    </div>
    <div class="post">
      <div>
        <el-image class="rounded" src="https://picsum.photos/100/100" fit="cover" style="width: 64px; height: 64px"></el-image>
      </div>
      <div class="post-body">
        <h6><a href="#">11 не робочих спосіб щоб не смерділа пралка</a></h6>
        <span>автор <a href="#" class="blog-entry-meta-link">Артем Сачевчич</a></span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "BlogTrendingPosts"
  }
</script>

<style lang="scss" scoped>
  .trending-posts {
    padding-bottom: 2rem;
    border-bottom: 1px solid #e3e9ef !important;
    margin-bottom: 2rem;
  }

  .title {
    margin-bottom: 1.125rem;
    font-size: 1.0625rem;
    font-weight: bold;
    line-height: 1.2;
    color: #373f50;
  }

  .post {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    margin-bottom: 1rem;
  }

  .post-body {
    margin: .1rem 0 0 1rem;
  }

  .post-body a {
    color: #373f50;
    text-decoration: none;
  }

  .post-body h6 {
    margin: 0;
  }

  .post-body h6 a {
    text-decoration: none;
    font-size: .875rem;
  }

  .post-body span {
    font-size: .8125rem;
    color: #7d879c;
  }

  .post-body a:hover {
    color: #4b566b;
    text-decoration: none;
  }

  .post-body h6 a:hover {
    color: $orange;
  }

  .rounded {
    border-radius: .3125rem;
  }
</style>
