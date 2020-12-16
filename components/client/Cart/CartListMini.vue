<template>
  <div class="py-1">
    <ul class="list" v-if="cart.length">
      <li v-for="item in cart" class="list-item border-bottom">
        <div class="list-item-close" @click="remove(item.product._id)">
          <font-awesome-icon :icon="['fa', 'times']" class="icon"/>
        </div>
        <div class="list-item-inner">
          <div class="list-item-img">
            <template v-if="item.product.images">
              <img :src="item.product.images[0].url" :alt="item.product.model">
            </template>
          </div>
          <div class="list-item-label">
            <span class="model">{{ item.product.model }}</span><br>
            <span class="price">{{ item.product.price }} грн. </span>
            <small>x {{ item.amount }} шт.</small>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    cart() {
      return this.$store.state.cart.list
    }
  },
  methods: {
    remove(id) {
      this.$store.dispatch('cart/remove', id)
      this.$message.success('Товар видалено з кошика')
    }
  }
}
</script>

<style lang="scss" scoped>
.list {
  overflow: hidden;
  padding: 0;
  margin: 0;

  &-item {
    padding: .5rem 0;
    list-style: none;
    display: flex;
    align-items: center;

    &-close {
      color: $red;
      position: absolute;
      padding-left: 5px;
      cursor: pointer;

      .icon {
        transform: rotate(35deg);
        transition: transform .25s ease-in-out, opacity .15s ease-in-out;
        z-index: 10;
        opacity: 0;
        font-size: 17px;
      }
    }

    &:hover {
      .list-item-inner {
        transform: translateX(20px);
        position: relative;
      }

      .icon {
        transform: rotate(0deg);
        opacity: 1;
      }
    }

    &-inner {
      display: flex;
      justify-content: flex-start;
      position: relative;
      transition: all .25s ease-in-out;

    }

    &:first-child {
      padding: 0 0 .5rem 0;
    }

    &:last-child {
      border-bottom: none !important;
    }

    &-img {
      img {
        height: 64px;
        width: 64px;
        object-fit: scale-down;
      }
    }

    &-label {
      line-height: 1.5;
      padding-left: 1rem;

      .model {
        color: $dark;
        font-weight: 500;
      }

      .price {
        color: $accent;
      }
    }
  }
}
</style>
