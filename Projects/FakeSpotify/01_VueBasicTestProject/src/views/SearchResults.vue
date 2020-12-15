<template>
  <main>
    <h1 class="main-title">
      <template v-if="!query"> Resultados... </template>
      <template v-else
        >Resultados de
        <span class="texto-busqueda">
          {{ query }}
        </span>
      </template>
    </h1>
    <div class="contenedor-busqueda">
      <!--Navegación-->
      <b-card no-body>
        <b-tabs>
          <b-tab title="Todos">
            <!--Canciones-->
            <h3 class="mb-3">
              Canciones
              <fa-icon icon="chevron-right" class="texto--sm"></fa-icon>
            </h3>
            <track-list
              :registros="canciones ? canciones.data.slice(0, 6) : null"
            ></track-list>
            <!---->
            <!--Álbumes-->
            <h3 class="mb-3">
              Álbumes
              <fa-icon icon="chevron-right" class="texto--sm"></fa-icon>
            </h3>
            <album-list
              :registros="albumes ? albumes.data.slice(0, 6) : null"
            ></album-list>
            <!----->
            <!--Artistas-->
            <h3 class="mb-3">
              Artistas
              <fa-icon icon="chevron-right" class="texto--sm"></fa-icon>
            </h3>
            <artist-list
              :registros="artistas ? artistas.data.slice(0, 6) : null"
            ></artist-list>
            <!---->
          </b-tab>
          <b-tab title="Canciones">
            <h3 class="mb-3">
              <template v-if="canciones">
                {{ canciones ? canciones.total : "" }} canciones
              </template>
              <template v-else> Canciones </template>
            </h3>
            <track-list
              :registros="canciones ? canciones.data : null"
              :mostrarNombresColumnas="true"
            ></track-list>
          </b-tab>
          <b-tab title="Álbumes">
            <h3 class="mb-3">
              <template v-if="albumes">
                {{ albumes ? albumes.total : "" }} álbumes
              </template>
              <template v-else> Álbumes </template>
            </h3>
            <album-list :registros="albumes ? albumes.data : null"></album-list>
          </b-tab>
          <b-tab title="Artistas">
            <h3 class="mb-3">
              <template v-if="artistas">
                {{ artistas ? artistas.total : "" }} artistas
              </template>
              <template v-else> Artistas </template>
            </h3>
            <artist-list
              :registros="artistas ? artistas.data : null"
            ></artist-list>
          </b-tab>
        </b-tabs>
      </b-card>
      <!---->
    </div>
  </main>
</template>
<script>
import TrackList from "../components/tabs/TrackList.vue";
import AlbumList from "../components/tabs/AlbumList.vue";
import ArtistList from "../components/tabs/ArtistList.vue";
import CancionesJson from "@/json/tracks.json";
import AlbumesJson from "@/json/albums.json";
import ArtistasJson from "@/json/artists.json";

export default {
  components: { ArtistList, TrackList, AlbumList },
  name: "SearchResults",
  data: function () {
    return {
      query: "",
      canciones: null, // CancionesJson.data, --> Directamente cargaría datos del JSON.
      albumes: null, // AlbumesJson.data,
      artistas: null, // ArtistasJson.data
    };
  },
  methods: {
    cargarCanciones() {
      // Carga las canciones de la API (se deja la estructura ya adelantada para la PR)
      // Subir milisegundos del timeout para simular carga lenta
      this.$data.canciones = null;
      setTimeout(() => {
        this.$data.canciones = CancionesJson;
      }, 1000); // Simulación de asincronía como si llamáramos a la API.
    },
    cargarAlbumes() {
      // Carga los álbumes de la API
      this.$data.albumes = null;
      setTimeout(() => {
        this.$data.albumes = AlbumesJson;
      }, 1000); // Simulación de asincronía como si llamáramos a la API
    },
    cargarArtistas() {
      // Carga los artistas de la API
      this.$data.artistas = null;
      setTimeout(() => {
        this.$data.artistas = ArtistasJson;
      }, 1000); // Simulación de asincronía como si llamáramos a la API
    },
    buscarPorRuta() {
      this.query = this.$route.query.query;
      this.cargarCanciones();
      this.cargarAlbumes();
      this.cargarArtistas();
    }
  },
  created: function () {
    this.buscarPorRuta();
  },
  watch: {
    $route(to) {
      if(to.fullPath.startsWith('/search')) {
        this.buscarPorRuta();
      }
    }
  }
};
</script>


<style lang="scss" >
.contenedor-busqueda {
  background-color: $color-fondo-principal;
  padding: 0 1.25em;
}
.texto-busqueda {
  color: $color-letra-secundario;
}
.nav-tabs {
  -webkit-box-shadow: $box-shadow-bottom;
  box-shadow: $box-shadow-bottom;

  & .nav-item {
    padding: 0.75em 0 0em 0;
    font-size: 0.9em;
    border: none;

    & > a,
    .nav-link.active {
      color: $color-letra-secundario;
      padding-bottom: 0.75em;
      border: none;

      &:hover {
        text-decoration: none;
        border-bottom: 2px solid $color-enlaces-borde;
      }
    }
  }
}

.card {
  border: none !important;
}

a.active,
.nav-tabs .nav-link.active {
  text-decoration: none;
  padding-bottom: 0.5em;
  border-bottom: 2px solid $color-enlaces-borde !important;
  font-weight: 600;
  color: black !important;
}
</style>