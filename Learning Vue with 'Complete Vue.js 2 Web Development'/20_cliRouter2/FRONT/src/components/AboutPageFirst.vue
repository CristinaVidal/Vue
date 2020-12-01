<template>
  <div>
    <h1>First About Page !</h1>
    <p>
      <router-link to="/about">Go to 'About Page'</router-link>
    </p>
    <br><br>
    <p>
      <router-link to="/about/second">Go to 'Second About sub-page'</router-link>
    </p>
  </div>
</template>

<script>
export default {
  name: "AboutPageFirst"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
