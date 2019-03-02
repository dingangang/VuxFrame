import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoading: true,
  },
  mutations: {
    updateLoadingStatus(state, payload) {
      state.isLoading = payload.isLoading;
    },
  },
  actions: {

  },
})
