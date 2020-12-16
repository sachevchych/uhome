<template>
  <div>
    <page-bar title="Кошик" :breadcrumbs="breadcrumbs" theme="dark" class="page-bar"></page-bar>
    <div class="container-xxl">
      <div class="main row">
        <div class="col-12 col-md-7 col-lg-8 col-xl-8">
          <p>Тут буде форма оформлення замовлення.</p>
        </div>
        <div class="col-12 col-md-5 col-lg-4 col-xl-4">
          <aside class="mb-4">
            <div class="sidebar">
              <h3>Ваше замовлення</h3>
              <cart-list-mini/>
              <div class="border-top">
                <div class="total-price text-center">
                  <span>{{ totalPrice }} грн.</span>
                </div>
                <el-button class="w-100" type="primary" plain>Підтвердити замовлення</el-button>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PageBar from "@/components/client/PageBar";
import CartListMini from "@/components/client/Cart/CartListMini";

export default {
  name: "cart",
  components: {CartListMini, PageBar},
  computed: {
    totalPrice() {
      return this.$store.getters['cart/totalPrice']
    },
    breadcrumbs() {
      return [
        {label: 'Особистий кабінет', url: '/personal/'},
        {label: 'Кошик', url: '/personal/cart/'},
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.page-bar {
  padding-bottom: 100px;
}

.main {
  margin-top: -5rem;
}

.sidebar {
  background-color: #ffffff;
  box-shadow: 0 0.3rem 1.525rem -0.375rem rgba(0, 0, 0, 0.1);
  border-radius: .5rem;
  padding: 1rem;

  h3 {
    margin: .5rem 0 1.75rem;
    font-size: 1.0625rem;
    font-weight: 500;
    line-height: 1.2;
    color: #373f50;
    text-align: center;
  }

  .total-price {
    font-weight: 400;
    text-align: center;
    margin: 1.5rem 0;
    font-size: 1.75rem;
    line-height: 1.2;
    color: #373f50;
  }
}
</style>
