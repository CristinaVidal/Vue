<template>
  <main class="page-login">
    <section class="box-auth">
      <img class="logo" alt="logo" src="@/assets/icon.svg" />
      <h1 class="main-title">Iniciar sesión</h1>
      <p class="auth-intro">
        Inicia sesión en uocify para disfrutar de miles de canciones.
      </p>

      <form @submit.prevent="login">
        <div class="form-group">
          <label class="form-label" for="username">Email</label>
          <input
            placeholder="Correo electrónico"
            type="email"
            id="email"
            class="form-control"
            required
            v-model="email"
          />
        </div>
        <div class="form-group">
          <label class="form-label" for="password">Contraseña</label>
          <input
            placeholder="Contraseña"
            type="password"
            id="password"
            class="form-control"
            required
            v-model="password"
          />
        </div>
        <button class="btn btn-primary btn-lg">Iniciar sesión</button>
      </form>
      <div class="form-caja-error" v-show="errorText">
        {{ errorText }}
      </div>

      <p class="auth-bottom">
        ¿No tienes cuenta?
        <router-link to="/register" class="alink">Regístrate</router-link>
      </p>
    </section>
  </main>
</template>

<script>
import firebase from "firebase";
export default {
  name: "login",
  data: function () {
    return {
      email: "",
      password: "",
      errorText: "",
    };
  },
  methods: {
    login: function (e) {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.$data.email, this.$data.password)
        .then((datos) => {
          console.log("Sesión iniciada correctamente con el correo: " + datos.user.email);
          this.$data.errorText = ""; // Se oculta el mensaje de error si lo hay
          this.$root.$emit('change-currentUser', datos.user.email); // Justificación en AppHeader.vue
          this.$router.push("/");
        })
        .catch((error) => {
          this.$data.errorText =
            error && error.message
              ? error.message
              : "Ha ocurrido un error. Por favor, inténtelo más tarde o contacte con su administrador";
        });
      e.preventDefault();
    },
  }
};
</script>


<style lang="scss" >
.page-login {
  height: 100%;
  flex: 1;
}
</style>