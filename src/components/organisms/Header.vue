<template>
  <v-app-bar app color="primary" dark>
    <div class="headline">
      <v-btn text :to="{ name: 'Home' }">
        Vue sandbox
      </v-btn>
    </div>

    <v-spacer></v-spacer>

    <div v-if="logined">
      {{ name }} <v-icon @click="logout">mdi-logout</v-icon>
    </div>
    <v-btn text v-else :to="{ name: 'Login' }">Login</v-btn>

    <v-btn text :to="{ name: 'About' }">
      About
    </v-btn>
  </v-app-bar>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({
      name: "session/name",
      logined: "session/logined"
    })
  },
  methods: {
    logout() {
      this.$store.dispatch("session/logout");
    }
  }
};
</script>
