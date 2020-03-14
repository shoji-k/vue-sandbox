<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    <v-text-field
      v-model="form.text"
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
    form: {
      id: null,
      text: ""
    }
  }),
  methods: {
    save() {
      if (this.$refs.form.validate()) {
        if (this.form.id) {
          this.$store.dispatch("announces/update", this.form);
        } else {
          this.$store.dispatch("announces/create", this.form);
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
      const one = this.$store.getters["announces/one"](id);
      this.form = { id: one.id, text: one.text };
    } else {
      this.form = { id: null, text: "" };
    }
  }
};
</script>
