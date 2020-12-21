<template>
  <div id="app">
    <h1>
      Welcome to our stock tracking website.
    </h1>
    <p>
       Enter a username and password below to create a new account:  
    </p>
    <div v-bind:style="{ color: 'red'}" v-if="errMessage" class="error">
      <p>{{ errMessage }}</p>
    </div>
    <div v-bind:style="{ color: 'green'}" v-if="statusMessage" class="error">
      <p>{{ statusMessage }}</p>
    </div>
    <div class="input-group" style="width: 20%;display:inline-block">
      <input type="username" class="form-control" v-model="input.username" placeholder="Username" aria-describedby="basic-addon1">
    </div>
    <br>
    <div class="input-group" style="width: 20%;display:inline-block">
      <input type="password" class="form-control" v-model="input.password" placeholder="Password" aria-describedby="basic-addon1">
    </div>
    <br>
    <div class="input-group" style="width: 20%;display:inline-block">
      <input type="password" class="form-control" v-model="input.password_check" placeholder="Re-enter Password" aria-describedby="basic-addon1">
    </div>
      <br>
    <div>  
        <button type="button" class="btn btn-outline-secondary" @click="createNewUser()">Create User</button>
    </div> 
  </div>
</template>


<script>
import router from '../router'
    export default {
    name: 'createUser_Page',
        data() {
        return {
        input: {
          username: '',
          password: ''
        },
        errMessage: '',
        statusMessage: ''
      }
    },
    methods: {
        async createNewUser() {
        if(this.input.username != "" && this.input.password != "") {
            if(this.input.password == this.input.password_check){
                try {
                    const data = await fetch('https://vue-dashboard-123.herokuapp.com/api/users', 
                    {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json'},
                    body: JSON.stringify({
                        username: this.input.username, password: this.input.password
                    })
                    });
                    if (data.status != 200) {
                    this.errMessage = "User credentials could not be created. Please try another username and/or password.";
                    console.log("cannot create user. Status != 200");
                    } else {
                    this.statusMessage = "New user has been created! Redirecting in 3 seconds"
                    setTimeout(3000);
                    router.push({ path: 'login' });
                    //this.$router.replace({ name: "secure" });
                    }
                }
                catch(err) {
                    this.errMessage = "Bad heroku network request";
                    console.log("Heroku fetch failed");
                }  
            }
        } else {
          this.errMessage = "A username and password must be entered!";
          console.log("A username and password must be entered");
        }
      }
    }

    }
</script>
