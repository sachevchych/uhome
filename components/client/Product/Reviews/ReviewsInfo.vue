<template>
  <div class="info">
    <h3 class="my-2" v-if="rating.amount">Оцінка: {{ (rating.total / rating.amount).toFixed(1) }}</h3>
    <h3 class="my-2" v-else>Без оцінки</h3>
    <product-rating :rating="rating.total / rating.amount"/>
    <p v-show="rating.amount" class="pt-2 font-size-sm text-muted">{{ recommend }} з {{ rating.amount }} ({{ percentage }}%)<br>Покупців рекомендують цей товар</p>
  </div>
</template>

<script>
import ProductRating from "@/components/client/Product/Reviews/ProductRating";

export default {
  components: {ProductRating},
  props: {
    rating: {
      type: Object,
      required: true
    },
  },
  computed: {
    recommend() {
      return this.rating.stars[5] + this.rating.stars[4]
    },
    percentage() {
      return Math.round(((this.rating.stars[5] + this.rating.stars[4]) / this.rating.amount) * 100)
    }
  }
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
