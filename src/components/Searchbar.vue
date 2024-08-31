<template>
  <form class="flex" @submit.prevent="search">
    <input
      type="text"
      placeholder="Search by name..."
      class="rounded-l-sm p-2"
      v-model="searchbarValue"
    />
    <button type="submit" class="bg-peach px-4 text-accent rounded-r-sm">Search</button>
  </form>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();
const searchbarValue = ref(route.query.name || '');

watch(route, newRoute => {
  searchbarValue.value = newRoute.query.name?.toString() || '';
});

const search = () => {
  router.push({
    path: 'characters',
    query: { name: searchbarValue.value, ...route.query },
  });
};
</script>
