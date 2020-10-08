<template>
  <div class="wrap">
    <div class="container">
      <el-row class="page-bar">
        <el-col :md="24" :lg="12" class="title">
          <h1>Заголовок сторінки</h1>
        </el-col>
        <el-col :md="24" :lg="12" class="breadcrumb">
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">
              Головна сторінка
            </el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/blog/' }">Блог</el-breadcrumb-item>
            <el-breadcrumb-item>Елемент детально</el-breadcrumb-item>
          </el-breadcrumb>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
    export default {
        name: "PageBar"
    }
</script>

<style scoped>
  .wrap {
    background-color: #f6f9fc;
  }

  .page-bar {
    padding: 2rem 0;
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .breadcrumb {
    display: inline-flex;
    flex-direction: row;
    justify-content: flex-end;
  }

  @media screen and (max-width: 992px) {
    .page-bar {
      flex-direction: column;
      text-align: center;
      justify-content: flex-end;
    }

    .breadcrumb {
      justify-content: center;
      order: 1;
      margin-bottom: 1rem;
    }

    .title {
      order: 2;
    }
  }

  .title h1 {
    font-size: 1.75rem;
    font-weight: 500;
    line-height: 1.2;
    color: #373f50;
    margin: 0;
  }

  .breadcrumb span, a {
    font-size: .8125rem;
    line-height: 1.5;
  }
</style>
