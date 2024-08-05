<script lang="ts">
import CharactersMenu from "@/components/CharactersMenu.vue";
import {defineComponent} from "vue";

export default defineComponent({
  name: "HomeView.vue",
  components: {CharactersMenu},
  props: {
    page: {
      type: String,
      required: false
    }
  }
})

</script>

<template>
  <main>
    <CharactersMenu :page="page"/>
  </main>
</template>
