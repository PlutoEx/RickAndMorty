<script lang="ts">
import {defineComponent} from 'vue'
import PageNav from "@/components/PageNav.vue";
import LocationCard from "@/components/locations/LocationCard.vue";
import {getLocations} from "@/APIs/locations";

export default defineComponent({
  name: "LocationsMenu",
  components: {LocationCard, PageNav},
  data() {
    return {
      locations: []
    }
  },
  props: {
    page: {
      type: null,
      default: 1,
      required: false
    }
  },
  async mounted() {
    const locationsData = await getLocations(this.page)
    this.locations = locationsData.results;
  },
  watch: {
    async page() {
      const locationsData = await getLocations(this.page)
      this.locations = locationsData.results;
    }
  }
})
</script>

<template>
  <div class="wrapper">
    <div class="card-wrapper">
    <LocationCard v-for="location in locations" :key="location.id"
                  :location="location">
    </LocationCard>
    </div>
    <PageNav :page="parseInt(page)" path="/locations"/>
  </div>
</template>

<style scoped>

</style>