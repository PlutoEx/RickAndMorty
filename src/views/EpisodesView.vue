<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "EpisodesView",
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
  Episodes
</template>
