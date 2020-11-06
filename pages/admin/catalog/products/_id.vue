<template>
  <PageContainer :title="ifCreate ? 'Створення нового товару' : this.product.name">
    <template v-slot:header>

    </template>
    <template v-slot:content>
      <el-form
        ref="product"
        :model="product"
        :rules="rules"
        label-width="150px"
        enctype="multipart/form-data"
      >
        <el-tabs tab-position="top">
          <!-- MAIN TAB -->
          <el-tab-pane label="Основні властивості">
            <el-form-item label="Назва товару" prop="name">
              <el-input v-model="product.name"></el-input>
            </el-form-item>
            <el-form-item label="Активний" prop="active">
              <el-switch v-model="product.active"></el-switch>
            </el-form-item>
            <el-form-item label="Категорія" prop="category">
              <CategorySelect :active='product.category' @category="handlerOnCategoryChange"/>
            </el-form-item>
            <el-form-item label="Фотографія">
              <DragAndDropFile v-on:update="updateImages" :images-url="product.images"></DragAndDropFile>
            </el-form-item>
          </el-tab-pane>
          <!-- PROPERTIES TAB -->
          <el-tab-pane v-if="propertiesFields.length > 0" label="Характеристики">
            <el-form-item v-for="property in propertiesFields" :label="property.name" :key="property._id">
              <div v-if="property.type === 'list'">
                <el-select v-model="property.value">
                  <el-option
                    v-for="option in property.values"
                    :key="option.id"
                    :label="option.name"
                    :value="option.id"
                  >
                  </el-option>
                </el-select>
              </div>
              <div v-else-if="property.type === 'string'">
                <el-input v-model="property.value"></el-input>
              </div>

            </el-form-item>
          </el-tab-pane>
        </el-tabs>
      </el-form>
    </template>
    <template v-slot:footer>
      <div v-if="ifCreate">
        <el-button @click="createProduct(true)" plain>Створити та продовжити</el-button>
        <el-button type="primary" @click="createProduct(false)">Створити</el-button>
      </div>
      <div v-else>
        <el-button @click="updateProduct(true)" plain>Зберегти та продовжити</el-button>
        <el-button type="primary" @click="updateProduct(false)">Зберегти</el-button>
      </div>
    </template>
  </PageContainer>
</template>

<script>
import PageContainer from "@/components/admin/PageContainer";
import CategorySelect from "@/components/admin/Products/CategorySelect";
import DragAndDropFile from "@/components/admin/UI/DragAndDropFile";

export default {
  layout: 'admin',
  middleware: ['admin-auth'],
  components: {DragAndDropFile, CategorySelect, PageContainer},
  head() {
    return {
      title: this.ifCreate ? 'Створення нового товару' : this.product.name
    }
  },
  data() {
    return {
      ifCreate: this.$route.params.id === 'create',
      getImage: false,
      loading: false,
      fileList: [],
      product: {
        name: '',
        active: true,
        category: 'root',
        properties: [],
        images: []
      },
      propertiesFields: [],
      rules: {
        name: [
          {required: true, message: 'Назва товару не можу бути пустою', trigger: 'blur'}
        ]
      }
    }
  },
  async asyncData({store, params}) {
    if (params.id !== 'create') {
      const product = await store.dispatch('product/fetchById', params.id)
      console.log(typeof product.properties[0])
      return {product}
    }
  },
  mounted() {
    if (this.$route.params.id !== 'create') {

      this.fetchPropertiesFields(this.product.category)

      for (let key in this.product) {
        if (key !== 'imageUrl') {
          this.product[key] = this.product[key]
        } else {
          this.fileList.push({name: this.product[key], url: this.product[key]})
        }
      }
    }
  },
  methods: {
    async fetchPropertiesFields(categoryId) {
      if (categoryId !== 'root') {
        this.propertiesFields = await this.$store.dispatch('category/fetchCategoryPropertiesById', categoryId)
      }
    },
    updateImages(fileList) {
      fileList.forEach(file => {
        this.product.images.push(file.image)
      })
    },
    handlerOnCategoryChange(categoryId) {
      this.product.category = categoryId
      this.fetchPropertiesFields(categoryId)
    },
    catchPropertiesFromFields() {
      let propertiesValues = []

      this.propertiesFields.forEach(prop => {
        if (prop.hasOwnProperty('value')) {
          const $set = {'_id': prop._id, 'value': prop.value}
          propertiesValues.push($set)
        }
      })

      return propertiesValues
    },
    createProduct(redirect) {
      this.$refs.product.validate(async valid => {
        if (valid) {
          this.product.properties = this.catchPropertiesFromFields()

          const formData = {
            name: this.product.name,
            active: this.product.active,
            category: this.product.category,
            properties: this.product.properties,
            images: this.product.images
          }

          try {
            this.loading = true
            await this.$store.dispatch('product/create', formData)
            this.$message.success('Товар створено')

            // if (redirect) {
            //   this.$router.push('../')
            // } else {
            //   this.$router.push('../' + this.product._id)
            // }
          } catch (e) {
            this.$message.error(e)
          } finally {
            this.loading = false
          }
        } else {
          this.$message.warning("Ви не заповнили всі необхідні поля")
        }
      })
    },
    updateProduct(redirect) {
      this.$refs.product.validate(async valid => {
        if (valid) {
          this.loading = true
          this.product.properties = this.catchPropertiesFromFields()

          const formData = {
            id: this.product._id,
          }

          for (let prop in this.product) {
            formData[prop] = this.product[prop]
          }


          console.log(this.product)

          try {
            await this.$store.dispatch('product/update', formData)
            this.$message.success('Товар оновлено')
            this.loading = false
            if (redirect) this.$router.push('../')
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
</style>
