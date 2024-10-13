<template>
  <input
    type="number"
    :value="storeValue"
    @input="
      (event) => {
        $emit(`update${label.replace(/\s/g, '')}`, event.target.value);
      }
    "
    class="text-tertiary-text input input-bordered w-full max-w-20"
    :min="min"
    :max="max"
  />
</template>

<script setup>
import { useShadowStore } from "../stores/ShadowStore";
const props = defineProps({
  label: String,
  storeValue: Number,
  min: Number,
  max: Number,
});
</script>

<style lang="scss" scoped></style>
