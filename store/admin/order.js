export const state = () => ({
  statuses: [
    {label: 'Нове замовлення', type: 'primary', value: 0},
    {label: 'В обробці', type: 'info', value: 1},
    {label: 'Готується до відправки', type: 'warning', value: 2},
    {label: 'Відправлено', type: 'danger', value: 3},
    {label: 'Отримано', type: 'success', value: 4},
  ]
})

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
      return await this.$axios.$get(`/api/order/admin/${id}`)
    } catch (e) {
      commit('setError', e, {root: true})
      throw e
    }
  },
  async update({commit, state}, order) {
    try {
      return await this.$axios.$put(`/api/order/admin/${order._id}`, order)
    } catch (e) {
      commit('setError', e, {root: true})
      throw e
    }
  }
}


