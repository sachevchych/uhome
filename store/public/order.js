export const actions = {
  async create({commit, store}, data) {
    try {
      const request = {
        contacts: {
          name: data.name,
          surname: data.surname,
          middleName: data.middleName,
          phone: data.phone,
          email: data.email,
        },
        delivery: {
          city: data.city,
          company: data.company,
          deliveryType: data.type,
          department: data.department,
          address: data.address,
        },
        payment: {
          paymentType: data.payment,
          paidFor: 0
        },
        cart: []
      }

      data.cart.forEach(element => {
        request.cart.push({
          product: element.product._id,
          amount: element.amount,
          price: element.product.price
        })
      })

      return await this.$axios.$post('/api/order/', request)
    } catch (e) {
      commit('setError', e, {root: true})
      throw e
    }
  }
}


