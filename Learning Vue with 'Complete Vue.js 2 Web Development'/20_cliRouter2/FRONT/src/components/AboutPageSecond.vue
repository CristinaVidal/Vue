<template>
  <div>
    <h1>Second About Page !</h1>
    <p>
      <router-link to="/about">Go to 'About Page'</router-link>
    </p>
    <br><br>
    <p>
      <router-link to="/about/first">Go to 'First About sub-page'</router-link>
    </p>
  </div>
</template>

<script>
export default {
  name: "AboutPageSecond"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
