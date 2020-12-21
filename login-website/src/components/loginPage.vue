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
    <div>  
      <span>
        <button type="button" class="btn btn-outline-secondary" @click="login()">Login</button> &nbsp;&nbsp;&nbsp;&nbsp;
        <button type="button" class="btn btn-outline-primary" @click="createUser()">Create User</button>
      </span>
    </div>    
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import welcomePage from './welcomePage.vue'
import router from '../router'
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
      ...mapActions(['setToken', 'addUser']),
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
            if (data.status != 200) {
              this.errMessage = "Wrong username or password!";
              console.log("wrong user or password");
            } else {
              let responseData = await data.json();
              this.$emit("authenticated", true);
              this.$router.replace({ name: "secure" });
              //router.push({ path: 'dashboard' })
              const token = responseData.token;
              this.setToken(token);
              this.addUser(responseData.user);
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
      },
      createUser() {
        router.push({ path: 'createUser_Page' })
      } 
    }
  }
</script>
