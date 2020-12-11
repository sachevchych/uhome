<template>
  <ul class="breadcrumb">
    <li class="breadcrumb-element">
      <nuxt-link to="/">Головна сторінка</nuxt-link>
    </li>
    <li class="breadcrumb-element" v-for="link in data">
      <nuxt-link :to="link.url">{{ link.label }}</nuxt-link>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    data: {
      type: Array
    }
  }
}
</script>

<style lang="scss" scoped>
.breadcrumb {
  text-align: center;
  padding: 0;
  font-size: .8rem;
  font-weight: normal;

  a {
    color: white;
    text-decoration: none;
    transition: color 0.25s ease-in-out;

    &:hover {
      color: $primary;
    }
  }

  &-element {

    display: inline;
    list-style: none;

    &:after {
      content: '>';
      padding: 0 .3rem 0 .4rem;
      color: $primary;
      font-size: .6625rem;
    }

    &:last-child {
      a {
        cursor: default;
        color: rgba($white, .7);
      }
      &:after {
        content: none;
      }
    }
  }
}
</style>
