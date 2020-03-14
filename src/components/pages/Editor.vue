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
    <DiscardDialog
      ref="discardDialog"
      :yes="discardInputs"
      :no="loadBack"
      :hideButton="true"
    />
  </v-container>
</template>

<script>
import DiscardDialog from "@/components/organisms/Editor/DiscardDialog";

export default {
  components: {
    DiscardDialog
  },
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
    changeVersion() {
      if (this.hasDirtyLine()) {
        this.$refs.discardDialog.open();
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

      this.previousVersion = this.version;
    },
    loadBack() {
      this.version = this.previousVersion;
    }
  },
  created() {}
};
</script>
