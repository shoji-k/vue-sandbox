<template>
  <div>
    <v-btn
      text
      :to="{ name: 'Form' }"
    >
      Form
    </v-btn>
    <v-btn
      text
      :to="{ name: 'Editor' }"
    >
      Editor
    </v-btn>
    <Announces />
    <div v-if="logined">
      <v-btn :to="{ name: 'AnnounceForm' }">
        Add
      </v-btn>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Announces from "@/components/organisms/Announces/List";

export default {
  components: {
    Announces
  },
  computed: {
    ...mapGetters({ logined: "session/logined" })
  }
};
</script>
