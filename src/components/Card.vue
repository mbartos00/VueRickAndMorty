<template>
  <RouterLink
    :to="'characters/' + character.id"
    class="bg-pink w-full rounded-lg shadow-lg p-6 text-center"
  >
    <img :src="character.image" alt="Character Image" class="w-full h-auto rounded-lg mb-4" />
    <div class="space-y-2">
      <h2 class="text-xl font-semibold">{{ character.name }}</h2>
      <div class="flex gap-2 justify-center">
        <p class="text-accent"><strong>Species:</strong> {{ character.species }}</p>
        <p class="text-accent"><strong>Status:</strong> {{ character.status }}</p>
      </div>
    </div>
    <button
      class="mt-4 px-4 py-2 bg-accent text-white rounded transition-all duration-150 hover:bg-green hover:text-accent"
      @click="toggleFavourite()"
    >
      {{ isFav ? 'Remove from favourites' : 'Add to favourites' }}
    </button>
  </RouterLink>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { Character } from '../types/types';
import { useFavouritesStore } from '../store/store';

const { isFavourite, addFavourite, removeFavourite } = useFavouritesStore();

const props = defineProps<{ character: Character }>();

const isFav = computed(() => isFavourite(props.character.id));

const toggleFavourite = () =>
  isFav.value ? removeFavourite(props.character.id) : addFavourite(props.character);
</script>
