<template>
  <label :for="props.id" class="rounded-sm border border-primary">
    <input
      type="radio"
      :name="props.name"
      :id="props.id"
      class="hidden peer"
      :checked="isChecked"
      :value="value"
      @change="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    />
    <div
      class="text-white w-fit py-2 px-4 capitalize peer-checked:bg-yellow peer-checked:text-accent peer-checked:rounded-sm"
    >
      {{ props.label }}
    </div>
  </label>
</template>

<script setup lang="ts">
import { computed } from 'vue';

type RadioButtonProps = {
  label: string;
  id: string;
  name: string;
  value?: string;
  modelValue?: string;
};

const props = withDefaults(defineProps<RadioButtonProps>(), {
  value: undefined,
  modelValue: '',
});

defineEmits(['update:modelValue']);

const isChecked = computed(() => {
  return props.modelValue === props.value;
});
</script>
