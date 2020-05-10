<template>
  <v-app>
    <Header />
    <v-content>
      <v-container
        fluid
        class="pa-6"
      >
        <router-view />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Header from "@/components/organisms/Header";
import { mapGetters } from "vuex";

export default {
  components: {
    Header,
  },
  computed: {
    ...mapGetters({ name: "session/name" }),
  },
};
</script>
