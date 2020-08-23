<template>
  <div>
    <h1>Project Objectives</h1>
      <v-card
      class="mx-auto"
      max-width="344"
    >
      <v-card-text>
        <div>Objective 1</div>
        <p class="display-1 text--primary">
          User Authentication
        </p>
        <div class="text--primary">
          Learn to authenticate users using JavaScript Web Tokens.<br>
          Uses Firebase SDK to store user credentials.
        </div>
      </v-card-text>
    </v-card>
    <v-card
      class="mx-auto"
      max-width="344"
    >
    <v-card-text>
      <div>Objective 2</div>
      <p class="display-1 text--primary">
        Server-Side Rendering
      </p>
      <div class="text--primary">
        Build a starter web application that renders pages on the server, rather than on theclient.
      </div>
    </v-card-text>

    <v-card-text>
        <div>Objective 3</div>
        <p class="display-1 text--primary">
          Query Backend for Data
        </p>
        <div class="text--primary">
          Populate the page with content pulled from the backend (Firestore).
        </div>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>

export default {
  components: {
  }
}
</script>
