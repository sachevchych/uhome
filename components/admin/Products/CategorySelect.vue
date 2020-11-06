<template>
  <el-select v-model="value" @change="handlerChange(value)" placeholder="Оберіть категорію">
    <el-option
      v-for="category in categories"
      :key="category._id"
      :label="category.name"
      :value="category._id"
    >
    </el-option>
  </el-select>
</template>

<script>
export default {
  name: "CategorySelect",
  props: {
    active: String
  },
  data() {
    return {
      value: this.active,
      categories: [
        {_id: 'root', name: 'Корінева категорія'}
      ]
    }
  },
  mounted() {
    this.fetchCategories()
  },
  methods: {
    handlerChange(value) {
      this.$emit('category', value)
    },
    async fetchCategories() {
      try {
        const categories = await this.$store.dispatch('category/fetchCategoriesTree')

        this.categories = this.categories.concat(this.formatCategoriesList(categories))
      } catch (e) {
        this.$message.error(`Не вдалося завантажити список категорій. Помилка: ${e}`)
      }
    },
    formatCategoriesList(categories, mark = '. ') {
      let formattedCategories = []

      categories.forEach(category => {
        formattedCategories.push({_id: category._id, name: mark + category.name})

        if (Array.isArray(category.children) && category.children.length > 0) {
          let result = this.formatCategoriesList(category.children, mark + '. ')
          formattedCategories = formattedCategories.concat(result)
        }
      })

      return formattedCategories
    }
  }
}
</script>

<style scoped>

</style>
