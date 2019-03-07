<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- <HelloWorld/> -->
    <!-- <Button type="primary">Primary</Button> -->
    <MuseNavi/>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld'
import MuseNavi from './components/MuseNavi'
export default {
  name: 'App',
  components: {
    // HelloWorld
    MuseNavi
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 30px;
}
</style>
