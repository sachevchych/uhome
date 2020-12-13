<template>
  <div class="info">
    <h3 class="my-2">34 відгуки</h3>
    <product-rating/>
    <p class="pt-2 font-size-sm text-muted">27 з 34 (77%)<br>Покупців рекомендують цей товар</p>
  </div>
</template>

<script>
import ProductRating from "@/components/client/Product/Reviews/ProductRating";

export default {
  components: {ProductRating}
}
</script>

<style lang="scss" scoped>
.info {
  h3 {
    font-size: 1.75rem;
    font-weight: 500;
    line-height: 1.2;
    color: #373f50;
  }

  p {
    font-size: .875rem;
  }
}
</style>
