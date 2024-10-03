<template>
  <div>
    <div class="mb-2 flex justify-between text-xl">
      <span>{{ min }}</span>
      <span>{{ max }}</span>
    </div>
    <input
      ref="input"
      type="range"
      :min="min"
      :max="max"
      class="range"
      :value="storeValue"
      @input="
        (event) =>
          $emit(`update${label.replace(/\s/g, '')}`, event.target.value)
      "
    />
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  label: String,
  storeValue: Number,
  min: Number,
  max: Number,
});
</script>

<style scoped>
input {
  --range-shdw: none;
}
</style>
