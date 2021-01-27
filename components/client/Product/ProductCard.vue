<template>
  <div class="card">
    <div class="card-img px-3 pt-3">
      <nuxt-link :to="`/product/${product.url}/`">
        <nuxt-picture
          :src="`/img/products/${product.images[0].name}`"
          height="500"
          fit="contain"
          :alt="product.model"
        />
      </nuxt-link>
    </div>
    <div class="card-body px-3 py-2">
      <small class="card-body-meta pb-1">{{ product.name }}</small>
      <nuxt-link :to="`/product/${product.url}/`" class="card-body-title">
        <h3>{{ product.model }}</h3>
      </nuxt-link>
      <div class="card-body-info">
        <span class="price">{{ product.price }} грн</span>
      </div>
    </div>
    <div class="card-actions px-3 pb-2">
      <add-to-cart-button :product-id="product._id" type="small"/>
    </div>
  </div>
</template>

<script>
import AddToCartButton from "@/components/client/Product/AddToCartButton";

export default {
  components: {AddToCartButton},
  props: {
    product: Object
  }
}
</script>

<style lang="scss" scoped>
.card {
  transition: box-shadow 0.15s ease-in-out;
  position: relative;
  border-radius: .5rem;
  background-color: #ffffff;

  &:hover {
    box-shadow: 0 0.3rem 1.525rem -0.375rem rgba(0, 0, 0, 0.2);
    border-radius: .5rem .5rem 0 0;

    .card-actions {
      visibility: visible;
      opacity: 1;
    }
  }
}

.card-img {

}

.card-body {
  &-meta {
    font-size: .75rem;
    color: #7d879c;
  }

  &-title {
    transition: color 0.25s ease-in-out;
    color: #373f50;
    text-decoration: none;

    h3 {
      margin: 0;
      font-size: .875rem
    }

    :hover {
      color: $main-color;
    }
  }

  &-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: .5rem 0;

    .price {
      color: #4e54c8;
    }
  }
}

.card-actions {
  position: absolute;
  left: 0;
  top: 100%;
  width: 100%;
  visibility: hidden;
  background-color: #ffffff;
  border-radius: 0 0 .5rem .5rem;
  transition: all 0.15s ease-in-out;
  opacity: 0;
  z-index: 1;

  &-buy {
    width: 100%;
  }
}
</style>
