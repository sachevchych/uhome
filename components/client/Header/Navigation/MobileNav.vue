<template>
  <div class="nav d-md-none">
    <catalog-button/>
  </div>
</template>

<script>
import CatalogButton from "@/components/client/Header/Navigation/CatalogButton";
export default {
  components: {CatalogButton}
}
</script>

<style scoped>
.nav {
  padding: 1rem 0;
  /*position: fixed;*/
  /*bottom: 0;*/
  /*left: 0;*/
  /*right: 0;*/
  /*height: 60px;*/
  /*background-color: #ffffff;*/
  /*z-index: 3;*/
}
</style>
