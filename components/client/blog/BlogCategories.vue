<template>
  <div class="categories">
    <h3 class="title">Рубрики блогу</h3>
    <ul class="categories-list">
      <li>
        <nuxt-link to="#"><span>Онлайн покупки</span>
          <span>18</span></nuxt-link>
      </li>
      <li>
        <nuxt-link to="#"><span>Мода</span>
          <span>25</span></nuxt-link>
      </li>
      <li>
        <nuxt-link to="#"><span>Особисті фінанси</span>
          <span>13</span></nuxt-link>
      </li>
      <li>
        <nuxt-link to="#"><span>Подорожі &amp; відпустки</span>
          <span>7</span>
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="#"><span>Стиль життя</span>
          <span>34</span></nuxt-link>
      </li>
      <li>
        <nuxt-link to="#"><span>Технології</span>
          <span>6</span></nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "BlogCategories"
  }
</script>

<style scoped>
  .title {
    margin-bottom: 1.125rem;
    font-size: 1.0625rem;
    font-weight: bold;
    line-height: 1.2;
    color: #373f50;
  }

  .categories {
    padding-bottom: 2rem;
    border-bottom: 1px solid #e3e9ef !important;
    margin-bottom: 2rem;
  }

  .categories a {
    text-decoration: none;
    color: #4b566b;
    font-size: .875rem;
    font-weight: normal;
  }

  .categories a:hover  {
    color: #fe696a;
  }

  .categories-list {
    list-style-type: none;
    padding: 0;
  }

  .categories-list li {
    margin-bottom: .375rem;
  }
  .categories-list li a {
    display: flex;
    justify-content: space-between;
  }
</style>
