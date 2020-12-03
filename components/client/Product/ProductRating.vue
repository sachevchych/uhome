<template>
  <div class="product-rating">
    <div class="start">
      <font-awesome-icon :icon="['fas', 'star']" class="icon"></font-awesome-icon>
      <font-awesome-icon :icon="['fas', 'star']" class="icon"></font-awesome-icon>
      <font-awesome-icon :icon="['fas', 'star']" class="icon"></font-awesome-icon>
      <font-awesome-icon :icon="['fas', 'star-half-alt']" class="icon"></font-awesome-icon>
      <font-awesome-icon :icon="['far', 'star']" class="icon"></font-awesome-icon>
    </div>
    <div class="description">
      <small>34 відгуки</small>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductRating"
}
</script>

<style lang="scss" scoped>
.product-rating {
  display: flex;
  align-items: center;
}

.icon {
  color: #fea569;
  height: .85rem;
  width: .9rem;
}

.description {
  font-size: 1rem;
  color: #4b566b;
  margin-left: .5rem;
}
</style>
