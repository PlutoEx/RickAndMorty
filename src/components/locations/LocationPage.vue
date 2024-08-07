<script lang="ts">
import {defineComponent} from 'vue'
import {getLocation} from "@/APIs/locations";

export default defineComponent({
  name: "LocationPage",
  props: {
    id: {
      type: String,
      required: true
    },
  },
  data() {
      return {
        location: {
          name: '',
          type: '',
          dimension: '',
          residents: []
        }
      }
  },
  async mounted() {
    const locationData = await getLocation(parseInt(this.id))
    this.location = locationData;
  },
})
</script>

<template>
  <div class="item">
    <span>{{location.name}}</span>
    <span>{{location.type}}</span>
    <span>{{location.dimension}}</span>
<!--    TODO: ADD location.residents -->
  </div>
</template>
