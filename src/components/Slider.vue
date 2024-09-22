<template>
  <div>
    <label for="range" class="mb-4 block text-center text-xl font-medium">{{
      label
    }}</label>
    <div class="mb-2 flex justify-between text-xl">
      <span>0</span>
      <span>100</span>
    </div>
    <input
      ref="input"
      type="range"
      min="0"
      max="100"
      class="range"
      v-model="sliderValue"
      style="--range-shdw: none"
    />
  </div>
</template>

<script setup lang="ts">
import { useTemplateRef, ref, watch } from "vue";
const sliderValue = ref(40);
const input = useTemplateRef("input");
watch(sliderValue, () => {
  console.log(sliderValue.value);
});
defineProps({
  label: String,
});
</script>

<style scoped></style>
