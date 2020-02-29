<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    <v-text-field
      v-model="announce"
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
export default {
  data: () => ({
    valid: true,
    announce: ""
  }),
  methods: {
    save() {
      if (this.$refs.form.validate()) {
        this.$store.dispatch("announces/create", this.announce);
        this.$router.push({ name: "Home" });
      }
    }
  },
  created() {
    this.announceRules = [
      v => !!v || "Announce is required",
      v => (v && v.length <= 100) || "Announce must be less than 100 characters"
    ];
  }
};
</script>
