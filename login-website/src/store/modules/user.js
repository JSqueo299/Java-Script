import apiService from "../../services/apiService";

const state = {
    token: '123',
    userData: {
      username: '',
      password: '',
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

const actions = {
  async login({ commit }, user) {
    const data = await apiService.fetch('https://vue-dashboard-123.herokuapp.com/api/login', 
      {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({
          username: 'Tristan', password: 'Ilovecoding'
      })
      });
    const token = data.token;
    apiService.setToken(token);
    commit('ADD_USER', user);
    return {
      username: '',
      password: '',
    }
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
