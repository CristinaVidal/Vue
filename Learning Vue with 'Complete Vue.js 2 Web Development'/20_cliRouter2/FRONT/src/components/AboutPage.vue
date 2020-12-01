<template>
  <div>
    <h1>About Page</h1>
    <p>
      <router-link to="/">Go to 'Home Page'</router-link>
    </p>
    <br><br>
    <p>
      <router-link to="/about/first">Go to 'First About sub-page'</router-link><br><br>
      <router-link to="/about/second">Go to 'Second About sub-page'</router-link>
    </p>
  </div>
</template>

<script>
export default {
  name: "AboutPage"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
