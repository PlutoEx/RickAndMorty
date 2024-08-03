<script lang="ts">
import type {PropType} from "vue";

interface CharacterType {image: string, name: string, status: string, species: string, type: string, gender: string, origin: {name: string}}

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
  <div>
    <div><img :src="character.image" alt="NOT FOUND"></div>
    <div>
      <div>{{character.name}}</div>
      <div>{{character.status}}</div> <!-- TODO: Blur-->
      <div>{{character.species}}</div>
      <div>{{character.type}}</div>
      <div>{{character.gender}}</div>
      <div>{{character.origin.name}}</div>
    </div>
  </div>
</template>