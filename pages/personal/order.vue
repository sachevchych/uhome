<template>
  <div>
    <page-template title="Оформлення замовлення" :breadcrumbs="breadcrumbs" :aside="true" :left-aside="false">
      <template slot="article">
        <div>
          <el-steps :active="step" finish-status="success" simple class="steps">
            <el-step title="Контакти" class="steps-item"/>
            <el-step title="Доставка" class="steps-item"/>
            <el-step title="Оплата" class="steps-item"/>
          </el-steps>
        </div>
        <div>
          <el-form ref="contacts" :rules="rules" :model="order">
            <div v-if="step === 0">
              <h3>Контактна інформація</h3>

              <el-form-item label="Ім'я" prop="name">
                <el-input v-model="order.name"></el-input>
              </el-form-item>
              <el-form-item label="Прізвище" prop="surname">
                <el-input v-model="order.surname"></el-input>
              </el-form-item>
              <el-form-item label="Телефон" prop="phone">
                <el-input type="tel" :value="order.phone" @focus="phone" @keydown.native="phone"
                          placeholder="+38 (---) --- ----"></el-input>
              </el-form-item>
              <el-form-item label="E-mail" prop="email">
                <el-input type="email" v-model="order.email"></el-input>
              </el-form-item>
              <el-form-item>
                <div class="d-flex justify-content-end">
                  <el-button type="primary" @click="nextStep(1)">Продовжити</el-button>
                </div>
              </el-form-item>
            </div>
            <div v-if="step === 1">
              <h3>Інформація про доставку</h3>
              <el-form-item label="Місто" prop="city">
                <el-select
                  v-model="order.city"
                  filterable
                  allow-create
                  placeholder="Якщо місто відсутнє просто введіть назву"
                  class="w-100"
                >
                  <el-option
                    v-for="city in cities"
                    :key="city"
                    :label="city"
                    :value="city">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="Служба доставки" prop="company">
                <el-select
                  v-model="order.company"
                  placeholder="Оберіть службу доставки"
                  class="w-100"
                >
                  <el-option label="Нова Пошта" value="Нова Пошта"></el-option>
                  <el-option label="Міст Експрес" value="Міст Експрес"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="Тип доставки" prop="type">
                <el-select
                  v-model="order.type"
                  placeholder="Оберіть тип доставки"
                  class="w-100"
                >
                  <el-option label="На відділення" value="На відділення"></el-option>
                  <el-option label="Адресна доставка" value="Адресна доставка"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="Номер відділення" prop="department" v-if="order.type === 'На відділення'">
                <el-input v-model="order.department" placeholder="Введіть номер відділення"></el-input>
              </el-form-item>
              <el-form-item label="Адреса" prop="address" v-if="order.type === 'Адресна доставка'">
                <el-input v-model="order.address" placeholder="Введіть адресу"></el-input>
              </el-form-item>
              <el-form-item>
                <div class="d-flex justify-content-end">
                  <el-button type="primary" @click="nextStep(2)">Продовжити</el-button>
                </div>
              </el-form-item>
            </div>
            <div v-if="step === 2">
              <h3>Варіант оплати</h3>
              <el-form-item label="Спосіб оплати" prop="payment">
                <el-select
                  v-model="order.payment"
                  placeholder="Оберіть спосіб оплати"
                  class="w-100"
                >
                  <el-option label="Оплата при отриманні" value="Оплата при отриманні"></el-option>
                  <el-option label="Оплата на карту" value="Оплата на карту"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item>
                <div class="d-flex justify-content-end">
                  <el-button type="primary" @click="makeOrder">Оформити замовлення</el-button>
                </div>
              </el-form-item>
            </div>
          </el-form>
        </div>
      </template>
      <template slot="aside">
        <h3>Ваше замовлення</h3>
        <cart-list-mini/>
        <div class="border-top">
          <div class="total-price text-center">
            <span>{{ totalPrice }} грн.</span>
          </div>
          <el-button class="w-100" type="primary" plain @click="makeOrder">Підтвердити замовлення</el-button>
        </div>
      </template>
    </page-template>
  </div>
</template>

<script>
import PageBar from "@/components/client/PageBar";
import CartListMini from "@/components/client/Cart/CartListMini";
import PageTemplate from "@/components/client/Pages/PageTemplate";

export default {
  name: "cart",
  components: {PageTemplate, CartListMini, PageBar},
  data() {
    return {
      step: 0,
      order: {
        name: '',
        surname: '',
        phone: '',
        email: '',
        city: '',
        company: '',
        type: '',
        department: '',
        address: '',
        payment: '',
      },
      rules: {
        name: [
          {required: true, message: "Будь ласка, введіть ваше ім'я", trigger: 'blur'}
        ],
        phone: [
          {required: true, min: 18, message: "Введіть повний номер телефону", trigger: 'blur'},
        ],
        email: [
          {type: 'email', message: "Некоректно введений e-mail", trigger: 'blur'},
        ],
      },
      cities: [
        'Київ', 'Харків', 'Одеса', 'Дніпро', 'Донецьк', 'Запоріжжя', 'Львів', 'Кривий Ріг', 'Миколаїв', 'Севастополь',
        'Маріуполь', 'Луганськ', 'Вінниця', 'Макіївка', 'Херсон', 'Чернігів', 'Полтава', 'Черкаси', 'Хмельницький',
        'Чернівці', 'Житомир', 'Суми', 'Рівне', 'Горлівка', 'Івано-Франківськ', 'Кам\'янське', 'Кропивницький',
        'Тернопіль', 'Луцьк', 'Ковель'
      ]
    }
  }
  ,
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
  ,
  methods: {
    nextStep(value) {
      this.$refs['contacts'].validate((valid) => {
        if (valid) {
          this.step = value
        } else {
          this.$message.error("Для оформлення замовлення потрібно принаймні вказати ім'я та номер телефону")
          return false
        }
      })
    },
    async makeOrder() {
      this.$refs['contacts'].validate(async (valid) => {
        if (valid) {
          await this.$store.dispatch('public/order/create', this.order)
        } else {
          this.$message.error("Для оформлення замовлення потрібно принаймні вказати ім'я та номер телефону")
          return false
        }
      })
    },
    phone(value) {
      if (value.code !== 'Space') {
        if (this.order.phone.length < 6) {
          this.order.phone = '+38 ('
        } else if (this.order.phone.length === 8 && value.key !== 'Backspace' && value.code !== 'Space') {
          this.order.phone = this.order.phone + ') '
        } else if (this.order.phone.length === 13 && value.key !== 'Backspace' && value.code !== 'Space') {
          this.order.phone = this.order.phone + ' '
        } else if (this.order.phone.length > 17) {
          if (value.key === 'Backspace') this.order.phone = this.order.phone.split('').slice(0, this.order.phone.length - 1).join('')
          return true
        }

        if (value.key === 'Backspace') {
          this.order.phone = this.order.phone.split('').slice(0, this.order.phone.length - 1).join('')
        } else if (!isNaN(value.key)) {
          this.order.phone = this.order.phone + value.key
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
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

.steps {
  border-radius: $border-radius-lg;
  background-color: $white;
  margin-bottom: 3rem;
}
</style>
