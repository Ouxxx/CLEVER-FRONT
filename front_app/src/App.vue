<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {

  }
}
</script>

<style>

* {
  box-sizing: border-box;
}

html {
    min-height: 100vh;
}

body {
    margin: 0;
    min-height: 100vh;
}

#app {
  min-height: 100vh;

/*
font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  */
}

</style>

