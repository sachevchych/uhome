export const actions = {
  async create({commit}, data) {
    try {
      return await this.$axios.$post('/api/order/', data)
    } catch (e) {
      commit('setError', e, {root: true})
      throw e
    }
  }
}


