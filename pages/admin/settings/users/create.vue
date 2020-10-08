<template>
  <div class="wrap">
    <div class="page-bar">
      <h1>Додавання нового користувача</h1>
    </div>
    <div class="container">
      <el-form class="form" ref="form" :model="controls" :rules="rules" @submit.prevent.native="onSubmit">
        <el-form-item label="Електронна пошта" prop="login">
          <el-input v-model.trim="controls.login" prefix-icon="el-icon-message" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="Пароль" prop="password">
          <el-input v-model.trim="controls.password" type="password" prefix-icon="el-icon-lock"
                    show-password></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" native-type="submit" :loading="loading">Створити користувача</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>

</template>

<script>
  export default {
    data() {
      return {
        loading: false,
        controls: {
          login: '',
          password: ''
        },
        rules: {
          login: [
            {required: true, message: 'Введіть логін', trigger: 'blur'}
          ],
          password: [
            {required: true, message: 'Введіть пароль', trigger: 'blur'},
            {min: 6, message: 'Пароль повинен містити як мінімум 6 символів', trigger: 'blur'}
          ]
        },

      }
    },
    methods: {
      onSubmit() {
        this.$refs.form.validate(async valid => {
          if (valid) {
            this.loading = true

            try {
              const formData = {
                login: this.controls.login,
                password: this.controls.password
              };

              await this.$store.dispatch('auth/createUser', formData)
              this.$message.success('Нового користувача додано')
              this.controls.login = ''
              this.controls.password = ''
              this.loading = false
            } catch (e) {
              this.loading = false
            }
          }
        })
      }
    }
  }
</script>

<style scoped>
  .form {
    max-width: 500px;
  }
</style>
