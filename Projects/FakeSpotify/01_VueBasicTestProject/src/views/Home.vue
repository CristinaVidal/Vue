<template>
  <main class="page-home">
    <div class="container container-thin">
      <img class="logo" src="@/assets/icon.svg" alt="logo" />
      <h1 class="main-title">¿En busca de música?</h1>
      <p class="lorem-textum">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tellus
        arcu, feugiat eu molestie in, finibus sit amet lorem. Phasellus
        consectetur ipsum in imperdiet ultrices.
      </p>
    </div>
    <!-- Playlists -->
    <h3 class="mb-3">
      Mis Playlists
      <!-- <fa-icon icon="chevron-right" class="texto--sm"></fa-icon> -->
    </h3>
    <playlist :registros="[]"
    ></playlist>
    <!---->
  </main>
</template>

<script>
import Playlist from "../components/Playlist.vue";

export default {
  components: { Playlist },
  name: "Home",
};
</script>


<style lang="scss" scoped>
.page-home {
  text-align: center;
  padding-left: 30px;
  padding-right: 30px;

  .logo {
    width: 200px;
    margin-top: 25px;
    margin-bottom: 25px;
  }

  .container-thin {
    max-width: 600px;
  }
}
</style>