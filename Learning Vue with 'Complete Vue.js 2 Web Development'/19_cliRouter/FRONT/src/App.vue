<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- <home-page msg="Welcome to Your Vue.js App"/>-->

    <router-view></router-view> 
  </div>
</template>

<script>
// import HomePage from './components/HomePage.vue';
// import AboutPage from './components/AboutPage.vue';

export default {
  name: 'App',
  components: {
    // HomePage,
    // AboutPage
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
