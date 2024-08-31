<template>
  <form class="flex" @change="applyFilters">
    <RadioButton v-model="specie" value="" label="All" id="all" name="specie" />
    <RadioButton v-model="specie" value="human" label="Human" id="human" name="specie" />
    <RadioButton v-model="specie" value="animal" label="Animal" id="animal" name="specie" />
    <RadioButton v-model="specie" value="alien" label="Alien" id="alien" name="specie" />
  </form>
</template>

<script setup lang="ts">
import RadioButton from './RadioButton.vue';
import { ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();
const specie = ref(route.query.species?.toString() || '');

watch(
  () => route.query,
  newQuery => {
    specie.value = newQuery.species?.toString() || '';
  }
);

const applyFilters = () => {
  const updatedQuery = { ...route.query };
  updatedQuery.species = specie.value;

  router.push({
    path: 'characters',
    query: updatedQuery,
  });
};
</script>
