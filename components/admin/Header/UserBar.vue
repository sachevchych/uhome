<template>
  <div class="user-bar">
    <el-popover
      placement="bottom"
      width="240"
      trigger="click">
      <div slot="reference" class="button">
        <span><small>Привіт,</small> Артем</span>
        <el-avatar
          :src="user.photoUrl"
          :size="38"
          fit="scale-down"
          class="photo-btn">
        </el-avatar>
      </div>
      <div class="popover">
        <div class="header">
          <el-avatar
            :size="50"
            :src="user.photoUrl"
            fit="scale-down"
            class="photo-popover">
          </el-avatar>
          <div class="title">
            <span>Артем Сачевчич</span>
            <br>
            <small>Директор</small>
          </div>
        </div>
        <div class="footer">
          <el-button type="primary" size="small" @click="logout" plain>Вихід</el-button>
        </div>
      </div>
    </el-popover>
  </div>
</template>

<script>
    export default {
        name: "AdminHeaderUserBar",
        data() {
            return {
                user: {
                    photoUrl: 'https://picsum.photos/300/300?grayscale'
                }
            }
        },
        methods: {
            logout() {
                this.$store.dispatch('auth/logout');
                this.$router.push('/admin/login?message=logout')
            }
        }
    }
</script>

<style scoped>
  .button {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    border-radius: 50px;
    cursor: pointer;
    height: 50px;
    transition: all 0.3s;
    padding: 0 8px;
  }

  .button:hover {
    background-color: #EFF2FE;
  }

  span, small {
    color: #6c7293;
    font-weight: 500;
    font-size: 0.9rem;
  }

  small {
    color: #959cb6;
  }

  .photo-btn {
    align-self: center;
    margin-left: .55rem;
  }

  .header {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .photo-popover {
    align-self: center;
  }

  .title {
    margin-left: .8rem;
  }

  .title span {
    font-size: 1rem;
    font-weight: 500;
    padding-bottom: 0.25rem;
  }

  .title small {
    padding-top: 0.25rem;
    font-size: 0.8rem;
    font-weight: 400;
    color: #74788d;
  }

  .footer {
    display: flex;
    justify-content: flex-end;
    padding-top: 1rem;
  }
</style>
