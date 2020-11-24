<template>
  <div class="navigation">
    <NavCatalogButton/>
    <nav class="nav">
      <ul class="nav-list">
        <li class="nav-element" v-for="element in links">
          <NuxtLink :to="element.link" class="nav-link">
            {{ element.label }}
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import NavCatalogButton from "@/components/client/Header/NavCatalogButton";
export default {
  name: "Navigation",
  components: {NavCatalogButton},
  data() {
    return {
      links: [
        {label: 'Головна сторінка', link: '#'},
        {label: 'Блог', link: '/blog'},
        {label: 'Новини', link: '#'},
        {label: 'Про нас', link: '#'},
        {label: 'Доставка та оплата', link: '#'}
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.navigation {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: #4b566b;
  font-size: 1rem;
  padding: .5rem 0;
}

.nav {
  border-left: 1px solid #e3e9ef;
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
