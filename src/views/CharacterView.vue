<script lang="ts">
import {defineComponent, type PropType} from 'vue'
import {getCharacter} from "@/APIs/characters";

interface CharacterType {
  image: string,
  name: string,
  status: string,
  species: string,
  type: string,
  gender: string,
  origin: { name: string }
}

export default {
  name: "CharacterView",
  props: {
    id: {
      type: String,
      required: true
    },
    characterProp: {
      type: Object as PropType<CharacterType>,
      required: false
    }
  },
  data() {
      return {
        character: {
  image: '',
  name: '',
  status: '',
  species: '',
  type: '',
  gender: '',
  origin: { name: '' }
}
      }
  },
  async mounted() {
    if (!this.characterProp) {
      const characterData = await getCharacter(parseInt(this.id))
      if (Object.prototype.hasOwnProperty.call(characterData, 'image'))
        this.character = characterData;
    }
    else
      this.character = this.characterProp;
  },
}
</script>

<template>
  <div class="wrapper">
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
</template>

<style scoped>
  .wrapper {
    max-width: 800px;
    margin: 2rem auto;
    display: flex;
    justify-content: space-between;
  }

  .description {
    width: 40%;
    right: 0;
  }
</style>