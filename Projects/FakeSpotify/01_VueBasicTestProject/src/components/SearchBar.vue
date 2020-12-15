<template>
  <form action="/search" @submit.prevent="submit" class="w-100">
    <div class="input-icono">
      <button class="input-icono__button">
        <fa-icon icon="search" class="input-icono__button__icono"></fa-icon>
      </button>
      <input
        type="text"
        class="form-control input-icono__input"
        placeholder="Buscar"
        name="query"
        v-model="query"
      />
    </div>
  </form>
</template>

<script>
export default {
  name: "SearchBar",
  data: function () {
    return {
      query: "",
    };
  },
  methods: {
    submit() {
      // Evitando la recarga de la web, manteniendo SPA
      if (
        this.$data.query &&
        this.$route.query &&
        this.$route.query.query !== this.$data.query
      ) {
        // Con la query vacía no se hace búsqueda
        this.$router.push(`/search?query=${this.$data.query}`);
      }
    }
  },
  watch: {
    $route(to) {
      if (to.fullPath === "/") {
        this.$data.query = "";
      }
    },
  },
  created: function () {
    // Si se ha recargado la web o similares, se rellena el input de búsqueda con el de la URL
    if (!this.$data.query && this.$route.query && this.$route.query.query) {
      this.$data.query = this.$route.query.query;
    }
  }
};
</script>

<style lang="scss" scoped>
</style>