// initial state
const state = {
  isLoading: false,
};

// getters
const getters = {};

// actions
const actions = {};

// mutations
const mutations = {
  updateLoadingStatus(state, payload) {
    state.isLoading = payload.isLoading;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
