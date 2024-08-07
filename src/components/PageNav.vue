<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "PageNav",
  props: {
    page: {
      type: Number,
      default: 1,
      required: false
    },
    path: {
      type: String,
      required: true
    }
  },
  computed: {
    beforePageCalc() {
      let res: number[] = [];
      for (let i = this.page - 1; i >= Math.max(this.page - 3, 1); i--)
        res.push(i);
      return res.reverse();
    },
    afterPageCalc() {
      let res: number[] = [];
      for (let i = this.page + 1; i <= Math.min(this.page + 3, 42); i++)
        res.push(i);
      return res;
    }
  }
})
</script>

<template>
  <div class="wrapper">

    <RouterLink class="before-page"
                v-for="beforePage in beforePageCalc"
                :to="{path: path, query: {page: beforePage}}"
                :key="beforePage">{{ beforePage }}
    </RouterLink>
    <div class="cur-page">{{ page }}</div>
    <RouterLink class="after-page"
                v-for="afterPage in afterPageCalc"
                :to="{path: path, query: {page: afterPage}}"
                :key="afterPage">{{ afterPage }}
    </RouterLink>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}

.cur-page {
  padding: 1rem 1.5rem;
  background: var(--color-background-soft);
  border-radius: 100%;
}

.before-page, .after-page {
  padding: 0.5rem 1rem;
  border-radius: 100%;
}
</style>