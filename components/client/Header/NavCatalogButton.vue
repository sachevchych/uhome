<template>
  <div class="catalog-btn">
    <font-awesome-icon :icon="['fas', 'bars']" class="catalog-btn-icon"/>
    <span>Каталог товарів</span>
    <div class="catalog">
      <ul class="catalog-list">
        <li v-for="category in categories" class="catalog-list-element">
          <nuxt-link to="#" class="catalog-list-link">
            <span>{{ category.name }}</span>
            <font-awesome-icon :icon="['fas', 'angle-right']" class="catalog-list-icon"/>
          </nuxt-link>
        </li>
      </ul>
    </div>

  </div>
</template>

<script>
export default {
  name: "NavCatalogButton",
  data() {
    return {

    }
  },
  mounted() {
    this.$store.dispatch('modules/catalog/fetchCategoriesTree')
  },
  computed: {
    categories() {
      return this.$store.state.modules.catalog.tree
    }
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
.catalog-btn {
  padding-right: 1.125rem;
  padding-top: 1.125rem;
  padding-bottom: 1.125rem;
  transition: color 0.25s ease-in-out;
  cursor: pointer;

  &:hover {
    color: $main-color;

    .catalog {
      visibility: visible;
      margin-top: 1rem;
    }
  }

  &-icon {
    margin-right: .3rem;
    font-size: .9rem;
  }
}

.catalog {
  visibility: hidden;
  position: absolute;
  z-index: 1;
  margin-top: 1.5rem;
  background-color: #ffffff;
  transition: margin-top .2s ease-in-out;
  box-shadow: 0 0.25rem 0.5625rem -0.0625rem rgba(0,0,0,0.03), 0 0.275rem 1.25rem -0.0625rem rgba(0,0,0,0.05);
  min-width: 12.5rem;
  border-radius: .25rem;

  &-list {
    list-style: none;
    margin: 0;
    padding: 0;

    &-element {
      border-bottom: 1px solid #e3e9ef;
      font-size: .875rem;

      &:last-child {
        border-bottom: none;
      }
    }

    &-link {
      padding: 1rem 1rem;
      color: #4b566b;
      font-weight: 400;
      line-height: 1.5;
      text-decoration: none;
      display: flex;
      align-items: center;
      justify-content: space-between;

      &:hover {
        color: $main-color;
      }
    }

    &-icon {
      padding-left: .9rem;
    }
  }


}

</style>
