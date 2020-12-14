<template>
  <div class="review">
    <div class="review-header">
      <div>
        <h6 class="review-header-name">{{ review.author }}</h6>
        <span class="review-header-date">24.11.2020</span>
      </div>
      <div class="mx-4">
        <span class="review-header-date">Оцінка: {{review.rating}} з 5</span>
        <product-rating :rating="review.rating"/>
      </div>
    </div>
    <div class="review-body">
      <p class="review-body-text">{{ review.text }}</p>
      <p v-if="review.pros"><span>Сподобалося: </span>{{ review.pros }}</p>
      <p v-if="review.cons"><span>Не сподобалося: </span>{{ review.cons }}</p>
    </div>
  </div>
</template>

<script>
import ProductRating from "@/components/client/Product/Reviews/ProductRating";
export default {
  components: {ProductRating},
  props: {
    review: Object,
    required: true
  }
}
</script>

<style lang="scss" scoped>
.review {
  border-bottom: 1px solid #E3E9EF;
  padding-bottom: 1.5rem;
  margin-bottom: 1.5rem;
  margin-top: 2rem;

  &-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    &-name {
      margin: 0;
      font-size: .875rem;
      font-weight: 500;
      line-height: 1.2;
      color: #373f50;
    }

    &-date {
      color: #7d879c;
      font-size: .8125rem;
      font-weight: 400;
      line-height: 1.5;
    }
  }

  &-body {
    color: #4b566b;
    font-size: .8125rem;

    &-text {
      font-size: .9375rem;
      margin: .5rem 0;
      line-height: 1.5;
    }

    span {
      font-weight: 500;
    }
  }
}
</style>
