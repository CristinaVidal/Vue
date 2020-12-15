<template>
  <section>
    <div class="row" v-if="registros">
      <template v-for="registro in registros">
        <div
          :key="registro.id"
          class="col-6 col-sm-4 col-md-4 col-lg-3 col-xl-2 mb-2"
        >
          <img
            class="tarjeta__imagen rounded-circle"
            :src="registro.picture_medium"
            alt="Imagen de artista"
          />
          <p lang="en" class="tarjeta__titulo text-truncate text-center">
            {{ registro.name }}
          </p>
          <p lang="en" class="tarjeta__subtitulo text-truncate text-center">
            {{ formatearMiles(registro.nb_fan) }} fans
          </p>
        </div>
      </template>
    </div>
    <p v-else class="p-3">Cargando...</p>
  </section>
</template>

<script>
export default {
  name: "ArtistList",
  props: {
    registros: {
      // Datos de la API
      type: Array,
      default: null
    },
  },
  methods: {
    formatearMiles(numero) {
      return numero
        ? numero.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
        : "";
    }
  }
};
</script>

<style lang="scss" scoped>
</style>