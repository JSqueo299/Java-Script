import Vue from 'vue';
import Vuex from 'vuex';
//import VuexPersist from 'vuex-persist';

//import eyeTrackAPI from './modules/eyeTrackAPI';
import user from './modules/user';
import stocks from './modules/stocks';

Vue.use(Vuex);

/*
const vuexLocalStorage = new VuexPersist({
  key: 'vuex', // The key to store the state on in the storage provider.
  // Function that passes the state and returns the state with only the objects you want to store.
  reducer: state => state,
  // Function that passes a mutation and lets you decide if it should update the state in localStorage.
  // filter: mutation => (true)
})
*/

export default new Vuex.Store({
  modules: {
    user,
    stocks
  }
  // plugins: [vuexLocalStorage.plugin] remove for now
});


