<script lang="ts">
import {defineComponent} from 'vue'
import LocationsMenu from "@/components/locations/LocationsMenu.vue";

export default defineComponent({
  name: "LocationsView",
  components: {LocationsMenu},
  data() {
    return {
      page: this.$route.query.page,
    }
  },
  created() {
    this.$watch(
      () => this.$route.query.page,
      (newPage) => {
        this.page = newPage;
      }
    )
  },
})
</script>

<template>
  <LocationsMenu :page="page"/>
</template>
