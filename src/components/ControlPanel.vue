<template>
  <div class="mt-6 flex flex-col gap-4 bg-white p-6">
    <Slider label="Horizontal Offset" />
    <Slider label="Vertical Offset" />
    <Slider label="Blur Radius" />
    <Slider label="Spread" />
  </div>
</template>

<script setup lang="ts">
import Slider from "./Slider.vue";
</script>

<style scoped></style>
