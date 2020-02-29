<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-title>Inicia Sesión</v-card-title>
          <v-card-text>
            <v-form id="loginForm" @submit.prevent="onSubmit">
              <v-text-field
                color="#2E3D93"
                v-model.trim="input.username"
                label="Usuario"
                type="text"
                :rules="[v => !!v || 'El usuario es requerido']"
              ></v-text-field>
              <v-text-field
                color="#2E3D93"
                v-model.trim="input.password"
                label="Contraseña"
                :rules="[v => !!v || 'La contraseña es requerida']"
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-btn type="submit" form="loginForm" block dark color="#2E3D93"
              >Ingresar</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      input: {
        username: "admin",
        password: "pass"
      },
      returnUrl: ""
    };
  },
  methods: {
    ...mapActions(["login"]),
    async onSubmit() {
      //console.log("entre al metodo login");
      if (this.input.username === "admin" && this.input.password === "pass") {
        await this.login();
        //console.log("me he autenticado " + this.authenticated);
        this.$router.push({ name: "chart" });
      } else {
        //console.log("The username and / or password is incorrect");
        // console.log("algo ha fallado " + this.authenticated);
      }
    }
  }
};
</script>
