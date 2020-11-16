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

    const fd = new FormData()
    fd.append('name', data.name )
    fd.append('active', data.active )
    fd.append('category', data.category )
    fd.append('properties', data.properties )

    data.images.forEach(file => {
      fd.append('images', file, file.name)
    })

    try {
      return await this.$axios.$post('/api/products/create', fd)
    } catch (e) {
      commit('setError', e, {root: true})
      throw e
    }
  },
  async update({commit}, data) {
    const fd = formDataCreate(data)

    try {
      return await this.$axios.$put(`/api/products/${data.id}`, fd)
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
  async removeImage({commit}, imageUrl) {
    try {
      return await this.$axios.$delete('/api/products/image', imageUrl)
    } catch (e) {
      commit('setError', e, {root: true})
      throw e
    }
  }
}

function formDataCreate(data) {
  const fd = new FormData()

  const keys = Object.keys(data)
  for (let i = 0; i < keys.length; i++) {
    if (keys[i] === "image") {
      fd.append(keys[i], data.image, data.image.name);
    } else {
      fd.append(keys[i], data[keys[i]])
    }
  }
  return fd
}
