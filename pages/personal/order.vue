<template>
  <div>
    <page-template title="Оформлення замовлення" :breadcrumbs="breadcrumbs" :aside="true" :left-aside="false">
      <template slot="article">
        <div>
          <el-steps :active="1" finish-status="success" simple class="steps">
            <el-step title="Контакти" class="steps-item"/>
            <el-step title="Доставка" class="steps-item"/>
            <el-step title="Оплата" class="steps-item"/>
          </el-steps>
        </div>
        <div>
          <h3>Контактна інформація</h3>
          <el-form ref="form" :rules="rules" :model="contacts">
            <el-form-item label="Ім'я" prop="name">
              <el-input v-model="contacts.name"></el-input>
            </el-form-item>
            <el-form-item label="Прізвище" prop="surname">
              <el-input v-model="contacts.surname"></el-input>
            </el-form-item>
            <el-form-item label="Телефон" prop="phone">
              <el-input type="tel" :value="contacts.phone" @focus="phone" @keydown.native="phone"
                        placeholder="+38 (---) --- ----"></el-input>
            </el-form-item>
            <el-form-item label="E-mail" prop="email">
              <el-input type="email" v-model="contacts.email"></el-input>
            </el-form-item>
            <el-form-item>
              <div class="d-flex justify-content-end">
                <el-button type="primary">Продовжити</el-button>
              </div>
            </el-form-item>
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
          <el-button class="w-100" type="primary" plain>Підтвердити замовлення</el-button>
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
      contacts: {
        name: '',
        surname: '',
        phone: '',
        email: ''
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
      }
    }
  },
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
  },
  methods: {
    phone(value) {
      if (value.code !== 'Space') {
        if (this.contacts.phone.length < 6) {
          this.contacts.phone = '+38 ('
        } else if (this.contacts.phone.length === 8 && value.key !== 'Backspace' && value.code !== 'Space') {
          this.contacts.phone = this.contacts.phone + ') '
        } else if (this.contacts.phone.length === 13 && value.key !== 'Backspace' && value.code !== 'Space') {
          this.contacts.phone = this.contacts.phone + ' '
        } else if (this.contacts.phone.length > 17) {
          if (value.key === 'Backspace') this.contacts.phone = this.contacts.phone.split('').slice(0, this.contacts.phone.length - 1).join('')
          return true
        }

        if (value.key === 'Backspace') {
          this.contacts.phone = this.contacts.phone.split('').slice(0, this.contacts.phone.length - 1).join('')
        } else if (!isNaN(value.key)) {
          this.contacts.phone = this.contacts.phone + value.key
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
