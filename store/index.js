export const state = () => ({
  error: null
});

export const actions = {
  async nuxtServerInit({dispatch}) {
    dispatch('auth/autoLogin')
    await dispatch('category/publicFetchCategories')
  }
}

export const mutations = {
  setError(state, error) {
    state.error = error
  },
  clearError(state) {
    state.error = null
  }
};

export const getters = {
  error: state => state.error
};
