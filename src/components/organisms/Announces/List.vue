<template>
  <v-card class="mb-6" tile>
    <v-list disabled>
      <v-subheader>List</v-subheader>
      <v-list-item-group color="primary">
        <v-list-item v-for="item in announces" :key="item.id">
          <v-list-item-icon>
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="item.text"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-card>
</template>

<script>
export default {
  computed: {
    announces() {
      return this.$store.getters["announces/getList"];
    }
  }
};
</script>
