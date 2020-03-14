<template>
  <v-row justify="center">
    <v-btn color="primary" @click.stop="dialog = true">
      Open Dialog
    </v-btn>

    <v-dialog v-model="dialog" max-width="290">
      <v-card>
        <v-card-title class="headline">Comfirmantion</v-card-title>

        <v-card-text>
          <p>Your input is not saved!</p>
          <p>Do you really want to discard them?</p>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="secondary" text @click="clickYes">
            Yes
          </v-btn>
          <v-btn color="success" text @click="clickNo">
            No
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  props: {
    yes: {
      type: Function
    },
    no: {
      type: Function
    }
  },
  data: () => ({
    dialog: false
  }),
  computed: {},
  methods: {
    open() {
      console.log("yoyo");
      this.dialog = true;
    },
    clickYes() {
      this.yes && this.yes();
      this.dialog = false;
    },
    clickNo() {
      this.no && this.no();
      this.dialog = false;
    }
  }
};
</script>
