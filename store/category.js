export const state = () => ({
  categories: []
})

export const mutations = {
  setCategories(state, categories) {
    state.categories = categories
  },
}

export const getters = {
  categoriesTree: state => {
    return parseCategories(state.categories)

    function parseCategories(categories, parentID = 'root') {
      const tree = []
      categories.forEach(category => {
        if (category.parent === parentID) {
          const parentCategory = {...category}
          parentCategory.children = parseCategories(categories, parentCategory._id)
          tree.push(parentCategory)
        }
      })
      return tree
    }
  }
}

export const actions = {
  async create({commit}, data) {
    try {
      return await this.$axios.$post('/api/category/admin', data)
    } catch (e) {
      commit('setError', e, {root: true})
      throw e
    }
  },
  async update({commit}, data) {
    try {
      return await this.$axios.$put(`/api/category/admin/${data.id}`, data)
    } catch (e) {
      commit('setError', e, {root: true})
      throw e
    }
  },
  async fetchCategories({commit}) {
    try {
      return await this.$axios.$get('/api/category/admin')
    } catch (e) {
      commit('setError', e, {root: true})
    }
  },
  async publicFetchCategories({commit}) {
    try {
      const categories = await this.$axios.$get('/api/category/')
      commit('setCategories', categories)
    } catch (e) {
      commit('setError', e, {root: true})
    }
  },
  async fetchById({commit}, id) {
    try {
      return await this.$axios.$get(`/api/category/admin/${id}`)
    } catch (e) {
      commit('setError', e, {root: true})
      throw e
    }
  },
  async publicFetchById({commit}, id) {
    try {
      return await this.$axios.$get(`/api/category/${id}`)
    } catch (e) {
      commit('setError', e, {root: true})
      throw e
    }
  },
  async fetchCategoryPropertiesById({dispatch, commit}, id) {
    if (id === 'root') return []

    try {
      const category = await this.$axios.$get(`/api/category/admin/${id}`)
      const propertiesList = []

      for (let property of category.properties) {
        const fullProperty = await dispatch('property/fetchById', property._id, {root: true})

        propertiesList.push({...property, ...fullProperty})
      }

      return propertiesList
    } catch (e) {
      commit('setError', e, {root: true})
      throw e
    }
  },
  async fetchCategoriesTree({commit}) {
    try {
      const categories = await this.$axios.$get('/api/category/admin')
      return createCategoriesTree(categories)
    } catch (e) {
      commit('setError', e, {root: true})
    }
  },
  async remove({commit}, id) {
    try {
      return await this.$axios.$delete(`/api/category/admin/${id}`)
    } catch (e) {
      commit('setError', e, {root: true})
      throw e
    }
  }
}

function createCategoriesTree(categories, root = 'root') {
  const list = categories.slice()
  const tree = []

  list.forEach(category1 => {
    if (category1.parent === 'root') {
      const obj1 = {...category1}
      obj1.children = []

      list.forEach(category2 => {
        if (category2.parent === obj1._id) {
          const obj2 = {...category2}
          obj2.children = []

          list.forEach(category3 => {
            if (category3.parent === obj2._id) {
              const obj3 = {...category3}

              obj2.children.push(obj3)
            }
          })

          obj1.children.push(obj2)
        }
      })

      tree.push(obj1)
    }
  })

  return tree
}




