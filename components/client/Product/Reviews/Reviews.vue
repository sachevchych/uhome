<template>
  <div class="row">
    <div class="col-12">
      <div class="row align-items-center">
        <div class="col-md-5 col-lg-4">
          <reviews-info/>
        </div>
        <div class="col-md-7 col-lg-8">
          <reviews-rating/>
        </div>
      </div>
    </div>
    <div class="col-12"></div>
  </div>
</template>

<script>
import ReviewsInfo from "@/components/client/Product/Reviews/ReviewsInfo";
import ReviewsRating from "@/components/client/Product/Reviews/ReviewsRating";

export default {
  components: {ReviewsRating, ReviewsInfo}
}
</script>

<style scoped>

</style>
