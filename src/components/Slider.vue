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
        (event) => {
          if (event.target) {
            const value = (event.target as HTMLInputElement).value;
            $emit(`update${label?.replace(/\s/g, '')}`, value);
          }
        }
      "
    />
  </div>
</template>

<script setup lang="ts">
defineProps({
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
