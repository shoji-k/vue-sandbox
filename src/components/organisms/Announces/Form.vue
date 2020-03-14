<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    <v-text-field
      :value="form.text"
      @input="inputText"
      :counter="100"
      :rules="announceRules"
      label="Announce"
      required
      class="py-2"
    ></v-text-field>

    <v-btn :disabled="!valid" color="success" class="mr-4" @click="save">
      Save
    </v-btn>
  </v-form>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data: () => ({
    valid: true
  }),
  computed: {
    ...mapGetters({ form: "announce/data" })
  },
  methods: {
    inputText(value) {
      this.$store.commit("announce/inputText", value);
    },
    save() {
      if (this.$refs.form.validate()) {
        if (this.form.id) {
          this.$store.dispatch("announce/update", this.form);
        } else {
          this.$store.dispatch("announce/create", this.form);
        }
        this.$router.push({ name: "Home" });
      }
    }
  },
  created() {
    this.announceRules = [
      v => !!v || "Announce is required",
      v => (v && v.length <= 100) || "Announce must be less than 100 characters"
    ];

    const id = parseInt(this.$route.params.id, 10);
    if (id) {
      this.$store.dispatch("announce/get", { id });
    } else {
      this.$store.dispatch("announce/clear");
    }
  }
};
</script>
