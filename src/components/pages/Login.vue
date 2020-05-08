<template>
  <v-card tile>
    <v-container class="pa-6">
      <v-form
        ref="form"
        v-model="valid"
        lazy-validation
      >
        <v-row>
          <v-col>
            <v-text-field
              v-model="name"
              :rules="nameRule"
              label="Name"
              name="name"
              required
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-text-field
              v-model="password"
              :rules="passwordRule"
              label="Password"
              name="password"
              required
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-btn
              :disabled="!valid"
              color="success"
              @click="login"
            >
              Login
            </v-btn>
          </v-col>
        </v-row>
      </v-form>
    </v-container>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    valid: true,
    name: "",
    password: ""
  }),
  created() {
    this.nameRule = [v => !!v || "name is required"];
    this.passwordRule = [v => !!v || "password is required"];
  },
  methods: {
    login() {
      if (this.$refs.form.validate()) {
        this.$store.dispatch("session/login", {
          name: this.name,
          passoword: this.password
        });
        this.$router.push({ name: "Home" });
      }
    }
  }
};
</script>
