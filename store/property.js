export const actions = {
  async create({commit}, data) {
    try {
      return await this.$axios.$post('/api/property/', data)
    } catch (e) {
      commit('setError', e, {root: true})
      throw e
    }
  },
  async update({commit}, data) {
    try {
       return await this.$axios.$put(`/api/property/${data.id}`, data)
    } catch (e) {
      commit('setError', e, {root: true})
      throw e
    }
  },
  async fetchById({commit}, id) {
    try {
      return await this.$axios.$get(`/api/property/${id}`)
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
      return await this.$axios.$delete('/api/property/' + id)
    } catch (e) {
      commit('setError', e, {root: true})
      throw e
    }
  }
}


