export const actions = {
  async create({commit}, data) {
    try {
      return await this.$axios.$post('/api/brand/', data)
    } catch (e) {
      commit('setError', e, {root: true})
      throw e
    }
  },
  async update({commit}, data) {
    try {
      return await this.$axios.$put(`/api/brand/${data.id}`, data)
    } catch (e) {
      commit('setError', e, {root: true})
      throw e
    }
  },
  async fetchById({commit}, id) {
    try {
      return await this.$axios.$get(`/api/brand/${id}`)
    } catch (e) {
      commit('setError', e, {root: true})
      throw e
    }
  },
  async fetchBrands({commit}) {
    try {
      return await this.$axios.$get('/api/brand/')
    } catch (e) {
      commit('setError', e, {root: true})
    }
  },
  async remove({commit}, id) {
    try {
      return await this.$axios.$delete(`/api/brand/${id}`)
    } catch (e) {
      commit('setError', e, {root: true})
      throw e
    }
  }
}


