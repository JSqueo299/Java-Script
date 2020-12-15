const state = {
    token: '',
    userData: {}
};

const mutations = {
  ADD_USER(state, userData) {
    state.userData = userData;
  },
  REMOVE_USER(state) {
    state.userData = {};
  }
};

const actions = {
  async login({ commit }, user) {
    const data = await fetch('https://vue-dashboard-123.herokuapp.com/api/login', 
      {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({
          username: 'Tristan', password: 'Ilovecoding'
      })
      });
    const token = data.token;
    commit('ADD_USER', user);
    return token;
  },
  logout({ commit }) {
    commit('REMOVE_USER');
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
  actions,
  getters
};
