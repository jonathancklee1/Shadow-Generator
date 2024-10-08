<template>
  <div
    v-for="(shadow, index) in shadowStore.shadowArray"
    :key="index"
    class="mb-6 mt-6 flex flex-col gap-4 bg-secondary-background p-6 text-secondary-text"
  >
    <div class="">
      <div class="relative">
        <label for="range" class="mb-8 block text-center text-xl font-medium"
          >Horizontal Offset</label
        >
        <TextInput
          label="Horizontal Offset"
          class="absolute right-0 top-0 text-primary-text"
          :storeValue="+shadow.horizontalOffset"
          @update-horizontal-offset="
            (value) => {
              shadow.horizontalOffset = value;
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
            shadow.horizontalOffset = value;
          }
        "
        :min="-100"
        :max="100"
        :storeValue="+shadow.horizontalOffset"
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
          :storeValue="+shadow.verticalOffset"
          @update-vertical-offset="
            (value) => {
              shadow.verticalOffset = value;
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
            shadow.verticalOffset = value;
          }
        "
        :min="-100"
        :max="100"
        :storeValue="+shadow.verticalOffset"
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
          :storeValue="+shadow.blurRadius"
          @update-blur-radius="
            (value) => {
              shadow.blurRadius = value;
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
            shadow.blurRadius = value;
          }
        "
        :min="0"
        :max="100"
        :storeValue="+shadow.blurRadius"
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
          :storeValue="+shadow.spread"
          @update-spread="
            (value) => {
              shadow.spread = value;
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
            shadow.spread = value;
          }
        "
        :min="-100"
        :max="100"
        :storeValue="+shadow.spread"
      />
    </div>

    <div class="relative flex flex-col justify-center">
      <label for="range" class="mb-8 block text-center text-xl font-medium"
        >Inset</label
      >
      <BinaryToggle
        @update-inset="
          (value) => {
            console.log(value);
            shadow.inset = value;
          }
        "
      />
    </div>
    <div class="relative flex flex-col justify-center">
      <label for="range" class="mb-8 block text-center text-xl font-medium"
        >Shadow Colour</label
      >
      <ColourPicker
        :initial-colour="shadow.colour"
        @update-colour="
          (value) => {
            console.log(value);
            shadow.colour = value;
          }
        "
      />
    </div>
  </div>
  <AddShadowButton />
</template>

<script setup lang="ts">
import Slider from "./Slider.vue";
import TextInput from "./TextInput.vue";
import BinaryToggle from "./BinaryToggle.vue";
import ColourPicker from "./ColourPicker.vue";
import AddShadowButton from "./AddShadowButton.vue";
import { useShadowStore } from "../stores/ShadowStore";
const shadowStore = useShadowStore();
</script>

<style scoped></style>
