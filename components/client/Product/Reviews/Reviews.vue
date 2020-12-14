<template>
  <div class="row">
    <div class="col-12 border-bottom py-4">
      <div class="row align-items-center">
        <div class="col-md-5 col-lg-4">
          <reviews-info :rating="rating"/>
        </div>
        <div class="col-md-7 col-lg-8">
          <reviews-rating :rating="rating"/>
        </div>
      </div>
    </div>
    <div class="col-12">
      <div class="row my-4">
        <div class="col-12 col-lg-7 col-xl-8">
          <div class="label-empty my-5" v-if="!reviews.length">
            <span>Поки що ніхто не залишав відгуків про цей товар. Будьте першими!</span>
          </div>
          <reviews-comment v-for="review in reviews" :key="review._id" :review="review"/>
        </div>
        <div class="col-12 col-lg-5 col-xl-4">
          <reviews-form :productId="productId"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ReviewsInfo from "@/components/client/Product/Reviews/ReviewsInfo";
import ReviewsRating from "@/components/client/Product/Reviews/ReviewsRating";
import ReviewsForm from "@/components/client/Product/Reviews/ReviewsForm";
import ReviewsComment from "@/components/client/Product/Reviews/ReviewsComment";

export default {
  components: {ReviewsComment, ReviewsForm, ReviewsRating, ReviewsInfo},
  props: {
    productId: String,
    reviews: Array
  },
  computed: {
    rating() {
      const rating = {
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
        total: 0,
        amount: 0
      }

      this.reviews.forEach(review => {
        rating.total = rating.total + review.rating
        rating.amount = ++rating.amount
        rating[review.rating] = ++rating[review.rating]
      })

      return rating
    }
  }
}
</script>

<style scoped>
.label-empty {
  text-align: center;
  font-size: 0.875rem;
  color: #6c757d;
}
</style>
