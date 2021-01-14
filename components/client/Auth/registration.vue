<template>
  <div>
    <h3>Реєстрація</h3>
    <p>Реєстрація займає менше хвилини, але дає вам повний контроль над вашими замовленнями.</p>
    <el-form :model="form" ref="registrationForm" :rules="rules">
      <el-form-item label="Мобільний телефон" prop="phone">
        <el-input v-model="form.phone" placeholder="Введіть свій номер телефону" type="tel"></el-input>
      </el-form-item>
      <el-form-item label="Ім'я та прізвище" prop="name">
        <el-input v-model="form.name" placeholder="Введіть ім'я та прізвище"></el-input>
      </el-form-item>
      <el-form-item label="Електронна пошта" prop="email">
        <el-input v-model="form.email" placeholder="Введіть вашу електронну пошту" type="email"></el-input>
      </el-form-item>
      <el-form-item label="Пароль" prop="password">
        <el-input v-model="form.password" placeholder="Введіть бажаний пароль" type="password"></el-input>
      </el-form-item>
      <el-button type="primary" @click="registration" :disabled="formDisabled" class="w-100 mt-2">Підтвердити
      </el-button>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "registration",
  data() {
    return {
      form: {
        name: '',
        phone: '',
        email: '',
        password: ''
      },
      rules: {
        phone: [
          {required: true, message: 'Будь ласка, введіть ваш номер телефону', trigger: 'blur'},
          {min: 10, max: 13, message: 'Телефон введено не коректно', trigger: 'blur'}
        ],
        name: [
          {required: true, message: 'Будь ласка, введіть ваше ім\'я та прізвище', trigger: 'blur'}
        ],
        email: [
          {
            required: true,
            message: 'Будь ласка, введіть вашу електронну адресу',
            trigger: 'blur'
          },
          {type: 'email', message: 'Електронна пошта введена не коректно', trigger: 'blur'}
        ],
        password: [
          {required: true, message: 'Будь ласка, придумайте пароль', trigger: 'blur'},
          {min: 6, required: true, message: 'Пароль складатися як мінім з 6 символів', trigger: 'blur'}
        ]
      },
    }
  },
  methods: {
    registration() {
      this.$refs.registrationForm.validate(async (valid) => {
        if (valid) {
          await this.$store.dispatch('auth/createUser', this.form)
          this.$message.success('Профіль створено')
          this.$refs.registrationForm.resetFields()
        } else {
          this.$message.error('Не всі поля введені коректно')
          return false;
        }
      });
    }
  },
  computed: {
    formDisabled() {
      return !this.form.name || !this.form.phone || !this.form.email || !this.form.password
    }
  }
}
</script>

<style scoped>
h3 {
  text-align: center;
}

p {
  font-size: 0.875rem;
  text-align: center;
}
</style>
