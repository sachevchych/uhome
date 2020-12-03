<template>
  <div>
    <PageBar :title="category.name" theme="dark" class="page-bar"/>
    <div class="container-xl main pb-5">
      <div class="row">
        <aside class="col d-none d-md-block">
          <div class="sidebar mr-3 mr-md-0">

          </div>
        </aside>
        <section class="content col-lg-8 col-md-7 col-sm-12">

          <div class="toolbar d-flex align-items-center mb-5 mt-2">
            <div class="sorting d-flex align-items-center">
              <label class="mr-2">Сортування:</label>
              <el-select v-model="sorting" placeholder="оберіть сортування" id="sorting">
                <el-option label="за популярністю" value="popularity"></el-option>
                <el-option label="за ціною" value="price"></el-option>
                <el-option label="новинки спочатку" value="new"></el-option>
              </el-select>
            </div>
          </div>
          <div class="product-grid">
            <div class="row row-cols-lg-3 row-cols-2">
              <div class="col px-2 mb-4" v-for="product in products">
                <ProductCard :product="product"/>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import PageBar from "~/components/client/PageBar";
import ProductCard from "~/components/client/Product/ProductCard";

export default {
  components: {ProductCard, PageBar},
  data() {
    return {
      category: {},
      products: [],
      sorting: 'popularity',
    }
  },
  validate({params, store}) {
    const path = params.pathMatch.split('/').filter(directory => directory !== '')

    function checkPath(categories, path, index = 0) {
      let valid = false
      categories.forEach(category => {
        if (category.url === path[index]) {
          if (path.length > index + 1) {
            valid = checkPath(category.children, path, index + 1)
          } else {
            valid = true
          }
        }
      })
      return valid
    }

    return checkPath(store.getters['category/categoriesTree'], path)
  },
  async asyncData({store, route}) {
    const path = route.params.pathMatch.split('/').filter(directory => directory !== '')
    const category = store.state.category.categories.find(category => category.url === path[path.length-1])
    return {category}
  },
  async mounted() {
    this.products = await this.$store.dispatch('product/publicFetchByCategory', this.category._id)
  }
}
</script>

<style lang="scss" scoped>
.page-bar {
  padding-bottom: 100px;
}

.main {
  margin-top: -5rem;
}

.sidebar {
  height: 400px;
  background-color: #ffffff;
  box-shadow: 0 0.3rem 1.525rem -0.375rem rgba(0, 0, 0, 0.1);
  border-radius: .5rem;
}

.content {

}

.product-grid {

}

.toolbar {
  font-size: .9rem;
  color: rgba(255, 255, 255, 0.6);
}

</style>
