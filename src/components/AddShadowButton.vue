<template>
  <button
    class="shadow-solid mt-4 w-full border-2 border-secondary-background bg-primary-background p-4 text-sm font-medium uppercase text-secondary-background transition-all hover:bg-secondary-background hover:text-primary-background"
    @click="store.addShadow"
  >
    + Add Shadow
  </button>
</template>

<script setup lang="ts">
import { useShadowStore } from "../stores/ShadowStore";
const store = useShadowStore();
</script>

<style lang="scss" scoped></style>
