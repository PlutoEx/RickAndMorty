<script lang="ts">
import type {PropType} from "vue";

interface CharacterType {
  image: string,
  id: number,
  name: string,
  status: string,
  species: string,
  type: string,
  gender: string,
  origin: { name: string }
}

// TODO: move interface

export default {
  props: {
    character: {
      type: Object as PropType<CharacterType>,
      required: true
    },
  },
}
</script>

<template>
  <div class="card-wrapper">
    <RouterLink :to="`/character/${character.id}`">
      <div class="card">
        <img :src="character.image" alt="NOT FOUND">
        <div class="description">
          <div>{{ character.name }}</div>
          <div>{{ character.status }}</div> <!-- TODO: Blur-->
          <div>{{ character.species }}</div>
          <div>{{ character.type }}</div>
          <div>{{ character.gender }}</div>
          <div>{{ character.origin.name }}</div>
        </div>
      </div>
    </RouterLink>
  </div>
</template>

<style scoped>
.card-wrapper {
  width: 200px;
}

.card {
  box-shadow: 1px 1px black;
  border-radius: 20px;

  overflow: hidden;
  background: var(--color-background-mute);
}

.description {
  padding: 0 0 10px 10px;
}

img {
  width: 200px;
  height: 200px;
}


</style>