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
/* Anienne version
h1 {
    background-color: rgb(22,24,35);
    font-size: 1.35em;
    color: #ffffff;
    padding: 8px;
    padding-left: 55px;
    margin-top: 30px;
    margin-bottom: 20px;
    font-weight: normal;
}
*/
h1 {
    font-size: 1.35em;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    font-size: medium;
    font-weight: lighter;
    color:rgba(255, 255, 255, 0.178);
    text-transform: uppercase;
    border-bottom-style: solid;
    border-width: 1px;
    padding: 0px 0px 7px 15px;
    margin: 30px 0px 20px 40px;
    width: 60%;
}
h1::first-letter {
  font-size: 1.5em;
}


p {
  color: white;
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

