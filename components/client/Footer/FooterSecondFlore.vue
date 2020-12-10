<template>
  <div class="wrap">
    <div class="container-xxl media-group">
      <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-4">
        <div class="col">
          <div class="media">
            <div>
              <i class="el-icon-truck"></i>
            </div>
            <div class="media-body">
              <h6>Швидка доставка</h6>
              <p>Відправимо Ваше замовлення в той же день.</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="media">
            <div>
              <i class="el-icon-guide"></i>
            </div>
            <div class="media-body">
              <h6>Повернення без проблем</h6>
              <p>Повернення товару згідно закону України.</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="media">
            <div>
              <i class="el-icon-finished"></i>
            </div>
            <div class="media-body">
              <h6>Гарантія якості</h6>
              <p>Тільки сертифіковані товари з офіційною гарантією.</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="media">
            <div>
              <i class="el-icon-chat-line-round"></i>
            </div>
            <div class="media-body">
              <h6>Консультація та підбір</h6>
              <p>Ми з радістю допоможемо Вам в виборі.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container-xxl copyright-group">
      <div>
        <nuxt-link to="/" class="logo">
            <img src="~/assets/images/logo_dark.svg" alt="logo">
        </nuxt-link>
        <span>© uHome, 2020. Всі права захищено.</span>
      </div>
      <div class="payments">

      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.wrap {
  background-color: #2B3445;
  padding: 1rem 0;
}

.media {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 1.2rem 0;

  &-group {
    border-bottom: 1px solid rgba(255, 255, 255, 0.12);
    padding-bottom: .5rem;
  }

  &-body {
    padding-left: 1rem;
  }

  i {
    font-size: 2.25rem;
    color: $main-color;
  }

  h6 {
    font-size: 1rem;
    color: #ffffff;
    margin: 0 0 .1rem;
    font-weight: normal;
  }

  p {
    color: #ffffff;
    opacity: .5;
    font-size: .8125rem;
    margin: 0;
  }
}

.copyright-group {
  padding-top: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    font-size: .75rem;
    color: #fff;
    opacity: .5;
  }
}


.logo {
  display: block;
  opacity: .7;
  transition: all 0.25s ease-in-out;

  &:hover {
    opacity: 1;
  }

  img {
    height: 60px;
    width: 150px;
    object-fit: cover;
  }
}

</style>
