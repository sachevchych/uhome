<template>
  <PageContainer :title="ifCreate ? 'Створення нового товару' : this.product.name">
    <template v-slot:header>

    </template>
    <template v-slot:content>
      <el-form
        ref="product"
        :model="product"
        :rules="rules"
        label-width="200px"
        v-loading="loading.page"
      >
        <el-tabs tab-position="top">
          <!-- MAIN TAB -->
          <el-tab-pane label="Основні властивості">
            <el-form-item label="Назва" prop="name">
              <el-input v-model="product.name" placeholder="Опис товару" @input="handlerOnNameChange"></el-input>
            </el-form-item>
            <el-form-item label="Бренд" prop="brand">
              <el-select v-model="product.brand" filterable placeholder="Бренд" @change="handlerOnNameChange">
                <el-option v-for="brand in brands" :key="brand._id" :label="brand.name" :value="brand._id"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="Модель" prop="model">
              <el-input v-model="product.model" placeholder="Модель" @input="handlerOnNameChange"></el-input>
            </el-form-item>
            <el-form-item label="Символьний код" prop="url">
              <el-input v-model="product.url" @input="translitToggle(false)">
                <i slot="suffix" v-if="isTranslitLock" @click="translitToggle(false)"
                   class="el-input__icon el-icon-lock input-lock"></i>
                <i slot="suffix" v-else @click="translitToggle(true)"
                   class="el-input__icon el-icon-unlock input-unlock"></i>
              </el-input>
            </el-form-item>
            <el-form-item label="Ціна" prop="price">
              <el-input v-model="product.price"></el-input>
            </el-form-item>
            <el-form-item label="Активний" prop="active">
              <el-switch v-model="product.active"></el-switch>
            </el-form-item>
            <el-form-item label="Категорія" prop="category">
              <el-select v-model="product.category" filterable @change="fetchCategoryModel"
                         placeholder="Оберіть категорію">
                <el-option v-for="category in categories" :key="category._id" :label="category.name"
                           :value="category._id"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="Фотографія">
              <DragAndDropFile :file-list="product.images" v-on:dataChange="product.images = $event"></DragAndDropFile>
            </el-form-item>
          </el-tab-pane>
          <!-- PROPERTIES TAB -->
          <el-tab-pane v-if="propertiesModel.length" label="Характеристики">
            <div v-for="property in propertiesModel">
              <div v-if="property.type === 'divider'" class="divider">
                {{ property.name }}
              </div>
              <div v-else>
                <el-form-item :label="property.name" :key="property._id">
                  <div v-if="property.type === 'list'">
                    <el-select v-model="product.properties[property._id]" :multiple="property.multiple">
                      <el-option
                        v-for="option in property.options"
                        :key="option.id"
                        :label="option.name"
                        :value="option.id"
                      >
                      </el-option>
                    </el-select>
                  </div>
                  <div v-else-if="property.type === 'string'">
                    <el-input v-model="product.properties[property._id]"></el-input>
                  </div>
                </el-form-item>
              </div>
            </div>
          </el-tab-pane>
        </el-tabs>
      </el-form>
    </template>
    <template v-slot:footer>
      <div v-if="ifCreate">
        <el-button type="primary" @click="createProduct(false)" :loading="loading.action">Створити</el-button>
      </div>
      <div v-else>
        <el-button type="primary" @click="updateProduct(false)" :loading="loading.action">Зберегти</el-button>
      </div>
    </template>
  </PageContainer>
</template>

<script>
import PageContainer from "@/components/admin/PageContainer";
import DragAndDropFile from "@/components/admin/UI/DragAndDropFile";
import cyrillicToTranslit from "cyrillic-to-translit-js";

export default {
  layout: 'admin',
  middleware: ['admin-auth'],
  components: {DragAndDropFile, PageContainer},
  head() {
    return {
      title: this.ifCreate ? 'Створення нового товару' : `Редагування товару ${this.product.model}`
    }
  },
  data() {
    return {
      ifCreate: this.$route.params.id === 'create',
      loading: {
        page: false,
        action: false
      },
      product: {
        name: '',
        brand: '',
        model: '',
        url: '',
        price: 0,
        active: true,
        category: 'root',
        properties: {},
        images: []
      },
      propertiesModel: [],
      isTranslitLock: this.$route.params.id === 'create',
      rules: {
        name: {required: true, message: 'Назва товару не можу бути пустою', trigger: 'blur'},
        brand: {required: true, message: 'Потрібно обрати бренд товару', trigger: 'blur'},
        model: {required: true, message: 'Модель товару мусить бути заповнена', trigger: 'blur'},
        url: {
          validator: (rule, value, callback) => {
            if (!this.product.url) {
              callback(new Error('Символьний код повинен бути заповнений'))
            } else {
              callback()
            }
          },
          required: true,
          trigger: 'change'
        }

      }
    }
  },
  async asyncData({store, route}) {
    if (route.params.id !== 'create') {
      const product = await store.dispatch('product/fetchById', route.params.id)
      if (!product.properties) product.properties = {}
      const propertiesModel = await store.dispatch('category/fetchCategoryPropertiesById', product.category)
      return {product, propertiesModel}
    } else {
      return {
        product: {
          name: '',
          brand: '',
          model: '',
          url: '',
          price: 0,
          active: true,
          category: 'root',
          properties: {},
          images: []
        },
        propertiesModel: [],
      }
    }
  },
  computed: {
    categories() {
      return [{_id: 'root', name: 'Корінева категорія'}, ...this.$store.state.category.categories]
    },
    brands() {
      return this.$store.state.brand.brands
    }
  },
  methods: {
    async fetchCategoryModel(id) {
      this.propertiesModel = await this.$store.dispatch('category/fetchCategoryPropertiesById', id)
    },
    createProduct() {
      this.$refs.product.validate(async valid => {
        if (valid) {
          try {
            this.loading.action = true
            const product = await this.$store.dispatch('product/create', this.product)
            this.$message.success('Товар створено')
            await this.$router.push('../' + product._id)
          } catch (e) {
            this.$message.error(e)
          } finally {
            this.loading.action = false
          }
        } else {
          this.$message.warning("Ви не заповнили всі необхідні поля")
        }
      })
    },
    updateProduct() {
      this.$refs.product.validate(async valid => {
        if (valid) {
          try {
            this.loading.action = true
            await this.$store.dispatch('product/update', this.product)
            this.$message.success('Товар оновлено')
          } catch (e) {
            this.$message.error(`Не вдалося зберегти товар. Помилка: ${e}`)
          } finally {
            this.loading.action = false
          }
        } else {
          this.$message.warning("Ви не заповнили всі необхідні поля")
        }
      })
    },
    handlerOnNameChange() {
      if (this.isTranslitLock) {
        let name = this.product.name.toLocaleLowerCase().trim()
        let model = this.product.model.toLocaleLowerCase().trim()
        let brand = ''

        if (this.product.brand) {
          brand = this.brands.find(brand => brand._id === this.product.brand).name.toLowerCase().trim()
        }

        this.product.url = cyrillicToTranslit({preset: "uk"}).transform(`${name} ${brand} ${model}`, '-')
      }
    },
    translitToggle(state) {
      this.isTranslitLock = state
      if (state) this.handlerOnNameChange()
    }
  }
}
</script>

<style lang="scss" scoped>
.divider {
  font-size: 14px;
  color: #4c4c4c;
  line-height: 40px;
  border-bottom: 1px solid $main-color;
  margin-bottom: 1rem;
}

.input-lock {
  cursor: pointer;
  color: $main-color;
}

.input-unlock {
  cursor: pointer;
}
</style>
