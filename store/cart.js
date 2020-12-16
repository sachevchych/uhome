import Cookie from 'cookie'
import Cookies from 'js-cookie'

export const state = () => ({
  list: []
})

export const getters = {
  totalPrice(state) {
    let totalPrice = 0
    state.list.forEach(item => {
      totalPrice = totalPrice + item.product.price * item.amount
    })

    return totalPrice
  }
}

export const mutations = {
  listAdd(state, {product, amount}) {
    const indexOfExist = state.list.findIndex(item => item.product._id === product._id)

    if (indexOfExist === -1) {
      state.list.unshift({
        product: product,
        amount: amount
      })
    } else {
      state.list = [
        {
          amount: state.list[indexOfExist].amount + amount,
          product: state.list[indexOfExist].product
        },
        ...state.list.filter(item => item.product._id !== product._id)
      ]
    }
  },
  listRemove(state, productId) {
    state.list = [...state.list.filter(item => item.product._id !== productId)]
  }
}

export const actions = {
  async add({commit, dispatch}, {productId, amount}) {
    try {
      const product = await dispatch('public/product/fetchOneAndReturn', {id: productId}, {'root': true})

      product
        ? commit('listAdd', {product, amount})
        : commit('setError', 'Виникла помилка при додаванні товару в кошик', {root: true})

      dispatch('setCookies')
    } catch (e) {
      commit('setError', e, {root: true})
      throw e
    }
  },
  remove({commit, dispatch}, productId) {
    commit('listRemove', productId)
    dispatch('setCookies')
  },
  setCookies({state}) {
    const cookies = {}
    state.list.forEach(item => {
      cookies[item.product._id] = item.amount
    })
    Cookies.set('cart', JSON.stringify(cookies))
  },
  async getCookies({state, dispatch}) {
    if (!state.list.length) {
      const cookieStr = process.browser
        ? document.cookie
        : this.app.context.req.headers.cookie

      const cookies = Cookie.parse(cookieStr || '') || {}
      const cart = cookies['cart'] ? JSON.parse(cookies['cart']) : {}

      for (let productId in cart) {
        if (cart.hasOwnProperty(productId)) {
          await dispatch('add', {productId: productId, amount: cart[productId]})
        }
      }
    }
  }
}
