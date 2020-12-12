<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <welcomePage msg="Stock Trading with the Big Men"/>
    <loginPage />
  </div>
  
</template>

<script>
import welcomePage from './components/welcomePage.vue'
import loginPage from './components/loginPage.vue'
import Vue from 'vue'
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
    welcomePage,
    loginPage
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
