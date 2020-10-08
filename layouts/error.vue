<template>
  <div class="wrap">
    <div class="container error">
      <div class="error-img">
        <img src="/img/404_illustration.svg" alt="Error illustration">
      </div>

      <div class="error-content" v-if="error.statusCode === 404">
        <h1>Помилка 404</h1>
        <h2>Сторінка не знайдена</h2>
        <p>Здається, Ктулху з'їв цю сторінку... Біжіть на головну, поки не пізно!</p>
        <el-button @click="toHomePage" type="primary">На головну!</el-button>
      </div>
      <div class="error-content" v-else>
        <h1>Сталася помилка</h1>
        <p>Здається, Ктулху наробив шкоди... Біжіть на головну, поки не пізно!</p>
        <el-button @click="toHomePage" type="primary">На головну!</el-button>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    props: ['error'],
    middleware: ['admin-auth'],
    methods: {
      toHomePage() {
        this.$router.push('/')
      }
    }
  }
</script>

<style scoped>
  .error {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5rem 2rem;
  }

  .error-img {
    width: 500px;
    min-width: 300px;
  }

  .error-img > img {
    width: 100%;
    height: auto;
  }

  .error-content {
    margin-left: 3rem;
    min-width: 350px;
  }

  .error-content > h1 {
    font-size: 3rem;
    margin: 0 0 1rem 0;
  }

  .error-content > h2 {
    font-size: 2rem;
    margin: 0 0 2rem 0;
  }

  .error-content > p {
    font-size: 1.2rem;
    margin-bottom: 2rem;
  }
</style>
