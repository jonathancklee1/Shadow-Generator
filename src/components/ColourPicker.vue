<template>
  <div class="relative flex h-20 w-full justify-center">
    <color-picker
      v-model:pureColor="pureColor"
      v-model:gradientColor="gradientColor"
      useType="pure"
      format="hex"
      disableHistory
      class="color-picker"
    />
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import { ColorInputWithoutInstance } from "tinycolor2";

const pureColor = ref<ColorInputWithoutInstance>("red");
const gradientColor = ref(
  "linear-gradient(0deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 100%)",
);
</script>
<style></style>
