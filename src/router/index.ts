import { createRouter, createWebHistory } from 'vue-router'
import CharactersView from '../views/CharactersView.vue'
import CharacterView from "@/views/CharacterView.vue";
import LocationsView from "@/views/LocationsView.vue";
import EpisodesView from "@/views/EpisodesView.vue";
import LocationView from "@/views/LocationView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'characters',
      component: CharactersView,
    },
    {
      path: '/locations',
      name: 'locations',
      component: LocationsView,
    },
    {
      path: '/episodes',
      name: 'episodes',
      component: EpisodesView,
    },
    {
      path: '/character/:id',
      name: 'character',
      component: CharacterView,
      props: true
    },
    {
      path: '/locations/:id',
      name: 'location',
      component: LocationView,
      props: true
    },
    // {
    //   path: '/episodes/:id',
    //   name: 'episode',
    //   component: EpisodeView,
    //   props: true
    // },
  ]
})

export default router
