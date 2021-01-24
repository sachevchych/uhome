export const actions = {
  // Admin actions
  async fetchProducts({commit}) {
    try {
      return await this.$axios.$get('/api/products/admin')
    } catch (e) {
      commit('setError', e, {root: true})
      throw e
    }
  },
  async publicFetchProducts({commit}) {
    try {
      return await this.$axios.$get('/api/products/')
    } catch (e) {
      commit('setError', e, {root: true})
      throw e
    }
  },
  async fetchById({commit}, id) {
    try {
      return await this.$axios.$get(`/api/products/admin/${id}`)
    } catch (e) {
      commit('setError', e, {root: true})
      throw e
    }
  },
  async create({commit}, data) {
    try {
      return await this.$axios.$post('/api/products/admin/create', data)
    } catch (e) {
      commit('setError', e, {root: true})
      throw e
    }
  },
  async update({commit}, data) {
    try {
      return await this.$axios.$put(`/api/products/admin/${data._id}`, data)
    } catch (e) {
      commit('setError', e, {root: true})
      throw e
    }
  },
  async remove({commit}, id) {
    try {
      return await this.$axios.$delete(`/api/products/admin/${id}`)
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
  async removeImage({commit}, public_id) {
    try {
      return await this.$axios.$delete(`/api/products/image/${public_id}`)
    } catch (e) {
      commit('setError', e, {root: true})
      throw e
    }
  },
  // Public actions
  async publicFetchByCategory({commit}, categoryId) {
    try {
      return await this.$axios.$get(`/api/products/?category=${categoryId}`)
    } catch (e) {
      commit('setError', e, {root: true})
      throw e
    }
  },
  async publicFetchByUrl({commit}, url) {
    try {
      return await this.$axios.$get(`/api/products/url/${url}`)
    } catch (e) {
      commit('setError', e, {root: true})
      throw e
    }
  }
}
