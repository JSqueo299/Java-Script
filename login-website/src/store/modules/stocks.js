const state = {};

const mutations = {};

const actions = {
  async fetchUserStocks({ rootState }) {
    const token = rootState.user.token;
    const userId = rootState.user.userData.id;
    const response = await fetch(
      `https://vue-dashboard-123.herokuapp.com/api/users/${userId}}/stocks`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const data = await response.json();
    console.log(data);
  },
  async addUserStock({ rootState }, ticker) {
    const token = rootState.user.token;
    const userId = rootState.user.userData.id;
    const response = await fetch(
      `https://vue-dashboard-123.herokuapp.com/api/users/${userId}}/stocks`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          ticker,
        }),
      }
    );
    const data = await response.json();
    console.log(data);
  },
};

const getters = {};

export default {
  state,
  mutations,
  getters,
  actions,
};
