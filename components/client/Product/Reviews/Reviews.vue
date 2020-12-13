<template>
  <div class="row">
    <div class="col-12 border-bottom py-4">
      <div class="row align-items-center">
        <div class="col-md-5 col-lg-4">
          <reviews-info/>
        </div>
        <div class="col-md-7 col-lg-8">
          <reviews-rating/>
        </div>
      </div>
    </div>
    <div class="col-12">
      <div class="row my-4">
        <div class="col-12 col-lg-7 col-xl-8">
          <reviews-comment v-for="comment in 5"/>
        </div>
        <div class="col-12 col-lg-5 col-xl-4">
          <reviews-form/>
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
  components: {ReviewsComment, ReviewsForm, ReviewsRating, ReviewsInfo}
}
</script>

<style scoped>

</style>
