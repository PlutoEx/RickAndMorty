<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "NavHeader"
})
</script>

<template>
  <div class="wrapper">
    <RouterLink class="nav-link" to="/">Characters</RouterLink>
    <RouterLink class="nav-link" to="/locations">Locations</RouterLink>
    <RouterLink class="nav-link" to="/episodes">Episodes</RouterLink>
  </div>
</template>

<style scoped>
  .wrapper {
    display: flex;
    justify-content: space-evenly;
  }
</style>