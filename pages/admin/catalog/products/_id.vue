<template>
  <div class="wrap">
    <div class="page-bar">
      <h1 v-if="ifCreate">Створення нового товару</h1>
      <h1 v-else>{{ product.name }}</h1>
    </div>
    <div class="container">
      <el-form
        class="content"
        ref="controls"
        :model="controls"
        :rules="rules"
        label-width="120px"
        enctype="multipart/form-data"
      >
        <el-tabs tab-position="left">
          <!-- Основні властивості -->
          <el-tab-pane label="Основні">
            <el-form-item label="Назва товару" prop="name">
              <el-input v-model="controls.name"></el-input>
            </el-form-item>
            <el-form-item label="Активний" prop="active">
              <el-switch v-model="controls.active"></el-switch>
            </el-form-item>
            <el-form-item label="Фотографія">
              <el-upload
                action="#"
                drag
                :file-list="fileList"
                :on-change="handleImageChange"
                :on-remove="handleImageRemove"
                :auto-upload="false"
                :limit="1"
              >
                <i class="el-icon-upload"></i>
                <div class="el-upload__text">Перетягніть фотографію сюди або <em>оберіть вручну</em></div>
                <div class="el-upload__tip" slot="tip">jpg/png файли з розміром не більше 500 кб</div>
              </el-upload>
            </el-form-item>
          </el-tab-pane>
          <el-form-item>
            <div v-if="ifCreate">
              <el-button type="primary" native-type="submit" @click.native.prevent="create(true)">Створити товар
              </el-button>
            </div>
            <div v-else>
              <el-button type="primary" native-type="submit" @click.native.prevent="update">Зберегти</el-button>
            </div>
          </el-form-item>
        </el-tabs>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  middleware: ['admin-auth'],
  head() {
    return {
      title: this.ifCreate ? 'Створення нового товару' : this.product.name
    }
  },
  async asyncData({store, params}) {
    if (params.id !== 'create') {
      const product = await store.dispatch('product/fetchById', params.id)
      return {product}
    }
  },
  data() {
    return {
      ifCreate: this.$route.params.id === 'create',
      getImage: false,
      loading: false,
      image: null,
      fileList: [],
      controls: {
        name: '',
        active: true,
      },
      rules: {
        name: [
          {required: true, message: 'Назва товару не можу бути пустою', trigger: 'blur'}
        ]
      }
    }
  },
  mounted() {

    if (this.$route.params.id !== 'create') {
      for (let key in this.product) {
        if (key !== 'imageUrl') {
          this.controls[key] = this.product[key]
        } else {
          this.fileList.push({name: this.product[key], url: this.product[key]})
        }
      }
    }
  },
  methods: {
    handleImageChange(file) {
      this.image = file.raw
      this.getImage = true
    },
    handleImageRemove() {
      this.image = null
      this.getImage = false
    },
    create() {
      this.$refs.controls.validate(async valid => {
        if (valid) {
          this.loading = true

          const formData = {}

          for (let prop in this.controls) {
            formData[prop] = this.controls[prop]
          }

          if (this.getImage) {
            formData.image = this.image
          }

          try {
            await this.$store.dispatch('product/create', formData)
            this.$message.success('Товар створено')
            this.$router.push('/catalog/products/')
          } catch (e) {
            this.$message.error(e)
          } finally {
            this.loading = false
          }
        } else {
          this.$message.warning("Ви не заповнили всі обов'язкові поля")
        }
      })
    },
    update() {
      this.$refs.controls.validate(async valid => {
        if (valid) {
          this.loading = true

          const formData = {
            id: this.product._id
          }

          for (let prop in this.controls) {
            formData[prop] = this.controls[prop]
          }

          if (this.getImage) {
            formData.image = this.image
          }

          try {
            await this.$store.dispatch('product/update', formData)
            this.$message.success('Товар оновлено')
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
.content {
  max-width: 800px;
  margin: 0 auto;
}
</style>
