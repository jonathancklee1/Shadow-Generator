<template>
  <div
    class="mt-6 flex aspect-square flex-col items-center justify-center bg-white"
  >
    <div
      class="h-20 w-52 bg-slate-500"
      ref="shadowPreview"
      :style="shadowClass"
    ></div>
  </div>
</template>

<script setup lang="ts">
import { useShadowStore } from "../stores/ShadowStore";
import { storeToRefs } from "pinia";
const shadowStore = useShadowStore();
const { shadowClass } = storeToRefs(shadowStore);
</script>

<style scoped></style>
