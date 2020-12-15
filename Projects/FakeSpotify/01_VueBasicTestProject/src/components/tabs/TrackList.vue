<template>
  <section>
    <table class="table" v-if="registros">
      <thead v-if="mostrarNombresColumnas">
        <tr class="ocultar-movil">
          <th class="ocultar-xs"></th>
          <th class="text-left">CANCIÓN</th>
          <th class="text-left ocultar-movil">ARTISTA</th>
          <th class="text-left ocultar-tablet">ÁLBUM</th>
          <th class="text-right ocultar-tablet">D.</th>
        </tr>
      </thead>
      <tbody>
        <template v-for="registro in registros">
          <tr :key="registro.id">
            <td class="ocultar-xs">
              <img
                v-if="registro.album && registro.album.cover_small"
                class="rounded table__imagen"
                :src="registro.album.cover_small"
                alt="Imagen de álbum"
              />
            </td>
            <td>
              <span lang="en">
                {{ registro.title }}
                <span class="mostrar-movil small">
                  {{ registro.artist ? registro.artist.name : "Desconocido" }}
                </span>
              </span>
            </td>
            <td class="ocultar-movil">
              <span lang="en">
                {{ registro.artist ? registro.artist.name : "Desconocido" }}
              </span>
            </td>
            <td class="ocultar-tablet">
              <span lang="en">
                {{
                  registro.album ? registro.album.title : "Desconocido"
                }}</span
              >
            </td>
            <td class="ocultar-tablet">
              {{ formatearDuracion(registro.duration) }}
            </td>
          </tr>
        </template>
      </tbody>
    </table>
    <p v-else class="p-3">Cargando...</p>
  </section>
</template>

<script>
export default {
  name: "TrackList",
  props: {
    mostrarNombresColumnas: {
      type: Boolean,
      default: false
    },
    registros: {
      // Datos de la API
      type: Array,
      default: null
    },
  },
  methods: {
    formatearDuracion(numSegundos) {
      // Convierte una cantidad de segundos a formato 'mm:ss'
      const minutos = parseInt(numSegundos / 60);
      const segundos = parseInt(numSegundos % 60);
      return (
        (minutos < 10 ? "0" + minutos : minutos) +
        ":" +
        (segundos < 10 ? "0" + segundos : segundos)
      );
    },
  }
};
</script>

<style lang="scss" scoped>
.table {
  font-size: 0.75em;

  &__imagen {
    height: 2.5em;
  }

  & tr {
    & th {
      font-weight: 600;
      color: $color-letra-principal;
      border-width: 1px;
    }

    & td {
      color: $color-letra-secundario;
      vertical-align: middle;
      padding: 0.5em;

      @media screen and ($max-sm) {
        text-align: left;
        font-size: 0.8em;
      }
    }
  }
}
</style>