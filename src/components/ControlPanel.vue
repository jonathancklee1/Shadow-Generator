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
          :storeValue="+latestHorizontalOffset"
          @update-horizontal-offset="
            (value) => {
              shadowStore.setHorizontalOffset(value);
            }
          "
        />
      </div>
      <Slider
        label="Horizontal Offset"
        @update-horizontal-offset="
          (value) => {
            shadowStore.setHorizontalOffset(value);
          }
        "
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
          class="absolute right-0 top-0"
          :storeValue="+latestVerticalOffset"
          @update-vertical-offset="
            (value) => {
              shadowStore.setVerticalOffset(value);
            }
          "
        />
      </div>
      <Slider
        label="Vertical Offset"
        @update-vertical-offset="
          (value) => {
            shadowStore.setVerticalOffset(value);
          }
        "
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
          class="absolute right-0 top-0"
          :storeValue="+latestBlurRadius"
          @update-blur-radius="
            (value) => {
              shadowStore.setBlurRadius(value);
            }
          "
        />
      </div>
      <Slider
        label="Blur Radius"
        @update-blur-radius="
          (value) => {
            shadowStore.setBlurRadius(value);
          }
        "
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
          class="absolute right-0 top-0"
          :storeValue="+latestSpread"
          @update-spread="
            (value) => {
              shadowStore.setSpread(value);
            }
          "
        />
      </div>
      <Slider
        label="Spread"
        @update-spread="
          (value) => {
            shadowStore.setSpread(value);
          }
        "
        :storeValue="+latestSpread"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import Slider from "./Slider.vue";
import TextInput from "./TextInput.vue";
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
