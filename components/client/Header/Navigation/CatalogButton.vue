<template>
  <div class="catalog-btn">
    <font-awesome-icon :icon="['fas', 'bars']" class="catalog-btn-icon"/>
    <span>Каталог товарів</span>
    <div class="catalog">
      <ul class="catalog-list">
        <li v-for="category in categories" class="catalog-list-element">
          <nuxt-link :to="`/catalog/${category.url}/`" class="catalog-list-link">
            <span>{{ category.name }}</span>
            <font-awesome-icon :icon="['fas', 'angle-right']" class="catalog-list-icon"/>
          </nuxt-link>
          <ul class="subcategories" v-if="category.children.length > 0">
            <li class="subcategories-element" v-for="subcategory in category.children">
              <nuxt-link :to="`/catalog/${category.url}/${subcategory.url}/`"
                         class="subcategories-link subcategories-title">
                {{ subcategory.name }}
              </nuxt-link>
              <ul class="subcategories-children" v-if="subcategory.children.length > 0">
                <li class="subcategories-children-element" v-for="childCategory in subcategory.children">
                  <nuxt-link :to="`/catalog/${category.url}/${subcategory.url}/${childCategory.url}/`"
                             class="subcategories-link">
                    {{ childCategory.name }}
                  </nuxt-link>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    categories() {
      return this.$store.getters["category/categoriesTree"]
    }
  }
}
</script>

<style lang="scss" scoped>
.catalog-btn {
  background-color: $primary;
  margin: 0 .5rem;
  padding: .625rem 1.375rem;
  transition: all 0.25s ease-in-out;
  cursor: pointer;
  box-shadow: 0 0.5rem 1.125rem -0.5rem rgba($primary, 0.9);
  font-size: .9rem;
  line-height: 1.5;
  color: #ffffff;
  border-radius: .3125rem;


  &:hover {
    box-shadow: 0 0.5rem 1.125rem -0.5rem rgba($primary, 0.2);
    background-color: $primary-light-1;

    .catalog {
      visibility: visible;
      margin-top: 0.7rem;
      margin-left: -1.375rem;
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
  z-index: 4;
  margin-top: 1.5rem;
  background-color: #ffffff;
  transition: margin-top .2s ease-in-out;
  box-shadow: 0 0.25rem 0.5625rem -0.0625rem rgba(0, 0, 0, 0.03), 0 0.275rem 1.25rem -0.0625rem rgba(0, 0, 0, 0.05);
  min-width: 12.5rem;
  border-radius: .25rem;

  &-list {
    list-style: none;
    margin: 0;
    padding: 0;

    &-element {
      border-bottom: 1px solid #e3e9ef;
      font-size: .875rem;

      &:hover {
        .subcategories {
          visibility: visible;
        }
      }

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
      height: 1rem;
      width: auto;
    }
  }
}

.subcategories {
  position: absolute;
  visibility: hidden;
  top: 0;
  left: 100%;
  right: auto;
  width: auto;
  min-height: 100%;
  margin: 0;
  padding: 0;
  list-style: none;
  background-color: #ffffff;
  border-radius: .3125rem;
  box-shadow: 0 0.25rem 0.5625rem -0.0625rem rgba(0, 0, 0, 0.03), 0 0.275rem 1.25rem -0.0625rem rgba(0, 0, 0, 0.05);

  &-element {
    color: #6c7293;
    padding: 1rem 1.5rem;
    display: inline-block;
    line-height: 1.3;
  }

  &-link {
    text-decoration: none;
    display: block;
    transition: color 0.25s ease-in-out;
    color: #4b566b;
    font-size: .875rem;
    font-weight: normal;

    &:hover {
      color: $main-color;
    }
  }

  &-title {
    font-weight: 500;
    line-height: 1.2;
    color: #373f50;
    margin-bottom: .5rem;
  }

  &-children {
    list-style: none;
    margin: 0;
    padding: 0;

    &-element {
      margin-bottom: .5rem;
    }
  }
}
</style>
