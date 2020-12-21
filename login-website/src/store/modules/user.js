const state = {
    token: '',
    userData: {
      authenticate: false
    }
};

const mutations = {
  ADD_USER(state, userData) {
    state.userData = userData;
  },
  REMOVE_USER(state) {
    state.userData = {};
  },
  SET_TOKEN(state, token) {
    state.token = token;
    console.log("SET_TOKEN")
  }
};

const actions = {
  setToken({ commit }, token) {
    commit("SET_TOKEN", token);
  },
  addUser({ commit }, userdata) {
    commit("ADD_USER", userdata);
  }
}

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
  actions,
  getters
};
