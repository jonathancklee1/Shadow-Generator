<template>
  <div class="mt-6 flex flex-col gap-4 bg-white p-6">
    <div>
      <div class="relative">
        <label for="range" class="mb-8 block text-center text-xl font-medium"
          >Horizontal Offset</label
        >
        <TextInput
          label="Horizontal Offset"
          class="absolute right-0 top-0"
          :storeValue="+shadowStore.horizontalOffset"
        />
      </div>
      <Slider
        label="Horizontal Offset"
        @update-horizontal-offset="
          (value) => {
            shadowStore.setHorizontalOffset(value);
          }
        "
        :storeValue="+shadowStore.horizontalOffset"
      />
    </div>
    <div>
      <div class="relative">
        <label for="range" class="mb-8 block text-center text-xl font-medium"
          >Vertical Offset</label
        >
        <TextInput
          label="Vertical Offset"
          class="absolute right-0 top-0"
          :storeValue="+shadowStore.verticalOffset"
        />
      </div>
      <Slider
        label="Vertical Offset"
        @update-vertical-offset="
          (value) => {
            shadowStore.setVerticalOffset(value);
          }
        "
        :storeValue="+shadowStore.verticalOffset"
      />
    </div>

    <div>
      <div class="relative">
        <label for="range" class="mb-8 block text-center text-xl font-medium"
          >Blur Radius</label
        >
        <TextInput
          label="Blur Radius"
          class="absolute right-0 top-0"
          :storeValue="+shadowStore.blurRadius"
        />
      </div>
      <Slider
        label="Blur Radius"
        @update-blur-radius="
          (value) => {
            shadowStore.setBlurRadius(value);
          }
        "
        :storeValue="+shadowStore.blurRadius"
      />
    </div>

    <div>
      <div class="relative">
        <label for="range" class="mb-8 block text-center text-xl font-medium"
          >Spread</label
        >
        <TextInput
          label="Spread"
          class="absolute right-0 top-0"
          :storeValue="+shadowStore.spread"
        />
      </div>
      <Slider
        label="Spread"
        @update-spread="
          (value) => {
            shadowStore.setSpread(value);
          }
        "
        :storeValue="+shadowStore.spread"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import Slider from "./Slider.vue";
import TextInput from "./TextInput.vue";
import { useShadowStore } from "../stores/ShadowStore";
const shadowStore = useShadowStore();
</script>

<style scoped></style>
