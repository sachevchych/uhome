export const actions = {
  async create({commit}, data) {
    try {
      return await this.$axios.$post('/api/review/', data)
    } catch (e) {
      commit('setError', e, {root: true})
      throw e
    }
  },
  async fetchOne({commit}, id) {
    try {
      return await this.$axios.$get(`/api/review/${id}`)
    } catch (e) {
      commit('setError', e, {root: true})
      throw e
    }
  }
}


