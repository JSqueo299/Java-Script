<template>
  <div id="app">
    <welcomePage msg="Stock Trading with the Big Men"/>
    <div v-bind:style="{ color: 'red'}" v-if="errMessage" class="error">
      <p>{{ errMessage }}</p>
    </div>
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

<script>
import welcomePage from './welcomePage.vue'
  export default {
    name: 'loginPage',
    data() {
      return {
        input: {
          username: '',
          password: ''
        },
        errMessage: ''
      }
    },
    components: {
    welcomePage,
    },
    methods: {
      async login() {
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
            let responseData = await data.json();
            if (data.status != 200) {
              this.errMessage = "Wrong username or password!";
              console.log("wrong user or password");
            } else {
              //this.$emit("authenticated", true);
              //this.$router.replace({ name: "secure" });
              //router.push({ path: 'dashboard' })
              const token = responseData.token;
              return token;
            }
          }
          catch(err) {
            this.errMessage = "Bad heroku network request";
            console.log("Heroku fetch failed");
          }  
        } else {
          this.errMessage = "A username and password must be entered!";
          console.log("A username and password must be entered");
        }
      } 
    }
  }
</script>
