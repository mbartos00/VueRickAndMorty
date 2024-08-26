<script setup>
import Header from './components/Header.vue';
</script>

<template>
  <div class="bg-primary w-full min-h-[100svh]">
    <Header />
    <main>
      <RouterView v-slot="{ Component }">
        <Transition
          enter-active-class="duration-300 ease-out"
          enter-from-class="transform opacity-0 scale-75"
          enter-to-class="opacity-100 scale-100"
          leave-active-class="duration-200 ease-in"
          leave-from-class="opacity-100 scale-100"
          leave-to-class="transform opacity-0 scale-75"
        >
          <component :is="Component" />
        </Transition>
      </RouterView>
    </main>
  </div>
</template>
