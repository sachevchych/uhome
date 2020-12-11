<template>
  <div>
    <PageBar
      :title="title"
      theme="dark"
      :breadcrumbs="breadcrumbs"
      class="page-bar">
    </PageBar>
    <div class="container-fluid">
      <div class="main container-xxl mb-4 px-4">
        <!-- General Start -->
        <div class="row py-4">
          <div class="col-lg-7">
            <product-gallery :images="product.images"/>
          </div>
          <div class="col-lg-5">
            <product-rating/>
            <product-details :product="product" class="mt-3"/>
            <div class="mt-3 row">
              <div class="col-12 col-sm-8 col-md-6 col-lg-8">
                <add-to-cart-button/>
              </div>
            </div>
            <product-brief-tech-specs :properties="product.specs"/>
          </div>
        </div>
        <!-- General End -->
        <el-tabs class="py-2" value="properties">
          <el-tab-pane label="Опис" name="general" v-if="product.description">
            <p class="description">{{ product.description }}</p>
          </el-tab-pane>
          <el-tab-pane label="Характеристики" name="properties">
            <product-full-tech-specs :product="product"/>
          </el-tab-pane>
          <el-tab-pane label="Відгуки" name="reviews">
            <reviews/>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </div>
</template>

<script>
import PageBar from "@/components/client/PageBar";
import ProductGallery from "@/components/client/Product/ProductGallery";
import ProductDetails from "@/components/client/Product/ProductDetails";
import ProductRating from "@/components/client/Product/ProductRating";
import ProductBriefTechSpecs from "@/components/client/Product/ProductBriefTechSpecs";
import ProductFullTechSpecs from "@/components/client/Product/ProductFullTechSpecs";
import AddToCartButton from "@/components/client/Product/AddToCartButton";
import Reviews from "@/components/client/Product/Reviews/Reviews";

export default {
  components: {
    Reviews,
    AddToCartButton,
    ProductFullTechSpecs, ProductBriefTechSpecs, ProductRating, ProductDetails, ProductGallery, PageBar
  },
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
  },
  computed: {
    title() {
      return `${this.product.name} ${this.product.brand.name} ${this.product.model}`
    },
    breadcrumbs() {
      return [
        {label: 'Каталог товарів', url: '/catalog/'},
        {label: this.product.category.name, url: `/catalog/${this.product.category.url}/`},
        {label: `${this.product.brand.name} ${this.product.model}`, url: ''},
      ]
    }
  },
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

.description {
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #4b566b;
}
</style>
