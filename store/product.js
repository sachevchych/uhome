export const actions = {
  async fetchProducts({commit}) {
    try {
      return await this.$axios.$get('/api/products')
    } catch (e) {
      commit('setError', e, {root: true})
      throw e
    }
  },
  async fetchById({commit}, id) {
    try {
      return await this.$axios.$get(`/api/products/${id}`)
    } catch (e) {
      commit('setError', e, {root: true})
      throw e
    }

  },
  async create({commit}, data) {
    try {
      return await this.$axios.$post('/api/products/create', data)
    } catch (e) {
      commit('setError', e, {root: true})
      throw e
    }
  },
  async update({commit}, data) {
    try {
      return await this.$axios.$put(`/api/products/${data._id}`, data)
    } catch (e) {
      commit('setError', e, {root: true})
      throw e
    }
  },
  async remove({commit}, id) {
    try {
      return await this.$axios.$delete(`/api/products/${id}`)
    } catch (e) {
      commit('setError', e, {root: true})
      throw e
    }
  },
  async uploadImage({commit}, file) {
    try {
      const fd = new FormData()
      fd.append('image', file, file.name)

      return await this.$axios.$post('/api/products/image', fd)
    } catch (e) {
      commit('setError', e, {root: true})
      throw e
    }
  },
  async removeImage({commit}, fileName) {
    try {
      return await this.$axios.$delete(`/api/products/image/${fileName}`)
    } catch (e) {
      commit('setError', e, {root: true})
      throw e
    }
  }
}
