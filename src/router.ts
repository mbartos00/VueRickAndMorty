import { createMemoryHistory, createRouter } from 'vue-router';

import Characters from './pages/Characters.vue';

const routes = [{ path: '/', component: Characters }];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
