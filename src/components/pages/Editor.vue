<template>
  <v-container>
    <v-row>
      <v-col>
        <v-select
          v-model="version"
          label="version"
          :items="versions"
          item-text="text"
          item-value="value"
          @change="changeVersion"
        />
      </v-col>
    </v-row>
    <v-row
      v-for="line in lines"
      :key="line.id"
    >
      <v-col>
        <v-textarea
          v-model.lazy="line.text"
          rows="1"
          flat
          light
          auto-grow
          outlined
          full-width
          dense
          :background-color="
            line.translatedStatus === 'translated' ? '' : 'red lighten-4'
          "
          @blur="checkTranslated(line)"
        />
      </v-col>
      <v-col>
        <v-textarea
          v-model="line.translated"
          rows="1"
          flat
          light
          auto-grow
          outlined
          full-width
          dense
          readonly
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="2">
        <v-btn
          color="primary"
          @click="save"
        >
          Save
        </v-btn>
      </v-col>
      <v-col cols="2">
        <v-btn
          color="secondary"
          @click="translate"
        >
          Translate
        </v-btn>
      </v-col>
    </v-row>
    <DiscardDialog
      ref="discardDialog"
      :yes="discardInputs"
      :no="versionBack"
      :hide-button="true"
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
        translatedStatus: "translated",
        savedTranslatedStatus: "translated"
      },
      {
        id: 2,
        version: 2,
        text: "Yoo",
        savedText: "Yo",
        translated: "よ",
        translatedStatus: "not_translated",
        savedTranslatedStatus: "not_translated"
      },
      {
        id: 3,
        version: 3,
        text: "Men",
        savedText: "Men",
        translated: "めん",
        translatedStatus: "translated",
        savedTranslatedStatus: "translated"
      },
      {
        id: 4,
        version: 3,
        text: "Foo",
        savedText: "Foo",
        translated: "フー",
        translatedStatus: "translated",
        savedTranslatedStatus: "translated"
      }
    ]
  }),
  computed: {
    lines() {
      return this.allLines.filter(l => l.version === this.version);
    }
  },
  created() {},
  methods: {
    save() {
      this.allLines = this.allLines.map(l => {
        if (l.version === this.version) {
          return {
            ...l,
            savedText: l.text,
            savedTranslatedStatus: l.translatedStatus
          };
        }
        return l;
      });
    },
    translate() {
      this.allLines = this.allLines.map(l => {
        if (l.version === this.version) {
          return {
            ...l,
            translatedStatus: "translated"
          };
        }
        return l;
      });
    },
    checkTranslated(one) {
      let newStatus = null;
      if (one.text !== one.savedText && one.translatedStatus === "translated") {
        newStatus = "not_translated";
      }
      if (one.text === one.savedText) {
        newStatus = one.savedTranslatedStatus;
      }
      if (newStatus) {
        this.allLines = this.allLines.map(l => {
          if (l.id === one.id) {
            return {
              ...l,
              translatedStatus: newStatus
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
    versionBack() {
      this.version = this.previousVersion;
    }
  }
};
</script>
