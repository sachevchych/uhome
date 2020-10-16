<template>
  <el-card class="form">
    <div slot="header">
      <h1>Вхід до keenCMS</h1>
    </div>
    <div>
      <el-form ref="form" :model="controls" :rules="rules" @submit.prevent.native="onSubmit">
        <el-form-item label="Логін" prop="login">
          <el-input v-model.trim="controls.login" prefix-icon="el-icon-message" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="Пароль" prop="password">
          <el-input v-model.trim="controls.password" type="password" prefix-icon="el-icon-lock"
                    show-password></el-input>
        </el-form-item>
        <el-form-item style="display: flex; justify-content: flex-end;margin-top: 2rem">
          <el-button type="primary" native-type="submit" :loading="loading">Увійти</el-button>
        </el-form-item>
      </el-form>
    </div>
  </el-card>
</template>

<script>
export default {
  layout: 'empty',
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
  mounted() {
    const {message} = this.$route.query

    switch (message) {
      case 'login':
        this.$message.warning('Спочатку ввійдіть, будь ласка, до облікового запису.')
        break
      case 'logout':
        this.$message.success('Ви успішно вийшли з облікового запису.')
        break
      case 'session':
        this.$message.warning('Час сесії минув, будь ласка, увійдіть знову.')
        break
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

            await this.$store.dispatch('auth/login', formData)
            this.$router.push('/admin/')
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
  min-width: 200px;
  width: 90%;
}
</style>
