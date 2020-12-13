<template>
  <div class="review">
    <div class="review-header">
      <div>
        <h6 class="review-header-name">Rafael Marquez</h6>
        <span class="review-header-date">24.11.2020</span>
      </div>
      <div class="mx-4">
        <span class="review-header-date">Оцінка:</span>
        <product-rating/>
      </div>
    </div>
    <div class="review-body">
      <p class="review-body-text">Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat
        facere possimus, omnis voluptas assumenda est...</p>
      <p><span>Сподобалося: </span>Consequuntur magni, voluptatem sequi, tempora</p>
      <p><span>Не сподобалося: </span>Architecto beatae, quis autem</p>
    </div>
  </div>
</template>

<script>
import ProductRating from "@/components/client/Product/Reviews/ProductRating";
export default {
  components: {ProductRating},
  data() {
    return {}
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
