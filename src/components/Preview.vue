<template>
  <div
    class="mt-6 flex aspect-square flex-col items-center justify-center bg-white"
  >
    <div class="h-20 w-52 bg-slate-500"></div>
    <div>
      {{ shadowStore.shadowClass }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { useShadowStore } from "../stores/ShadowStore";
const shadowStore = useShadowStore();
</script>

<style scoped></style>
