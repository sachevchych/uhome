<template>
  <div class="product-rating">
      <font-awesome-icon :icon="['fas', 'star']" class="icon"></font-awesome-icon>
      <font-awesome-icon :icon="['fas', 'star']" class="icon"></font-awesome-icon>
      <font-awesome-icon :icon="['fas', 'star']" class="icon"></font-awesome-icon>
      <font-awesome-icon :icon="['fas', 'star-half-alt']" class="icon"></font-awesome-icon>
      <font-awesome-icon :icon="['far', 'star']" class="icon"></font-awesome-icon>
  </div>
</template>

<script>
export default {
  name: "ProductRating"
}
</script>

<style lang="scss" scoped>
.product-rating {

}

.icon {
  color: #fea569;
  font-size: .9rem;
}
</style>
