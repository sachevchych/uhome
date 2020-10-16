export const actions = {
  async create({commit}, data) {
    try {
      return await this.$axios.$post('/api/property/', data)
    } catch (e) {
      commit('setError', e, {root: true})
      throw e
    }
  },
  async fetchProperties({commit}) {
    try {
      return await this.$axios.$get('/api/property/')
    } catch (e) {
      commit('setError', e, {root: true})
    }
  },
  async remove({commit}, id) {
    try {
      console.log(id)
      return await this.$axios.$delete('/api/property/' + id)
    } catch (e) {
      commit('setError', e, {root: true})
      throw e
    }
  }
}
