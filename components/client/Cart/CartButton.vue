<template>
  <el-popover placement="bottom" width="280" trigger="hover" :close-delay="300">
    <div class="row" v-if="cart.length">
      <div class="col-12">
        <cart-list-mini/>
      </div>
      <div class="col-12 footer border-top pt-2">
        <div class="d-flex align-items-center justify-content-between">
          <span>Разом: <span class="price">{{ totalPrice }}</span> грн.</span>
        </div>
        <div class="mt-2">
          <el-button type="primary" size="small" class="w-100" @click="order">Оформити замовлення</el-button>
        </div>
      </div>
    </div>
    <div class="empty-cart" v-else>
      <img src="~/assets/images/empty_cart.svg" alt="Порожній кошик">
      <span>Тут наразі порожньо...<br> але це можна виправити.</span>
    </div>
    <div class="cart" slot="reference">
      <div class="cart-btn">
        <font-awesome-icon :icon="['fa', 'shopping-cart']"/>
        <el-badge :max="99" :value="cart.length" class="cart-btn-counter" type="primary"/>
      </div>
      <span class="cart-label">
        <small>Моя коризна</small>
        <br>{{ totalPrice }}₴
      </span>
    </div>
  </el-popover>
</template>

<script>
import CartListMini from "@/components/client/Cart/CartListMini";
export default {
  components: {CartListMini},
  computed: {
    cart() {
      return this.$store.state.cart.list
    },
    totalPrice() {
      return this.$store.getters['cart/totalPrice']
    }
  },
  methods: {
    order() {
      this.$router.push('/personal/order/')
    }
  }
}
</script>

<style lang="scss" scoped>
.cart {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  min-width: 140px;
  cursor: pointer;

  &-btn {
    background-color: #f3f5f9;
    border-radius: 50%;
    width: 46px;
    height: 46px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    font-size: 1.1rem;
    color: #4b566b;

    &-counter {
      position: absolute;
      right: -.5rem;
      top: 0;
      font-weight: 500;
    }
  }

  &-label {
    color: #4b566b;
    font-size: 0.875rem;
    line-height: 1.2rem;
    margin-left: 10px;

    small {
      color: #7d879c;
      font-size: 80%;
      line-height: 1rem
    }
  }
}

.footer {
  .price {
    color: $accent;
    font-size: 110%;
  }
}

.empty-cart {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem 1rem;

  img {
    height: 6rem;
    width: 6rem;
    object-fit: scale-down;
  }

  span {
    margin-top: .5rem;
    text-align: center;
  }
}

</style>
