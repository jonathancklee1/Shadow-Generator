<template>
  <div class="mt-6 flex flex-col gap-4 bg-white p-6">
    <Slider
      label="Horizontal Offset"
      @update-horizontal-offset="
        (value) => {
          shadowStore.setHorizontalOffset(value);
        }
      "
    />
    <Slider
      label="Vertical Offset"
      @update-vertical-offset="
        (value) => {
          shadowStore.setVerticalOffset(value);
        }
      "
    />
    <Slider
      label="Blur Radius"
      @update-blur-radius="
        (value) => {
          shadowStore.setBlurRadius(value);
        }
      "
    />
    <Slider
      label="Spread "
      @update-spread="
        (value) => {
          shadowStore.setSpread(value);
        }
      "
    />
  </div>
</template>

<script setup lang="ts">
import Slider from "./Slider.vue";
import { useShadowStore } from "../stores/ShadowStore";
const shadowStore = useShadowStore();
</script>

<style scoped></style>
