export const state = () => ({
  product: {}
})

export const getters = {
  rating: state => {
    const rating = {
      stars: {
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0
      },
      total: 0,
      amount: 0
    }

    state.product.reviews.forEach(review => {
      rating.total = rating.total + review.rating
      rating.amount = ++rating.amount
      rating.stars[review.rating] = ++rating.stars[review.rating]
    })

    return rating
  }
}

export const mutations = {
  setProduct(state, product) {
    state.product = product
  },
  pushReview(state, review) {
    state.product.reviews.push(review)
  }
}

export const actions = {
  async fetchOne({commit}, url) {
    try {
      commit('setProduct', await this.$axios.$get(`/api/products/url/${url}`))
    } catch (e) {
      commit('setError', e, {root: true})
      throw e
    }
  },
  async fetchOneAndReturn({commit}, payload) {
    try {
      if (payload.hasOwnProperty('id')) {
        return await this.$axios.$get(`/api/products/${payload.id}`)
      } else if (payload.hasOwnProperty('url')) {
        return await this.$axios.$get(`/api/products/url${payload.url}`)
      }
    } catch (e) {
      commit('setError', e, {root: true})
      throw e
    }
  },
  pushReview({commit}, review) {
    commit('pushReview', review)
  }
}
