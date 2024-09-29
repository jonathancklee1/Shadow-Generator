<template>
  <div>
    <div class="mb-2 flex justify-between text-xl">
      <span>-100</span>
      <span>100</span>
    </div>
    <input
      ref="input"
      type="range"
      min="-100"
      max="100"
      class="range"
      v-model="sliderValue"
      @input="$emit(`update${label.replace(/\s/g, '')}`, sliderValue)"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const props = defineProps({
  label: String,
  storeValue: Number,
});
console.log(props.storeValue);
const sliderValue = ref(props.storeValue);
</script>

<style scoped>
input {
  --range-shdw: none;
}
</style>
