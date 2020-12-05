<template>
  <div id="app">
    <div class="input-group" style="width: 20%;display:inline-block">
      <input type="text" class="form-control" placeholder="Username" aria-describedby="basic-addon1">
    </div>
    <br>
    <div class="input-group" style="width: 20%;display:inline-block">
      <input type="text" class="form-control" placeholder="Password" aria-describedby="basic-addon1">
    </div>
      <br>
      <br>
      <button type="button" class="btn btn-outline-secondary">Start Eye Tracking</button>
  </div>
</template>


<script src=”https://api.gazerecorder.com/GazeCloudAPI.js” ></script>

<script>

export default {
  name: "loginPage"
  /*created() {
    
  },
  computed: {
    
  },
  methods: {
    
  },
  components: {
   
  }*/
};
</script>

