<template>
  <el-card
    shadow="hover"
    :body-style="{ padding: '0px' }"
    class="post"
  >
    <img src="https://picsum.photos/1000/400" alt="post image" class="post-img">
    <div class="post-body">
      <h3>
        <nuxt-link to="#">Post title</nuxt-link>
      </h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aperiam cumque dicta dignissimos id
        temporibus.</p>
    </div>
    <footer class="post-footer">
      <div>
        <i class="el-icon-time"></i>
        <small>
          {{ new Date().toLocaleString() }}
        </small>
        <span class="meta-divider"></span>
        <i class="el-icon-message"></i>
        <small>
          12
        </small>
      </div>
      <el-button size="mini" @click="openPost">Переглянути</el-button>
    </footer>
  </el-card>
</template>

<script>
    export default {
        methods: {
            openPost() {
                const id = 'test-id';
                this.$router.push(`/blog/${id}`)
            }
        }
    }
</script>

<style scoped>
  .post {
    margin-bottom: 1.5rem;
  }

  .post-img {
    width: 100%;
    display: block;
  }

  .post-body {
    padding: 1.25rem;;
  }

  .post-body h3 {
    margin-bottom: .75rem;
    font-size: 1.0625rem;
  }

  .post-body h3 > a {
    text-decoration: none;
    line-height: 1.3;
    font-weight: 500;
    color: #373f50;
  }

  .post:hover h3 > a {
    color: #fe696a;
  }

  .post-body p {
    margin-bottom: 1rem;
    font-size: .875rem;
  }

  .post-footer {
    border-top: 1px solid #EBEEF5;
    padding: 0.5rem 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #7d879c;
    font-size: .75rem;
  }

  .post-footer i {
    margin-right: 2px;
  }

  .meta-divider {
    display: inline-block;
    width: 1px;
    height: 1rem;
    margin: 0 0.4rem;
    background-color: #d9e1e9;
    vertical-align: middle;
  }
</style>
