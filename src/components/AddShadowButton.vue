<template>
  <button
    class="mt-4 w-full border-8 border-white bg-black p-4 text-xl font-bold uppercase text-white transition-all hover:bg-white hover:text-black"
    @click="store.addShadow"
  >
    Add Shadow
  </button>
</template>

<script setup lang="ts">
import { useShadowStore } from "../stores/ShadowStore";
const store = useShadowStore();
</script>

<style lang="scss" scoped></style>
