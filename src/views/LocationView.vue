<script lang="ts">
import {defineComponent} from 'vue'
import LocationPage from "@/components/locations/LocationPage.vue";

export default defineComponent({
  name: "LocationView",
  components: {LocationPage},
  props: {
    location: {
      type: Object,
      required: true
    },
  },
})
</script>

<template>
  <LocationPage id="id"/>
</template>

<style scoped>

</style>