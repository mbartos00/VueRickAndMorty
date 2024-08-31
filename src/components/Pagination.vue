<template>
  <div class="mx-auto flex text-white justify-center items-center mt-4 gap-2">
    <button
      @click="handlePreviousPage"
      :disabled="Number(route.query.page) === 1"
      class="px-4 py-1 bg-accent text-white rounded transition-all duration-150 hover:bg-green hover:text-accent disabled:bg-gray-400"
    >
      Prev
    </button>
    <span>{{ Number(route.query.page ?? 1) }} of {{ props.pagination.pages }}</span>
    <button
      @click="handleNextPage"
      :disabled="Number(route.query.page) === props.pagination.pages"
      class="px-4 py-1 bg-accent text-white rounded transition-all duration-150 hover:bg-green hover:text-accent disabled:bg-gray-400"
    >
      Next
    </button>
  </div>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
import { PaginationInfo } from '../types/types';

const props = defineProps<{ pagination: PaginationInfo }>();

const route = useRoute();
const router = useRouter();

const handleNextPage = () => {
  if (Number(route.query.page) === props.pagination.pages) return;
  router.push({
    path: 'characters',
    query: { page: Number(route.query.page || 1) + 1 },
  });
};
const handlePreviousPage = () => {
  if (Number(route.query.page) === 1) return;

  router.push({
    path: 'characters',
    query: { page: Number(route.query.page) - 1 },
  });
};
</script>
