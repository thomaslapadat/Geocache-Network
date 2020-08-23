<template>
  <div>
    <v-card class="elevation-12">
      <v-toolbar color="error" dark flat>
        <v-toolbar-title>Temporary Logout Button</v-toolbar-title>
      </v-toolbar>
      <v-card-actions>
        <v-btn color="error" @click="signOut">Logout</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import axios from "@nuxtjs/axios";
import { mapActions } from "vuex";

export default {
  layout: "centered",
  methods: {
    ...mapActions("modules/user", ["logout"]),
    async signOut() {
      await this.logout();
      this.$router.push("/");
    }
  },
  middleware: 'authenticated',
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