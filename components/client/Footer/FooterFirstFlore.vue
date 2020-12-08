<template>
  <div class="wrap">
    <div class="container-xl">
      <div class="row">
        <div class="col-12 col-sm-6 col-lg-3">
          <div class="widget">
            <h3 class="widget-title">Каталог товарів</h3>
            <ul class="widget-list">
              <li class="widget-list-item">
                <el-link href="#" :underline="false" class="widget-list-link">Велика побутова техніка</el-link>
              </li>
              <li class="widget-list-item">
                <el-link href="#" :underline="false" class="widget-list-link">Мала побутова техніка</el-link>
              </li>
              <li class="widget-list-item">
                <el-link href="#" :underline="false" class="widget-list-link">Техніка для дому</el-link>
              </li>
              <li class="widget-list-item">
                <el-link href="#" :underline="false" class="widget-list-link">Техніка для кухні</el-link>
              </li>
              <li class="widget-list-item">
                <el-link href="#" :underline="false" class="widget-list-link">Сантехніка</el-link>
              </li>
              <li class="widget-list-item">
                <el-link href="#" :underline="false" class="widget-list-link">Дизайн та декор</el-link>
              </li>
              <li class="widget-list-item">
                <el-link href="#" :underline="false" class="widget-list-link">Мода та стиль</el-link>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-12 col-sm-6 col-lg-3">
          <div class="widget">
            <h3 class="widget-title">Інформація для покупця</h3>
            <ul class="widget-list">
              <li class="widget-list-item">
                <el-link href="#" :underline="false" class="widget-list-link">Ваш особистий кабінет</el-link>
              </li>
              <li class="widget-list-item">
                <el-link href="#" :underline="false" class="widget-list-link">Обмін та повернення</el-link>
              </li>
              <li class="widget-list-item">
                <el-link href="#" :underline="false" class="widget-list-link">Інформація про доставку та оплату
                </el-link>
              </li>
              <li class="widget-list-item">
                <el-link href="#" :underline="false" class="widget-list-link">Відстжити замовлення</el-link>
              </li>
            </ul>
          </div>
          <div class="widget">
            <h3 class="widget-title">Про нас</h3>
            <ul class="widget-list">
              <li class="widget-list-item">
                <el-link href="#" :underline="false" class="widget-list-link">Про компанію</el-link>
              </li>
              <li class="widget-list-item">
                <el-link href="#" :underline="false" class="widget-list-link">Блог</el-link>
              </li>
              <li class="widget-list-item">
                <el-link href="#" :underline="false" class="widget-list-link">Техніка для дому</el-link>
              </li>
              <li class="widget-list-item">
                <el-link href="#" :underline="false" class="widget-list-link">Техніка для кухні</el-link>
              </li>

            </ul>
          </div>
        </div>
        <div class="col-12 col-sm-12 col-lg-5 offset-lg-1">
          <div class="row">
            <div class="widget col-12 col-md-6 col-lg-12">
              <h3 class="widget-title">Підписатися на розсилку</h3>
              <el-input placeholder="Ваша електронна адреса" v-model="subscribe">
                <el-button slot="append" type="primary" plain>Підписатися</el-button>
              </el-input>
              <small class="subscribe-text">Підписатися на нашу розсилку, щоб отримувати особливі знижки, оновлення та
                інформацію про нові продукти.</small>
            </div>
            <div class="widget col-12 col-md-6 col-lg-12">
              <h3 class="widget-title">Ми у соціальних мережах</h3>
              <div class="row">
                <div class="col-6">
                  <div class="social ig d-flex flex-column align-items-center">
                    <font-awesome-icon :icon="['fab', 'instagram']" class="icon"/>
                    <span>Instagram</span>
                    <small>#uHome</small>
                  </div>
                </div>
                <div class="col-6">
                  <div class="social fb d-flex flex-column align-items-center">
                    <font-awesome-icon :icon="['fab', 'facebook-square']" class="icon"/>
                    <span>Facebook</span>
                    <small>#uHome</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      subscribe: '',
    }
  }
}
</script>

<style lang="scss" scoped>
.wrap {
  background-color: #373F50;
  margin: 0;
  height: auto;
  padding-top: 2rem;
}

.widget {
  margin-bottom: 2rem;
}

.widget-title {
  margin-bottom: 1rem;
  font-size: 1rem;
  font-weight: 500;
  color: #fff;
}

.widget-list {
  margin-top: 0;
  padding: 0;
  list-style: none;
  display: block;
}

.widget-list-item {
  margin-bottom: .375rem;
}

.widget-list-link {
  color: rgba(255, 255, 255, 0.65);
  display: block;
  line-height: 1.5;
  transition: color 0.25s ease-in-out;
  font-size: .875rem;
  font-weight: normal;
}

.widget-list-link:hover {
  color: #ffffff;
}

.subscribe-text {
  display: block;
  margin-top: .6rem;
  font-size: .75rem;
  color: rgba(255, 255, 255, 0.65);
}

.social {
  border-radius: 1rem;
  color: #ffffff;
  text-align: center;
  padding: 1rem .5rem;
  display: flex;
  flex-direction: column;
  line-height: 1.4rem;
  transition: background-color 0.25s ease-in-out;
  cursor: pointer;
}

.social i {
  margin-bottom: .5rem;
  transition: color 0.25s ease-in-out;
}

.social:hover i {
  color: #ffffff;
}

.social small {
  color: rgba(255, 255, 255, 0.65);
}

.ig {
  background-color: rgba(254, 105, 106, 0.3)
}

.ig i {
  color: rgb(254, 105, 106);
}

.ig:hover {
  background-color: rgba(254, 105, 106, 0.8)
}

.fb {
  background-color: rgba(78, 84, 200, 0.3);
}

.fb i {
  color: rgb(78, 84, 200);
}

.fb:hover {
  background-color: rgba(78, 84, 200, 0.8);
}

.icon {
  margin-bottom: .4rem;
  font-size: 2rem;
}
</style>
