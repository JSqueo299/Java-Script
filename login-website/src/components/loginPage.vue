<template>
  <div id="app">
    <span>Message: {{ error }}</span>
    <br>
    <div class="input-group" style="width: 20%;display:inline-block">
      <input type="username" class="form-control" v-model="input.username" placeholder="Username" aria-describedby="basic-addon1">
    </div>
    <br>
    <div class="input-group" style="width: 20%;display:inline-block">
      <input type="password" class="form-control" v-model="input.password" placeholder="Password" aria-describedby="basic-addon1">
    </div>
      <br>
      <button type="button" class="btn btn-outline-secondary" @click="login()">Login</button>
  </div>
</template>


<script src="https://api.gazerecorder.com/GazeCloudAPI.js" ></script>

<script src="https://api.gazerecorder.com/heatmapLive.js" ></script>


<script>
  export default {
    name: 'loginPage',
    data() {
      return {
        input: {
          username: "",
          password: ""
        },
        error: ''
      }
    },
    methods: {
      async login(input) {
        if(this.input.username != "" && this.input.password != "") {
          try {
            const data = await fetch('https://vue-dashboard-123.herokuapp.com/api/login', 
            {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({
                username: this.input.username, password: this.input.password
              })
            });
          }
        catch(err) {
          this.error = 'Wrong username or password'
        }  
        } else {
          console.log("A username and password must be present");
        }
      } 
    }
  }
</script>
