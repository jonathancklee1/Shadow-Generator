<template>
  <input
    type="text"
    :placeholder="`${textValue}`"
    v-model="textValue"
    @input="
      $emit(`update${label.replace(/\s/g, '')}`, textValue);
      console.log('change', value);
    "
    class="input input-bordered w-full max-w-20"
    min="-100"
    max="100"
  />
</template>

<script setup>
import { ref } from "vue";
const props = defineProps({
  label: String,
  storeValue: Number,
});
console.log(props.storeValue);
const textValue = ref(props.storeValue);
</script>

<style lang="scss" scoped></style>
