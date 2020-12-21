<template>
  <div id="app">
    <div id="nav">
        <router-link v-if="authenticated" to="/secure" v-on:click.native="logout()" replace>Logout {{ userData.username }}</router-link>
    </div>
    <router-view @authenticated="setAuthenticated" />
  </div>
  
</template>

<script>
//import loginPage from './components/loginPage.vue'
//import dashboard from './components/dashboard.vue'
import router from './router'
import Vue from 'vue'
import { mapGetters } from 'vuex';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


export default {
  name: 'App',
  components: {
   //loginPage,
   // dashboard
  },
  data() {
    return {
      authenticated: false,
    }
},
mounted() {
  if(!this.authenticated && this.$route.path != "/login") {
    this.$router.replace({ name: "login" });
  }
},
computed: {
  ...mapGetters(['userData'])
},
methods: {
  setAuthenticated(status) {
    this.authenticated = status;
  },
  logout() {
    this.authenticated = false;
    router.push({ name: "login" });
  }
}
    
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
