<template>
  <div class="product-details">
    <div class="price">
      <span>{{product.price}} грн</span>
    </div>
    <div class="status">
      <font-awesome-icon icon="check" class="icon"></font-awesome-icon>
      В наявності
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductDetails",
  props: {
    product: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.product-details {
  position: relative;
}

.price {
  color: #4e54c8;
  font-weight: 400;
  font-size: 1.75rem;
}

.status {
  background-color: #42d697;
  color: #fff;
  position: absolute;
  top: 0;
  right: -1.5rem;
  padding: .7rem 1.2rem .7rem 0.7rem;
  border-radius: .3125rem 0 0 .3125rem;
  font-size: .8rem;

  .icon {
    margin-right: 0.2rem;
  }

  &:after {
    position: absolute;
    bottom: -0.6rem;
    right: 0;
    height: 0;
    width: 0;
    content: " ";
    border-top: .60rem solid #29bc7d;
    border-right: .70rem solid transparent;
  }
}
</style>
