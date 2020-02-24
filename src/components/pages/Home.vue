<template>
  <div>
    <Announces />
    <div>
      <v-btn :to="{ name: 'AnnounceForm' }">Add</v-btn>
    </div>
  </div>
</template>

<script>
import Announces from "@/components/organisms/Announces/List";

export default {
  components: {
    Announces
  }
};
</script>
