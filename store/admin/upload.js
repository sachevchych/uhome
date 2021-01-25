export const actions = {
  async uploadProductImage({commit}, file) {
    try {
      const fd = new FormData()
      fd.append('image', file, file.name)

      return await this.$axios.$post('/api/upload/product-images', fd)
    } catch (e) {
      commit('setError', e, {root: true})
      throw e
    }
  },
  async removeProductImage({commit}, fileName) {
    try {
      return await this.$axios.$delete(`/api/upload/image/${fileName}`)
    } catch (e) {
      commit('setError', e, {root: true})
      throw e
    }
  },
}
