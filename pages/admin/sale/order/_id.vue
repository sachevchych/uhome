<template>
  <page-container :title="`Замовлення №${order._id}`" :background="false" :footer="false">
    <template slot="header">
      <el-tag :type="orderStatuses[order.status].type" effect="dark">{{ orderStatuses[order.status].label }}</el-tag>
    </template>
    <template slot="content">
      <div class="row">
        <div class="col-12">
          <el-card class="card">
            <div slot="header" class="card-header">
              <h4>Загальна інформація</h4>
              <div>
                <el-select size="small" v-model="order.status" :disabled="disabled.status" placeholder="Статус замовлення">
                  <el-option v-for="status in orderStatuses" :key="status.value" :label="status.label" :value="status.value"></el-option>
                </el-select>
                <el-button v-if="disabled.status" size="small" @click="edit('status')">Змінити</el-button>
                <el-button v-if="!disabled.status" type="success" size="small" @click="save('status')">Оновити
                </el-button>
              </div>
            </div>
            <div class="general row row-cols-1 row-cols-xl-3">
              <div class="col">
                <ul class="general-list">
                  <li class="general-item">
                    <small>Покупець:</small>
                    <span>{{ order.contacts.name }} {{ order.contacts.surname }}</span>
                  </li>
                  <li class="general-item">
                    <small>Телефон:</small>
                    <a :href="`tel:${order.contacts.phone}`">{{ order.contacts.phone }}</a>
                  </li>
                </ul>
              </div>
              <div class="col">
                <ul class="general-list">
                  <li class="general-item">
                    <small>Загаль вартість замовлення:</small>
                    <span>{{ totalPrice }} грн.</span>
                  </li>
                  <li class="general-item">
                    <small>Надано знижку:</small>
                    <span>0 грн.</span>
                  </li>
                  <li class="general-item">
                    <small>Доставка:</small>
                    <span>0 грн.</span>
                  </li>
                  <li class="general-item">
                    <small>Разом:</small>
                    <span>{{ totalPrice }} грн.</span>
                  </li>
                </ul>
              </div>
              <div class="col">
                <ul class="general-list">
                  <li class="general-item">
                    <small>Служба доставки:</small>
                    <span>{{ order.delivery.company }}</span>
                  </li>
                  <li class="general-item">
                    <small>Спосіб доставки:</small>
                    <span>{{ order.delivery.deliveryType }}</span>
                  </li>
                </ul>
              </div>
            </div>
          </el-card>
        </div>
        <div class="col-12 col-xl-5">
          <el-card class="card">
            <div slot="header" class="card-header">
              <h4>Контактні данні</h4>
              <el-button v-if="disabled.contacts" size="mini" @click="edit('contacts')" round>Редагувати</el-button>
              <el-button v-if="!disabled.contacts" type="success" size="mini" @click="save('contacts')" round>Зберегти
              </el-button>
            </div>
            <div>
              <el-form ref="contacts" :model="order.contacts" label-width="120px">
                <el-form-item label="Ім'я:">
                  <el-input v-model="order.contacts.name" :disabled="disabled.contacts"></el-input>
                </el-form-item>
                <el-form-item label="Прізвище:">
                  <el-input v-model="order.contacts.surname" :disabled="disabled.contacts"></el-input>
                </el-form-item>
                <el-form-item label="По батькові:">
                  <el-input v-model="order.contacts.middleName" :disabled="disabled.contacts"></el-input>
                </el-form-item>
                <el-form-item label="Телефон:">
                  <el-input v-model="order.contacts.phone" :disabled="disabled.contacts"></el-input>
                </el-form-item>
                <el-form-item label="E-mail:">
                  <el-input v-model="order.contacts.email" :disabled="disabled.contacts"></el-input>
                </el-form-item>
              </el-form>
            </div>
          </el-card>
        </div>
        <div class="col-12 col-xl-7">
          <el-card class="card">
            <div slot="header" class="card-header">
              <h4>Кошик</h4>
              <el-button v-if="disabled.cart" size="mini" @click="edit('cart')" round>Редагувати</el-button>
              <el-button v-if="!disabled.cart" type="success" size="mini" @click="save('cart')" round>Зберегти
              </el-button>
            </div>
            <div>
              <ul class="cart">
                <li class="cart-item" v-for="item in order.cart" :key="item._id">
                  <div class="d-flex align-items-center">
                    <img :src="item.product.images[0].url" :alt="item.product.images[0].name"/>
                    <div class="mx-2">
                      <span>{{ item.product.name }} {{ item.product.model }}</span><br>
                      <small>{{ item.price }} грн.</small>
                    </div>
                  </div>
                  <div class="d-flex align-items-center w-50 justify-content-between">
                    <el-input-number :min="1" :max="500"
                                     size="mini" :disabled="disabled.cart"
                                     class="mx-3" v-model="item.amount">
                    </el-input-number>
                    <small>{{ item.price * item.amount }} грн.</small>
                  </div>
                </li>
              </ul>
            </div>
          </el-card>
        </div>
        <div class="col-12 col-xl-6">
          <el-card class="card">
            <div slot="header" class="card-header">
              <h4>Данні про доставку</h4>
              <el-button v-if="disabled.delivery" size="mini" @click="edit('delivery')" round>Редагувати</el-button>
              <el-button v-if="!disabled.delivery" type="success" size="mini" @click="save('delivery')" round>Зберегти
              </el-button>
            </div>
            <div>
              <el-form ref="contacts" :model="order.delivery" label-width="150px">
                <el-form-item label="Місто:">
                  <el-input v-model="order.delivery.city" :disabled="disabled.delivery"></el-input>
                </el-form-item>
                <el-form-item label="Служба доставки:">
                  <el-select v-model="order.delivery.company" :disabled="disabled.delivery">
                    <el-option label="Нова Пошта" value="Нова Пошта"></el-option>
                    <el-option label="Міст Експрес" value="Міст Експрес"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="Спосіб доставки:">
                  <el-select v-model="order.delivery.deliveryType" :disabled="disabled.delivery">
                    <el-option label="На відділення" value="На відділення"></el-option>
                    <el-option label="Адресна доставка" value="Адресна доставка"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="Номер відділення:" v-if="order.delivery.deliveryType === 'На відділення'">
                  <el-input v-model="order.delivery.department" :disabled="disabled.delivery"></el-input>
                </el-form-item>
                <el-form-item label="Адреса:" v-if="order.delivery.deliveryType === 'Адресна доставка'">
                  <el-input v-model="order.delivery.address" :disabled="disabled.delivery"></el-input>
                </el-form-item>
              </el-form>
            </div>
          </el-card>
        </div>
        <div class="col-12 col-xl-6">
          <el-card class="card">
            <div slot="header" class="card-header">
              <h4>Данні про оплату</h4>
              <el-button v-if="disabled.payment" size="mini" @click="edit('payment')" round>Редагувати</el-button>
              <el-button v-if="!disabled.payment" type="success" size="mini" @click="save('payment')" round>Зберегти
              </el-button>
            </div>
            <div>
              <el-form ref="payment" :model="order.payment" label-width="150px">
                <el-form-item label="Тип оплати:">
                  <el-select v-model="order.payment.paymentType" :disabled="disabled.payment">
                    <el-option label="Оплата при отриманні" value="Оплата при отриманні"></el-option>
                    <el-option label="Оплата на карту" value="Оплата на карту"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="Оплачено:">
                  <el-input v-model="order.payment.paidFor" :disabled="disabled.payment">
                    <template slot="append">грн. </template>
                  </el-input>
                </el-form-item>
              </el-form>
            </div>
          </el-card>
        </div>
      </div>
    </template>
  </page-container>
</template>

<script>
import PageContainer from "@/components/admin/PageContainer";

export default {
  layout: 'admin',
  middleware: ['admin-auth'],
  components: {PageContainer},
  async validate({store, params}) {
    return !!await store.dispatch('admin/order/fetchOne', params.id)
  },
  data() {
    return {
      order: {
        _id: '',
        status: '',
        contacts: {
          name: '',
          surname: '',
          middleName: '',
          phone: '',
          email: ''
        },
        delivery: {
          city: '',
          company: '',
          deliveryType: '',
          department: '',
          address: '',
        },
        payment: {
          paymentType: '',
          paidFor: 0
        },
        cart: []
      },
      disabled: {
        contacts: true,
        delivery: true,
        payment: true,
        cart: true,
        status: true
      }
    }
  },
  async asyncData({store, route}) {
    const order = await store.dispatch('admin/order/fetchOne', route.params.id)
    return { order }
  },
  computed: {
    totalPrice() {
      let totalPrice = 0
      this.order.cart.forEach(element => {
        totalPrice = totalPrice + element.amount * element.price
      })
      return totalPrice
    },
    orderStatuses() {
      return this.$store.state.admin.order.statuses
    }
  },
  methods: {
    edit(group) {
      this.disabled[group] = false
    },
    async save(group) {
      try {
        await this.$store.dispatch('admin/order/update', this.order)
        this.$message.success('Інформацію оновлено')
        this.disabled[group] = true
      } catch (e) {
        this.$message.error(`Виникла помилка при оновленні інформації: ${e}`)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  margin-bottom: 1rem;

  a {
    color: $primary;
    text-decoration: none;

    &:hover {
      color: $primary-light-1;
      text-decoration: underline;
    }
  }

  &-header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    h4 {
      margin: 0;
    }
  }
}

.general {
  &-list {
    padding: 0;

  }

  &-item {
    list-style: none;
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.5rem;
    font-size: .9rem;

    span {

    }

    small {
      font-size: 90%;
    }
  }
}

.cart {
  padding: 0;

  &-item {
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid rgba($gray, .15);
    padding-bottom: .5rem;
    margin-bottom: 1rem;

    img {
      height: 50px;
      width: 50px;
      object-fit: scale-down;
    }

    span {
      font-size: .9rem;
    }

    small {
      color: $accent;
    }
  }
}
</style>
