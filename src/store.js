import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoading: true,
    role: 0,
    currentTabbarIndex: 0
  },
  mutations: {
    updateLoadingStatus(state, payload) {
      state.isLoading = payload.isLoading;
    },
    updateRole(state, payload) {
      state.role = payload
    },
    updateTabbrIndex(state, payload) {
      state.currentTabbarIndex = payload
    }
  },
  actions: {

  },
})
