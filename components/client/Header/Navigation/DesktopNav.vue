<template>
  <div class="navigation d-none d-md-flex">
    <catalog-button/>
    <nav class="nav">
      <ul class="nav-list">
        <li class="nav-element" v-for="element in links">
          <nuxt-link :to="element.link" class="nav-link">
            {{ element.label }}
          </nuxt-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import CatalogButton from "@/components/client/Header/Navigation/CatalogButton";

export default {
  components: {CatalogButton},
  props: {
    links: Array
  }
}
</script>

<style lang="scss" scoped>
.navigation {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: #4b566b;
  font-size: 0.975rem;
  padding-bottom: 1rem;
  padding-top: 0.2rem;
}

.nav {
  height: 2rem;
  display: flex;
  align-items: center;

  &-list {
    margin: 0;
    padding: 0;
  }

  &-element {
    display: inline;
    padding: 1.125rem;
  }

  &-link {
    text-decoration: none;
    color: #4b566b;
    transition: color 0.25s ease-in-out;

    &:hover {
      color: $main-color;
    }
  }
}

</style>
