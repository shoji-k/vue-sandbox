<template>
  <v-container>
    <v-row>
      <v-col>
        <v-select
          v-model="item"
          label="Selection"
          :items="items"
          item-text="text"
          item-value="value"
          @click="click"
          @change="change"
          @input="input"
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="1">
        <v-btn @click="item = 1">
          Choose Hey
        </v-btn>
      </v-col>
      <v-col cols="1">
        <v-btn @click="item = 2">
          Choose Yo
        </v-btn>
      </v-col>
      <v-col cols="1">
        <v-btn @click="item = 3">
          Choose Men
        </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-data-table
          :headers="headers"
          :items="list"
          :items-per-page="5"
          class="elevation-1"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
const headers = [
  {
    text: "Dessert (100g serving)",
    align: "start",
    sortable: false,
    value: "name"
  },
  { text: "Calories", value: "calories" },
  { text: "Fat (g)", value: "fat" },
  { text: "Carbs (g)", value: "carbs" },
  { text: "Protein (g)", value: "protein" },
  { text: "Iron (%)", value: "iron" }
];

export default {
  components: {},
  data: () => ({
    item: null,
    items: [
      { text: "Hey", value: 1 },
      { text: "Yo", value: 2 },
      { text: "Men", value: 3 }
    ],
    desserts: [
      {
        name: "Frozen Yogurt",
        calories: 159,
        fat: 6.0,
        carbs: 24,
        protein: 4.0,
        iron: "1%",
        value: 1
      },
      {
        name: "Ice cream sandwich",
        calories: 237,
        fat: 9.0,
        carbs: 37,
        protein: 4.3,
        iron: "1%",
        value: 2
      },
      {
        name: "Eclair",
        calories: 262,
        fat: 16.0,
        carbs: 23,
        protein: 6.0,
        iron: "7%",
        value: 3
      },
      {
        name: "Cupcake",
        calories: 305,
        fat: 3.7,
        carbs: 67,
        protein: 4.3,
        iron: "8%",
        value: 1
      }
    ]
  }),
  computed: {
    list() {
      if (this.item) {
        return this.desserts.filter(d => d.value === this.item);
      }
      return this.desserts;
    }
  },
  created() {
    this.headers = headers;
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
  }
};
</script>
