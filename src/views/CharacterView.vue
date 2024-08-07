<script lang="ts">
import CharacterPage from "@/components/characters/CharacterPage.vue";

export default {
  name: "CharacterView",
  components: {CharacterPage},
  props: {
    id: {
      type: String,
      required: true
    }
  },
}
</script>

<template>
  <CharacterPage :id="id"/>
</template>
