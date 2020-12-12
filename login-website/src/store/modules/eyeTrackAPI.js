import Vue from "vue";

const state = {
    
  };

const mutations = {

};

const actions = {
    async fetchGazeCloudAPI({ commit }, ticker) {
    try {
        const response = await fetch(apiUrl(ticker));
        const responseData = await response.json();
        commit("SET_STOCK_HISTORY", responseData["Time Series (Daily)"]);
    } catch (e) {
        console.log(e);
    }
};

const getters = {
    
};

export default {
    state,
    mutations,
    actions,
    getters
};
