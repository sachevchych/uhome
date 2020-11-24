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
            <el-form-item label="Назва товару" prop="name">
              <el-input v-model="product.name"></el-input>
            </el-form-item>
            <el-form-item label="Активний" prop="active">
              <el-switch v-model="product.active"></el-switch>
            </el-form-item>
            <el-form-item label="Категорія" prop="category">
              <CategorySelect :active='product.category' @category="onCategoryChange"/>
            </el-form-item>
            <el-form-item label="Фотографія">
              <DragAndDropFile :file-list="product.images" v-on:dataChange="product.images = $event"></DragAndDropFile>
            </el-form-item>
          </el-tab-pane>
          <!-- PROPERTIES TAB -->
          <el-tab-pane v-if="propertiesModel.length > 0" label="Характеристики">
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
      loading: {
        page: false,
        action: false
      },
      product: {
        name: '',
        active: true,
        category: 'root',
        properties: {},
        images: []
      },
      propertiesModel: [],
      rules: {
        name: [
          {required: true, message: 'Назва товару не можу бути пустою', trigger: 'blur'}
        ]
      }
    }
  },
  async asyncData({store, route}) {
    if (route.params.id !== 'create') {
      const product = await store.dispatch('product/fetchById', route.params.id)
      const propertiesModel = await store.dispatch('category/fetchCategoryPropertiesById', product.category)
      return {product, propertiesModel}
    } else {
      return {
        product: {
          name: '',
          active: true,
          category: 'root',
          properties: {},
          images: []
        },
        propertiesModel: [],
      }
    }
  },
  methods: {
    async onCategoryChange(categoryId) {
      this.product.category = categoryId
      this.propertiesModel = await this.fetchCategoryProperties(categoryId)

    },
    async fetchCategoryProperties(categoryId) {
      if (categoryId !== 'root') {
        return await this.$store.dispatch('category/fetchCategoryPropertiesById', categoryId)
      } else {
        return []
      }
    },
    createProduct() {
      this.$refs.product.validate(async valid => {
        if (valid) {
          try {
            this.loading.action = true
            const result = await this.$store.dispatch('product/create', this.product)
            this.$message.success('Товар створено')
            await this.$router.push('../' + result._id)
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
        }
      })
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
</style>
