<template>
  <div>
    <v-card class="elevation-12">
      <v-toolbar v-if="loginMode" color="primary" dark flat>
        <v-toolbar-title>Login</v-toolbar-title>
      </v-toolbar>
      <v-toolbar v-if="!loginMode" color="secondary" dark flat>
        <v-toolbar-title>Create a New Protogo Account</v-toolbar-title>
      </v-toolbar>
      <v-card-text>
        <v-form>
          <v-text-field label="Email" name="email" type="text" v-model="email" />
          <v-text-field
            id="password"
            label="Password"
            name="password"
            type="password"
            v-model="password"
          />
          <v-text-field
            v-if="!loginMode"
            id="password"
            label="Re-Enter Password"
            name="password2"
            type="password"
            v-model="registrationPassword"
          />
          <p
            id="switchText"
            @click="loginMode = !loginMode"
          >{{ loginMode ? 'Create a new account' : 'Login with an existing account' }}</p>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn v-if="loginMode" color="primary" @click="loginUser">Login</v-btn>
        <v-btn v-if="!loginMode" color="secondary" @click="registerUser">Sign-up</v-btn>
      </v-card-actions>
    </v-card>
    <br />
    <!-- <p id="logoutText" @click.prevent="logout" v-if="authenticatedUser">
      Logged on as {{ authenticatedUser.email }}, click to logout
    </p>-->
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { auth } from "@/plugins/firebase";

export default {
  layout: "centered",
  data() {
    return {
      loginMode: true,
      email: "",
      password: "",
      registrationPassword: ""
    };
  },
  methods: {
    ...mapActions("modules/user", ["login"]),
    loginUser() {
      auth
        .signInWithEmailAndPassword(this.email, this.password)
        .then(loginResult => {
          this.login(loginResult.user);
          console.log("GOOD:" + loginResult.user.uid);
        })
        .then(() => {
          this.$router.push("/map");
        })
        .catch(error => {
          console.log("ERROR:" + error.message);
        });
    },
    registerUser() {
      auth
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(loginResult => {
          this.login(loginResult.user);
          console.log("GOOD:" + loginResult.user.uid);
        })
        .then(() => {
          this.$router.push("/map");
        })
        .catch(error => {
          console.log("ERROR:" + error.message);
        });
    }
  }
};
</script>

<style scoped>
#switchText {
  color: blue;
  text-decoration: underline;
}
#switchText:hover {
  color: purple;
}
#logoutText:hover {
  text-decoration: underline;
}
</style>