<template>
  <div class="bg-accent py-6 px-8 flex gap-6 flex-wrap">
    <FilterRadioButtons />
    <Searchbar />
    <button type="reset" class="bg-peach px-4 text-accent rounded-r-sm" @click="resetFilters">
      Reset filters
    </button>
  </div>
</template>

<script setup lang="ts">
import Searchbar from './Searchbar.vue';
import FilterRadioButtons from './FilterRadioButtons.vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const resetFilters = () => {
  router.push({
    path: 'characters',
    query: {},
  });
};
</script>
