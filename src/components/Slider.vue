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
});
</script>

<style scoped>
input {
  --range-shdw: none;
}
</style>
