<template>
  <main class="page-register">
    <section class="box-auth">
      <img class="logo" alt="logo" src="@/assets/icon.svg" />
      <h1 class="main-title">Registro</h1>
      <p class="auth-intro">
        Regístrate en uocify para disfrutar de miles de canciones.
      </p>

      <form @submit.prevent="register" >
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
        <button class="btn btn-primary btn-lg">Registrar</button>
      </form>
      <div class="form-caja-error" v-show="errorText">
        {{ errorText }}
      </div>

      <p class="auth-bottom">
        ¿Ya tienes cuenta?
        <router-link to="/login" class="alink">Inicia sesión</router-link>
      </p>
    </section>
  </main>
</template>

<script>
import firebase from "firebase";
export default {
  name: "register",
  data: function () {
    return {
      email: "",
      password: "",
      errorText: "",
    };
  },
  methods: {
    register: function (e) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.$data.email, this.$data.password)
        .then((datos) => {
          console.log("Usuario creado con el correo: " + datos.user.email);
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
  },
};
</script>

<style lang="scss" >
.page-register {
  display: flex;
  flex-direction: column;
  height: 100%;

  .main-title {
    margin-bottom: 20px;
  }
}
</style>