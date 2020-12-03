<template>
  <div>
    <PageBar :title="`${product.name} ${product.brand.name} ${product.model}`" theme="dark" class="page-bar"></PageBar>
    <div class="container-fluid">
      <div class="main container-xl mb-4">
        <!-- General Start -->
        <div class="row px-3 py-4">
          <div class="col-lg-7 col-md-6">
            <product-gallery :images="product.images"/>
          </div>
          <div class="col-lg-5 col-md-6">
            <product-rating/>
            <product-details :product="product" class="mt-3"/>
          </div>
        </div>
        <!-- General End -->
<!--        <el-tabs class="py-2" value="general">-->
<!--          <el-tab-pane label="Все про товар" name="general"></el-tab-pane>-->
<!--          <el-tab-pane label="Характеристики" name="properties">Характеристики</el-tab-pane>-->
<!--          <el-tab-pane label="Відгуки" name="reviews">Відгуки</el-tab-pane>-->
<!--        </el-tabs>-->
      </div>
    </div>
  </div>
</template>

<script>
import PageBar from "@/components/client/PageBar";
import ProductGallery from "@/components/client/Product/ProductGallery";
import ProductDetails from "@/components/client/Product/ProductDetails";
import ProductRating from "@/components/client/Product/ProductRating";

export default {
  components: {ProductRating, ProductDetails, ProductGallery, PageBar},
  data() {
    return {
      product: {}
    }
  },
  async validate({store, params}) {
    const product = await store.dispatch('product/publicFetchByUrl', params.url)
    if (product) {
      this.product = product
      return true
    } else {
      return false
    }
  },
  async asyncData({store, params}) {
    const product = await store.dispatch('product/publicFetchByUrl', params.url)
    return {product}
  }
}
</script>

<style lang="scss" scoped>
.page-bar {
  padding-bottom: 100px;
}

.main {
  box-shadow: 0 0.3rem 1.525rem -0.375rem rgba(0, 0, 0, 0.1);
  border-radius: .4375rem;
  background-color: #fff;
  margin-top: -5rem;
}
</style>
