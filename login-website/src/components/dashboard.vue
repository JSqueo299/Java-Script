<template>
  <div id="app">
    <welcomePage msg="Stock Trading with the Big Men"/>
      <br>
      <button type="button" class="btn btn-outline-secondary" @click="eyeTrackAPI()">Eye Tracking</button>
  </div>
</template>


<script src="https://api.gazerecorder.com/GazeCloudAPI.js" ></script>

<script src="https://api.gazerecorder.com/heatmapLive.js" ></script>


<script>
import welcomePage from './welcomePage.vue'
    export default {
      name: 'dashboard',
      components: {
        welcomePage,
      },
    }
</script>
