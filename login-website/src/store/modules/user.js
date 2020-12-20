const state = {
    token: '',
    userData: {
      authenticate = false;
    }
};

const mutations = {
  ADD_USER(state, userData) {
    state.userData = userData;
  },
  REMOVE_USER(state) {
    state.userData = {};
  }
};

const getters = {
  userData(state) {
    return state.userData;
  },
  isLoggedIn(state) {
      return state.token !== null
  }
};

export default {
  state,
  mutations,
  getters
};
