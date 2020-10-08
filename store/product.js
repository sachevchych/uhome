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
    const fd = formDataCreate(data)

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
