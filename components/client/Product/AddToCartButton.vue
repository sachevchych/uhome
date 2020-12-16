<template>
  <button :class="['btn', type].join(' ')" type="button" @click="onSubmit">
    <font-awesome-icon :icon="['fa', 'shopping-cart']"/>
    Додати в кошик
  </button>
</template>

<script>
export default {
  props: {
    productId: {
      type: String,
      required: true
    },
    type: {
      type: String
    }
  },
  methods: {
    onSubmit() {
      this.$store.dispatch('cart/add', {productId: this.productId, amount: 1})
      this.$message.success('Товар додано в кошик')
    }
  }
}
</script>

<style lang="scss" scoped>
.btn {
  cursor: pointer;
  width: 100%;
  margin-bottom: 1.125rem;
  padding: .625rem 1.375rem;
  color: #ffffff;
  background-color: $primary;
  box-shadow: 0 0.5rem 1.125rem -0.5rem rgba($primary, 0.9);
  border: 0;
  font-size: .9375rem;
  line-height: 1.5;
  border-radius: .3125rem;
  transition: background-color 0.25s ease-in-out, box-shadow 0.2s ease-in-out;

  &:hover {
    background-color: $primary-light-1;
    box-shadow: 0 0.5rem 1.125rem -0.5rem rgba($primary, 0.2);
  }
}

.small {
  padding: .425rem 1rem;
  font-size: .8125rem;
  line-height: 1.5;
  border-radius: .1875rem;
}
</style>
