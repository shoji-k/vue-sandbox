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
          @change="changeVersion"
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
          :background-color="translated(line) ? '' : 'red lighten-4'"
          v-model="line.text"
          @blur="checkTranslated(line)"
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
            <v-btn color="secondary" text @click="discard">
              Yes
            </v-btn>
            <v-btn color="success" text @click="loadBack">
              No
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </v-container>
</template>

<script>
export default {
  components: {},
  data: () => ({
    dialog: false,

    version: 3,
    previousVersion: 3,
    versions: [
      { value: 1, text: "1" },
      { value: 2, text: "2" },
      { value: 3, text: "3" }
    ],
    allLines: [
      {
        id: 1,
        version: 1,
        text: "Hey",
        savedText: "Hey",
        translated: "へい",
        translated_status: "translated"
      },
      {
        id: 2,
        version: 2,
        text: "Yoo",
        savedText: "Yo",
        translated: "よ",
        translated_status: "not_translated"
      },
      {
        id: 3,
        version: 3,
        text: "Men",
        savedText: "Men",
        translated: "めん",
        translated_status: "translated"
      },
      {
        id: 4,
        version: 3,
        text: "Foo",
        savedText: "Foo",
        translated: "フー",
        translated_status: "translated"
      }
    ]
  }),
  computed: {
    lines() {
      return this.allLines.filter(l => l.version === this.version);
    }
  },
  methods: {
    translated(line) {
      return line.translated_status === "translated";
    },
    checkTranslated(one) {
      let newStatus = null;
      if (
        one.text !== one.savedText &&
        one.translated_status === "translated"
      ) {
        newStatus = "not_translated";
      }
      if (
        one.text === one.savedText &&
        one.translated_status === "not_translated"
      ) {
        newStatus = "translated";
      }
      if (newStatus) {
        this.allLines = this.allLines.map(l => {
          if (l.id === one.id) {
            return {
              ...l,
              translated_status: newStatus
            };
          }
          return l;
        });
      }
    },
    hasDirtyLine() {
      return this.allLines
        .filter(l => l.version === this.previousVersion)
        .some(l => l.text !== l.savedText);
    },
    changeVersion(value) {
      console.log(value);
      if (this.hasDirtyLine()) {
        this.openDiscardDialog();
      } else {
        this.previousVersion = this.version;
      }
    },
    discardInputs() {
      this.allLines = this.allLines.map(l => {
        if (l.version === this.previousVersion) {
          return {
            ...l,
            text: l.savedText
          };
        }
        return l;
      });
    },

    openDiscardDialog() {
      this.dialog = true;
    },
    discard() {
      this.dialog = false;
      this.discardInputs();
      this.previousVersion = this.version;
    },
    loadBack() {
      this.dialog = false;
      this.version = this.previousVersion;
    }
  },
  created() {}
};
</script>
