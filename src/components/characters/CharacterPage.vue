<script lang="ts">
import {defineComponent} from 'vue'
import {getCharacter} from "@/APIs/characters";

export default defineComponent({
  name: "CharacterPage",
  props: {
    id: {
      type: String,
      required: true
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
    const characterData = await getCharacter(parseInt(this.id))
    this.character = characterData;
  },
})
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