export const actions = {
  async create({commit}, data) {
    try {
      return await this.$axios.$post('/api/category/', {
        name: data.name,
        active: data.active,
        parent: data.parent,
        properties: data.properties
      })
    } catch (e) {
      commit('setError', e, {root: true})
      throw e
    }
  },
  async update({commit}, data) {
    try {
      return await this.$axios.$put(`/api/category/${data.id}`, {
        _id: data._id,
        name: data.name,
        active: data.active,
        parent: data.parent,
        properties: data.properties
      })
    } catch (e) {
      commit('setError', e, {root: true})
      throw e
    }
  },
  async fetchById({commit}, id) {
    try {
      return await this.$axios.$get(`/api/category/${id}`)
    } catch (e) {
      commit('setError', e, {root: true})
      throw e
    }
  },
  async fetchCategories({commit}) {
    try {
      return await this.$axios.$get('/api/category/')
    } catch (e) {
      commit('setError', e, {root: true})
    }
  },
  async fetchCategoriesTree({commit}) {
    try {
      const categories = await this.$axios.$get('/api/category/')
      return createCategoriesTree(categories)
    } catch (e) {
      commit('setError', e, {root: true})
    }
  },
  async remove({commit}, id) {
    try {
      return await this.$axios.$delete(`/api/category/${id}`)
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
      const obj1 = { ...category1 }
      obj1.children = []

      list.forEach(category2 => {
        if (category2.parent === obj1._id) {
          const obj2 = { ...category2}
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




