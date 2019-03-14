import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoading: true,
    role: 1,
    userId: '88888888',
    currentTabbarIndex: 0
  },
  mutations: {
    updateLoadingStatus(state, payload) {
      state.isLoading = payload.isLoading;
    },
    updateRole(state, payload) {
      state.role = payload
    },
    updateTabbarIndex(state, payload) {
      state.currentTabbarIndex = payload
    },
    updateUserId(state, payload) {
      state.userId = payload
    }
  },
  actions: {

  },
})
