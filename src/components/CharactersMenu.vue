<script lang="ts">
import {getCharacters} from "@/APIs/characters";
import TheCharacter from "@/components/CharacterCard.vue";
import PageNav from "@/components/PageNav.vue";

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
      default: 1,
      required: false
    }
  },
  async mounted() {
    const charactersData = await getCharacters(this.page)
    this.MAX_COUNT = charactersData.info.count;
    this.characters = charactersData.results;
  },
  components: {
    PageNav,
    TheCharacter,
  },
  watch: {
    async page() {
      const charactersData = await getCharacters(this.page)
      this.MAX_COUNT = charactersData.info.count;
      this.characters = charactersData.results;
    }
  }
}
</script>

<template>
  <div class="wrapper">
    <div class="card-wrapper">
    <TheCharacter v-for="character in characters" :key="character.id"
                  :character="character">
    </TheCharacter>
    </div>
    <PageNav :page="parseInt(page)"/>
  </div>
</template>

<style scoped>
  .wrapper {
    background: var(--color-background);
  }

  .card-wrapper {
    display: grid;
    padding: 2rem 0 0 0;
    grid-template-columns: repeat(auto-fit, 200px);
    gap: 5px;
    justify-content: center;
    justify-items: center;
  }
</style>