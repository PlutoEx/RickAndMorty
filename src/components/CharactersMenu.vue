<script lang="ts">
import {getCharacters} from "@/APIs/characters";
import TheCharacter from "@/components/CharacterCard.vue";

export default {
  data() {
    return {
      MAX_COUNT: 0,
      characters: []
    }
  },
  props: {
    page: {
      type: null,
      required: false
    }
  },
  async mounted() {
    const charactersData = await getCharacters(this.page)
    this.MAX_COUNT = charactersData.info.count;
    this.characters = charactersData.results;
  },
  components: {
    TheCharacter,
  }
}
</script>

<template>
  <div class="wrapper">
    <TheCharacter v-for="character in characters" :key="character.id"
                  :character="character">
    </TheCharacter>
  </div>
</template>

<style scoped>
  .wrapper {
    display: grid;
    padding: 2rem 0;
    grid-template-columns: repeat(auto-fit, 200px);
    gap: 5px;
    justify-content: center;
    justify-items: center;
    background: var(--color-background-soft);
  }
</style>