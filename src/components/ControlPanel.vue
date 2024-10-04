<template>
  <div
    class="mt-6 flex flex-col gap-4 bg-secondary-background p-6 text-secondary-text"
  >
    <div class="">
      <div class="relative">
        <label for="range" class="mb-8 block text-center text-xl font-medium"
          >Horizontal Offset</label
        >
        <TextInput
          label="Horizontal Offset"
          class="absolute right-0 top-0 text-primary-text"
          :storeValue="+latestHorizontalOffset"
          @update-horizontal-offset="
            (value) => {
              shadowStore.setHorizontalOffset(value);
            }
          "
          :min="-100"
          :max="100"
        />
      </div>
      <Slider
        label="Horizontal Offset"
        @update-horizontal-offset="
          (value) => {
            shadowStore.setHorizontalOffset(value);
          }
        "
        :min="-100"
        :max="100"
        :storeValue="+latestHorizontalOffset"
      />
    </div>
    <div>
      <div class="relative">
        <label for="range" class="mb-8 block text-center text-xl font-medium"
          >Vertical Offset</label
        >
        <TextInput
          label="Vertical Offset"
          class="absolute right-0 top-0 text-primary-text"
          :storeValue="+latestVerticalOffset"
          @update-vertical-offset="
            (value) => {
              shadowStore.setVerticalOffset(value);
            }
          "
          :min="-100"
          :max="100"
        />
      </div>
      <Slider
        label="Vertical Offset"
        @update-vertical-offset="
          (value) => {
            shadowStore.setVerticalOffset(value);
          }
        "
        :min="-100"
        :max="100"
        :storeValue="+latestVerticalOffset"
      />
    </div>

    <div>
      <div class="relative">
        <label for="range" class="mb-8 block text-center text-xl font-medium"
          >Blur Radius</label
        >
        <TextInput
          label="Blur Radius"
          class="absolute right-0 top-0 text-primary-text"
          :storeValue="+latestBlurRadius"
          @update-blur-radius="
            (value) => {
              shadowStore.setBlurRadius(value);
            }
          "
          :min="0"
          :max="100"
        />
      </div>
      <Slider
        label="Blur Radius"
        @update-blur-radius="
          (value) => {
            shadowStore.setBlurRadius(value);
          }
        "
        :min="0"
        :max="100"
        :storeValue="+latestBlurRadius"
      />
    </div>

    <div>
      <div class="relative">
        <label for="range" class="mb-8 block text-center text-xl font-medium"
          >Spread</label
        >
        <TextInput
          label="Spread"
          class="absolute right-0 top-0 text-primary-text"
          :storeValue="+latestSpread"
          @update-spread="
            (value) => {
              shadowStore.setSpread(value);
            }
          "
          :min="-100"
          :max="100"
        />
      </div>
      <Slider
        label="Spread"
        @update-spread="
          (value) => {
            shadowStore.setSpread(value);
          }
        "
        :min="-100"
        :max="100"
        :storeValue="+latestSpread"
      />
    </div>
    <div>
      <div class="relative flex flex-col justify-center">
        <label for="range" class="mb-8 block text-center text-xl font-medium"
          >Inset</label
        >
        <BinaryToggle />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Slider from "./Slider.vue";
import TextInput from "./TextInput.vue";
import BinaryToggle from "./BinaryToggle.vue";
import { useShadowStore } from "../stores/ShadowStore";
import { ref } from "vue";
const shadowStore = useShadowStore();
let latestHorizontalOffset = ref(0);
let latestVerticalOffset = ref(0);
let latestBlurRadius = ref(0);
let latestSpread = ref(0);
shadowStore.$subscribe((mutation, state) => {
  // console.log("Store updated:" + state.horizontalOffset + state.verticalOffset);
  latestHorizontalOffset.value = state.horizontalOffset;
  latestVerticalOffset.value = state.verticalOffset;
  latestBlurRadius.value = state.blurRadius;
  latestSpread.value = state.spread;
});
</script>

<style scoped></style>
