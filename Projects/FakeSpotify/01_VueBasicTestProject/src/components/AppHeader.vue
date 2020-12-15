<template>
  <header>
    <div class="header-principal">
      <div
        class="flex flex--horizontal-space-between flex--vertical-center w-100 pl-3 pr-2 pt-1 pb-1"
      >
        <!--Zona izquierda-->
        <div class="flex flex--vertical-center w-100">
          <router-link to="/">
            <img src="../assets/logo.svg" alt="Logo" class="cabecera__logo" />
          </router-link>
          <!--Buscador PC-->
          <div class="ocultar-movil w-100">
            <search-bar class="ml-4"></search-bar>
          </div>
          <!---->
        </div>
        <!---->
        <!--Zona derecha-->
        <div class="flex flex--horizontal-end flex--vertical-center w-100">
          <template v-if="currentUser">
            <p
              class="texto--md m-0 pr-2 pl-3 ocultar-movil user-email ocultar-tablet"
            >
              {{ currentUser }}
            </p>
            <fa-icon
              icon="user"
              class="input-icono__button__icono icono icono--usuario mr-2"
            ></fa-icon>
            <fa-icon
              @click="logout()"
              icon="sign-out-alt"
              class="input-icono__button__icono icono icono--usuario cursor-pointer mr-2"
            ></fa-icon>
          </template>
          <template v-else>
            <div class="header-links">
              <router-link to="/login" class="header-links__link"
                >Inicial sesión</router-link
              >
              <router-link to="/register" class="header-links__link"
                >Registrar</router-link
              >
            </div>
          </template>
        </div>
        <!---->
      </div>
    </div>
    <!--Buscador MÓVIL-->
    <div class="header-movil mostrar-movil pl-3 pr-3">
      <search-bar></search-bar>
    </div>
    <!---->
  </header>
</template>

<script>
import SearchBar from "./SearchBar.vue";
export default {
  components: { SearchBar },
  name: "AppHeader",
  data: function () {
    return {
      // isLoggedIn: false, --> Justificación: Se omite para utilizar exclusivamente current User
      //                        Si currentUser == false (== ""), no está logado
      currentUser: ""
    };
  },
  created: function () {
    this.$data.currentUser = "";
    this.$root.$on("change-currentUser", (currentUser) => {
      this.$data.currentUser = currentUser;
    });
  },
  methods: {
    logout: function () {
      this.$data.currentUser = "";
      this.$root.$emit("change-currentUser", "");
      this.$router.push("/login");
    }
  }
};
</script>

<style lang="scss" scoped>
header {
  & .header-links {
    @media screen and ($max-sm) {
      display: flex;
      flex-direction: column;
      text-align: center;
    }

    &__link {
      font-size: 0.85em;
      font-weight: 600;
      color: gray;
      padding: 0 0.5em;

      @media screen and ($max-md) {
        font-size: 0.65em;
      }

      @media screen and ($max-sm) {
        padding: 0.25em 0.5em;
        font-size: 0.55em;
      }
    }
  }
  & > .header-principal {
    width: 100%;
    height: $altura-cabecera;
    background-color: $color-fondo-principal;
    position: fixed;
    -webkit-box-shadow: $box-shadow-bottom;
    box-shadow: $box-shadow-bottom;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    z-index: 2;
  }

  & > .header-movil {
    position: fixed;
    width: 100%;
    padding-bottom: 0.65em;
    height: calc(#{$altura-cabecera} + 2.5em);
    align-items: flex-end;
    background-color: $color-fondo-secundario;
    z-index: 1;

    @media screen and ($max-sm) {
      display: flex;
    }
  }
}
.cabecera {
  &__logo {
    height: 1.75em; // Navegadores sin calc
    height: calc(#{$altura-cabecera} - 1.25em);
  }
}
.icono {
  &--usuario {
    font-size: 1.75em;
    padding: 0.2em;
    -moz-border-radius: 1em;
    -webkit-border-radius: 1em;
    border-radius: 1em;
    background-color: $color-fondo-secundario;

    & * {
      // Color SVG
      color: $color-letra-principal;
    }

    @media screen and ($max-sm) {
      font-size: 2em;
    }
  }
}
.user-email {
  font-size: 0.9em;
  font-weight: 600;
  word-break: break-all;

  @media screen and ($max-md) {
    font-size: 0.6em;
  }
}
</style>