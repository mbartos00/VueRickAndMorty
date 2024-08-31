<template>
  <div
    class="grid place-items-center gap-6 p-8 min-h-[88svh]"
    v-bind:class="totalFavourites ? 'grid-cols-4' : ''"
  >
    <h1 v-if="!totalFavourites" class="text-white text-3xl font-semibold">No favourites</h1>
    <Card v-else v-for="character of favourites" :key="character.id" :character="character" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import Card from '../components/Card.vue';
import { useFavouritesStore } from '../store/store';

const store = useFavouritesStore();

const favourites = computed(() => store.favourites);
const totalFavourites = computed(() => store.totalFavourites);
</script>
