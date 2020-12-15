<template>
  <section>
    <div class="row" v-if="registros">
      <template v-for="registro in registros">
        <div
          :key="registro.id"
          class="col-6 col-sm-4 col-md-4 col-lg-3 col-xl-2 mb-2"
        >
          <img
            class="tarjeta__imagen"
            :src="registro.cover_medium"
            alt="Imagen de álbum"
          />
          <p lang="en" class="tarjeta__titulo text-truncate">
            {{ registro.title }}
          </p>
          <p lang="en" class="tarjeta__subtitulo text-truncate">
            {{ registro.artist ? registro.artist.name : "Desconocido" }}
          </p>
        </div>
      </template>
    </div>
    <p v-else class="p-3">Cargando...</p>
  </section>
</template>

<script>
export default {
  name: "AlbumList",
  props: {
    registros: {
      // Datos de la API
      type: Array,
      default: null
    }
  }
};
</script>

<style lang="scss" scoped>
</style>