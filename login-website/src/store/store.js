import Vue from 'vue';
import Vuex from 'vuex';

//import eyeTrackAPI from './modules/eyeTrackAPI';
import user from './modules/user';
import stocks from './modules/stocks';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    user,
    stocks
  }
});


