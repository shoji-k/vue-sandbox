<template>
  <v-card
    class="mb-6"
    tile
  >
    <v-list>
      <v-subheader>List</v-subheader>
      <v-list-item-group color="primary">
        <v-list-item
          v-for="item in announces"
          :key="item.id"
          @click="edit(item.id)"
        >
          <v-list-item-icon>
            <v-icon v-text="item.icon" />
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="item.text" />
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-card>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({ announces: "announces/list" })
  },
  methods: {
    edit(id) {
      this.$router.push({ name: "AnnounceFormEdit", params: { id: id } });
    }
  }
};
</script>
