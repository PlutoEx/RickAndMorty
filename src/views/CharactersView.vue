<script lang="ts">
import CharactersMenu from "@/components/characters/CharactersMenu.vue";
import {defineComponent} from "vue";

export default defineComponent({
  name: "CharactersView.vue",
  components: {CharactersMenu},
  data() {
    return {
      page: this.$route.query.page,
    }
  },
  created() {
    this.$watch(
      () => this.$route.query.page,
      (newPage) => {
        this.page = newPage;
      }
    )
  },
})

</script>

<template>
  <CharactersMenu :page="page"/>
</template>
