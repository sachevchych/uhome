export const state = () => ({
  tree: []
})

export const mutations = {
  addTree(state, tree) {
    state.tree = tree
  },
}

export const actions = {
  async fetchCategoriesTree({commit, dispatch, state}) {
    if (state.tree.length > 0) {
      return state.tree
    } else {
      const tree = await dispatch('createCategoriesTree')
      console.log('tree', tree)
      commit('addTree', tree)
    }
  },
  async createCategoriesTree({commit, dispatch}, categoryId = 'root') {
    try {
      const tree = await dispatch('fetchSubcategories', categoryId)
      tree.map(async category => {
        category.children = await dispatch('createCategoriesTree', category._id)
      })
      return tree
    } catch (e) {
      commit('setError', e, {root: true})
    }
  },
  async fetchSubcategories({commit}, categoryId) {
    try {
      return await this.$axios.$get(`/api/category/parent/${categoryId}`)
    } catch (e) {
      commit('setError', e, {root: true})
    }
  }
}




