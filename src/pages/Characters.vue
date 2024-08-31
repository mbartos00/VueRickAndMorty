<template>
  <Filters />
  <div class="p-8">
    <h1 class="text-3xl text-white font-semibold mx-auto w-fit" v-if="error">{{ error }}</h1>
    <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      <Card v-for="character in characters" :key="character.id" :character="character" />
    </div>
    <Pagination v-if="pagination && !error" :pagination="pagination" />
  </div>
</template>

<script setup lang="ts">
import Card from '../components/Card.vue';
import Pagination from '../components/Pagination.vue';
import Filters from '../components/Filters.vue';
import { computed, onMounted, watch } from 'vue';
import { useCharacterStore } from '../store/store';
import { useRoute } from 'vue-router';

const store = useCharacterStore();
const route = useRoute();

const pagination = computed(() => store.paginationInfo);
const characters = computed(() => store.characters);
const error = computed(() => store.error);

onMounted(() => {
  store.fetchAllCharacters({ ...route.query });
});

watch(route, newRoute => {
  store.fetchAllCharacters({ ...newRoute.query });
});
</script>
