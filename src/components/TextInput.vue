<template>
  <input
    type="number"
    :value="storeValue"
    @input="
      (event) => {
        $emit(`update${label.replace(/\s/g, '')}`, event.target.value);
        console.log('change', inputValue);
      }
    "
    class="input input-bordered w-full max-w-20"
    min="-100"
    max="100"
  />
</template>

<script setup>
import { useShadowStore } from "../stores/ShadowStore";
const props = defineProps({
  label: String,
  storeValue: Number,
});
</script>

<style lang="scss" scoped></style>
