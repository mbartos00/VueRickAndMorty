import { createMemoryHistory, createRouter } from 'vue-router';

import Characters from './pages/Characters.vue';
import Favourites from './pages/Favourites.vue';
import Home from './pages/Home.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/characters', component: Characters },
  { path: '/favourites', component: Favourites },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
