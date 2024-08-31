import { createRouter, createWebHistory } from 'vue-router';

import Characters from './pages/Characters.vue';
import Favourites from './pages/Favourites.vue';
import Home from './pages/Home.vue';
import CharacterDetails from './pages/CharacterDetails.vue';

const routes = [
  { path: '/', component: Home },
  {
    path: '/characters',
    component: Characters,
  },
  {
    path: '/characters/:id',
    component: CharacterDetails,
  },
  { path: '/favourites', component: Favourites },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
