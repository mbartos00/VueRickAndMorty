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
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();
const searchbarValue = ref(route.query.name || '');

const search = () => {
  router.push({
    path: 'characters',
    query: { name: searchbarValue.value },
  });
};
</script>
