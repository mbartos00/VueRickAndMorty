<template>
  <div class="p-8">
    <h1 class="text-3xl text-white font-semibold mx-auto w-fit" v-if="error">{{ error }}</h1>
    <div class="flex bg-pink text-accent">
      <div class="w-2/3 p-4 flex flex-col gap-4">
        <h2 class="text-3xl">{{ character?.name }}</h2>
        <p class="font-semibold">{{ character?.species }} - {{ character?.status }}</p>
        <p>Last known location: {{ character?.location.name }}</p>
        <p>First seen in: {{ character?.episode[0] }}</p>
        <button
          class="mt-4 px-4 py-2 w-fit bg-accent text-white rounded transition-all duration-150 hover:bg-green hover:text-accent"
          @click="toggleFavourite()"
        >
          {{ isFav ? 'Remove from favourites' : 'Add to favourites' }}
        </button>
      </div>
      <img :src="character?.image" :alt="character?.name + 'image'" class="w-1/3 aspect-[3/2]" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue';
import { useCharacterStore, useFavouritesStore } from '../store/store';
import { useRoute } from 'vue-router';

const route = useRoute();
const store = useCharacterStore();
const { isFavourite, addFavourite, removeFavourite } = useFavouritesStore();

const character = computed(() => store.character);
const error = computed(() => store.error);

onMounted(() => {
  store.fetchCharacter(Number(route.params.id));
});

const isFav = computed(() => isFavourite(Number(route.params.id)));

const toggleFavourite = () =>
  isFav.value ? removeFavourite(character.value!.id) : addFavourite(character.value!);
</script>
