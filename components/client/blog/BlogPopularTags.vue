<template>
  <div class="popular-tags">
    <h3 class="title">Популярні теги</h3>
    <div class="tag-group">
      <el-tag class="tag"
              v-for="item in items"
              :key="item.label"
              effect="plain">
        <nuxt-link to="#" target="_blank">{{ item.label }}</nuxt-link>
      </el-tag>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        items: [
          {label: '#fashion'},
          {label: '#gadgets'},
          {label: '#online'},
          {label: '#travel'},
          {label: '#personal'},
          {label: '#apliemces'},
          {label: '#hood'},
          {label: '#oven'}
        ]
      }
    }
  }
</script>

<style scoped>
  .popular-tags {
    padding-bottom: 2rem;
  }

  .title {
    margin-bottom: 1.125rem;
    font-size: 1.0625rem;
    font-weight: bold;
    line-height: 1.2;
    color: #373f50;
  }

  .tag {
    margin: 0 .5rem .5rem 0;
    border: 1px solid #e3e9ef;
    border-radius: .1875rem;
    padding: 0;
    transition: color 0.25s ease-in-out,background-color 0.25s ease-in-out,border-color 0.25s ease-in-out,box-shadow 0.2s ease-in-out;
  }

  .tag:hover {
    background-color: #e3e9ef;
  }

  .tag a {
    color: #4b566b;
    font-size: .75rem;
    text-decoration: none;
    font-weight: 400;
    padding: .375rem .5625rem;
    line-height: 18px;
  }
</style>
