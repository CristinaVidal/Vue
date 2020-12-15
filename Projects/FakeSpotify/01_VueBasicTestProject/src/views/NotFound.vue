<template>
  <main>
    <div class="flex flex--horizontal-center flex--direction-column">
      <img
        class="not-found"
        src="@/assets/error-404.svg"
        alt="Icono Not Found"
      />
      <h1>¡Ups!</h1>
      <h2>Página no encontrada</h2>
    </div>
  </main>
</template>
<script>
export default {
  name: "NotFound"
};
</script>

<style lang="scss" scoped>
h1,
h2 {
  text-align: center;
}
h1 {
  font-size: 3em;

  @media screen and ($max-sm) {
    font-size: 2em;
  }
}
h2 {
  font-size: 1.5em;
  margin-top: 0;

  @media screen and ($max-sm) {
    font-size: 1em;
  }
}
.not-found {
  margin: 2em 0;
  height: 15em;

  @media screen and ($max-md) {
    margin-top: 1.25em;
    height: 10em;
  }

  @media screen and ($max-sm) {
    margin: 1em 0;
    height: 7em;
  }
}
</style>