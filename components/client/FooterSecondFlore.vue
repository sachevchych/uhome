<template>
  <div class="wrap">
    <div class="container media-group">
      <el-row :gutter="50">
        <el-col :xs="24" :sm="12" :md="6" class="media">
          <div>
            <i class="el-icon-truck"></i>
          </div>
          <div class="media-body">
            <h6>Швидка доставка</h6>
            <p>Відправимо Ваше замовлення в той же день.</p>
          </div>
        </el-col>
        <el-col :xs="24" :sm="12" :md="6" class="media">
          <div>
            <i class="el-icon-guide"></i>
          </div>
          <div class="media-body">
            <h6>Повернення без проблем</h6>
            <p>Повернення товару згідно закону України.</p>
          </div>
        </el-col>
        <el-col :xs="24" :sm="12" :md="6" class="media">
          <div>
            <i class="el-icon-finished"></i>
          </div>
          <div class="media-body">
            <h6>Гарантія якості</h6>
            <p>Тільки сертифіковані товари з офіційною гарантією.</p>
          </div>
        </el-col>
        <el-col :xs="24" :sm="12" :md="6" class="media">
          <div>
            <i class="el-icon-chat-line-round"></i>
          </div>
          <div class="media-body">
            <h6>Консультація та підбір</h6>
            <p>Ми з радістю допоможемо Вам в виборі.</p>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="container copyright-group">
      <div>
        <img src="https://demo.createx.studio/cartzilla/img/footer-logo-light.png" alt="Logo Light" height="28px">
        <br>
        <span>© Всі права захищено. Розроблено студією дизайну SmartInteger.</span>
      </div>
      <div class="payments">

      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "FooterSecondFlore"
  }
</script>

<style scoped>
  .wrap {
    background-color: #2B3445;
    padding: 1rem 0;
  }

  .media-group {
    border-bottom: 1px solid rgba(255, 255, 255, 0.12);
    padding-bottom: .5rem;
  }

  .media {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 1.2rem 0;
  }

  .media i {
    font-size: 2.25rem;
    color: #fe696a;
  }

  .media-body {
    padding-left: 1rem;
  }

  .media h6 {
    font-size: 1rem;
    color: #ffffff;
    margin: 0;
    font-weight: normal;
  }

  .media p {
    color: #ffffff;
    opacity: .5;
    font-size: .8125rem;
    margin: 0;
  }

  .copyright-group {
    padding-top: 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .copyright-group span {
    font-size: .75rem;
    color: #fff;
    opacity: .5;
  }

</style>
