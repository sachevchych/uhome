<template>
  <div class="container">
    <el-row :gutter="40">
      <el-col :sm="24" :md="16" :lg="17" class="content">
        <article>
          <header>
            <h2>Заголовок статті</h2>
          </header>
          <main>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis deserunt eveniet facere, laudantium
              natus perferendis praesentium quas quasi quibusdam, saepe soluta tempore temporibus voluptates. Aut nemo
              quae ratione saepe velit.</p>
          </main>
        </article>
      </el-col>
      <el-col :sm="24" :md="8" :lg="7">
        <AppBlogAside></AppBlogAside>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import AppBlogAside from "../../components/client/Blog/BlogAside";

  export default {
    components: {AppBlogAside},
    validate({params}) {
      return Boolean(params.id)
    }
  }
</script>

<style scoped>

</style>
