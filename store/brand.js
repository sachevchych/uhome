export const state = () => ({
  brands: []
})

export const mutations = {
  setBrands(state, brands) {
    state.brands = brands
  },
}


export const actions = {
  async create({commit, dispatch}, data) {
    try {
      const brand = await this.$axios.$post('/api/brand/', data)
      dispatch('initBrands')
      return brand
    } catch (e) {
      commit('setError', e, {root: true})
      throw e
    }
  },
  async update({commit, dispatch}, data) {
    try {
      const brand = await this.$axios.$put(`/api/brand/${data.id}`, data)
      dispatch('initBrands')
      return brand
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
  async initBrands({commit}) {
    try {
      commit('setBrands', await this.$axios.$get('/api/brand/'))
    } catch (e) {
      commit('setError', e, {root: true})
    }
  },
  async fetchBrands({commit}) {
    try {
      return await this.$axios.$get('/api/brand/')
    } catch (e) {
      commit('setError', e, {root: true})
    }
  },
  async remove({commit, dispatch}, id) {
    try {
      const result = await this.$axios.$delete(`/api/brand/${id}`)
      dispatch('initBrands')
      return result
    } catch (e) {
      commit('setError', e, {root: true})
      throw e
    }
  }
}


