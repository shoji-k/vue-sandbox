<template>
  <v-container>
    <v-row>
      <v-col>
        <v-select
          label="version"
          :items="versions"
          v-model="version"
          item-text="text"
          item-value="value"
          @click="click"
          @change="change"
          @input="input"
        ></v-select>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="1">
        <v-btn @click="version = 1">Choose version 1</v-btn>
      </v-col>
      <v-col cols="1">
        <v-btn @click="version = 2">Choose version 2</v-btn>
      </v-col>
      <v-col cols="1">
        <v-btn @click="version = 3">Choose version 3</v-btn>
      </v-col>
    </v-row>
    <v-row v-for="line in lines" :key="line.id">
      <v-col>
        <v-textarea
          rows="1"
          flat
          light
          auto-grow
          outlined
          full-width
          dense
          v-model="line.text"
        />
      </v-col>
      <v-col>
        <v-textarea
          rows="1"
          flat
          light
          auto-grow
          outlined
          full-width
          dense
          readonly
          v-model="line.translated"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  components: {},
  data: () => ({
    version: null,
    versions: [
      { value: 1, text: "1" },
      { value: 2, text: "2" },
      { value: 3, text: "3" }
    ],
    lines: [
      { id: 1, text: "Hey", translated: "へい", status: "translated" },
      { id: 2, text: "Yo", translated: "よ", status: "not_translated" },
      { id: 3, text: "Men", translated: "めん", status: "translated" }
    ]
  }),
  computed: {
    sample() {
      return 1;
    }
  },
  methods: {
    click(value) {
      console.log("click", this.item, value);
    },
    change(value) {
      console.log("change", this.item, value);
      alert("stop");
      if (value === 1) {
        this.item = 3;
      }
    },
    input(value) {
      console.log("input", this.item, value);
    }
  },
  created() {}
};
</script>
