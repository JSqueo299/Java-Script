<template>
  <div id="app">
    <div class="input-group" style="width: 20%;display:inline-block">
      <input type="username" class="form-control" v-model="username" placeholder="Username" aria-describedby="basic-addon1">
    </div>
    <br>
    <div class="input-group" style="width: 20%;display:inline-block">
      <input type="password" class="form-control" v-model="password" placeholder="Password" aria-describedby="basic-addon1">
    </div>
      <br>
      <button type="button" class="btn btn-outline-secondary" @click="handleLogin">Login</button>
      <br>
      <br>
  </div>
</template>


<script src="https://api.gazerecorder.com/GazeCloudAPI.js" ></script>

<script src="https://api.gazerecorder.com/heatmapLive.js" ></script>

<script>
import { mapActions } from 'vuex';
export default {
  name: "loginPage",
  methods: {
    ...mapActions(['login']),
    handleLogin() {
      this.login('username', 'password');
    }
  },
  
};
</script>

