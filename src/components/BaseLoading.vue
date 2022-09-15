<script setup>
const data = defineProps({
  loading: Boolean,
});
</script>

<template>
  <v-overlay v-model="loading" class="align-center justify-center">
    <v-progress-circular
      :size="50"
      color="secondary"
      indeterminate
    ></v-progress-circular>
  </v-overlay>
</template>
