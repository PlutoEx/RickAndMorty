<script lang="ts">
import {defineComponent, type PropType} from 'vue'

export default defineComponent({
  name: "LocationCard.vue",
  props: {
    location: {
      type: Object,
      required: true
    },
  },
})
</script>

<template>
  <div class="item">
    <RouterLink :to="`/locations/${location.id}`">
        <span>{{location.name}}</span>
        <span>{{location.type}}</span>
        <span>{{location.dimension}}</span>
    </RouterLink>
  </div>
</template>
