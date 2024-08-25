<template>
  <header class="bg-peach px-6 py-4 flex justify-between">
    <div class="flex gap-2">
      <RouterLink to="/characters" active-class="text-white" class="hover:text-white"
        >Characters</RouterLink
      >
      <RouterLink to="/favourites" active-class="text-white" class="hover:text-white"
        >Favourites</RouterLink
      >
    </div>
    <div class="flex items-center gap-2">
      <img class="size-6" src="../assets/heart-thin-icon.svg" alt="heart icon" />
      <p>{{ totalFavourites }}</p>
    </div>
  </header>
</template>

<script setup>
import { useFavouritesStore } from '../store/store';

const { totalFavourites } = useFavouritesStore();
</script>
