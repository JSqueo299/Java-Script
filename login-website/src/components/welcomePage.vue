<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      Welcome to our stock tracking website.
    </p>
    <h3>API Links</h3>
    <ul>
      <li><a href="https://www.alphavantage.co/" target="_blank" rel="noopener">Alpha Vantage</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'welcomePage',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
