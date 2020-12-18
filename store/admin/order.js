export const state = () => ({
  order: []
})

export const mutations = {
  setOrder(store, order) {
    store.order = order
  }
}

export const actions = {
  async fetchAll({commit}) {
    try {
      return await this.$axios.$get('/api/order/')
    } catch (e) {
      commit('setError', e, {root: true})
      throw e
    }
  },
  async fetchOne({commit}, id) {
    try {
      const order = await this.$axios.$get(`/api/order/admin/${id}`)
      commit('setOrder', order)
    } catch (e) {
      commit('setError', e, {root: true})
      throw e
    }
  }
}


