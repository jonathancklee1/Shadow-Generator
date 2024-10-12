<template>
  <div class="max-h-full grow overflow-y-auto">
    <div
      class="collapse collapse-arrow mt-4 rounded-none bg-secondary-background text-secondary-text lg:mt-2"
      v-for="(shadow, index) in shadowStore.shadowArray"
      :key="index"
    >
      <input type="checkbox" />
      <div
        class="collapse-title flex max-h-fit w-full items-center gap-4 text-xl font-medium"
      >
        <p
          class="w-fit bg-primary-background p-4 text-xl font-medium text-primary-text"
          v-html="shadowStore.getIndexShadow(index)"
        ></p>
      </div>

      <div class="collapse-content">
        <div class="mt-8">
          <div class="relative flex justify-between">
            <label
              for="range"
              class="mb-8 block text-base font-medium uppercase"
              >Horizontal Offset</label
            >
            <TextInput
              label="Horizontal Offset"
              class="rounded-none border-2 border-white text-primary-text"
              :storeValue="+shadow.horizontalOffset"
              @update-horizontal-offset="
                (value) => {
                  shadow.horizontalOffset = value;
                }
              "
              :min="minValue"
              :max="maxValue"
            />
          </div>
          <Slider
            label="Horizontal Offset"
            @update-horizontal-offset="
              (value) => {
                shadow.horizontalOffset = value;
              }
            "
            :min="minValue"
            :max="maxValue"
            :storeValue="+shadow.horizontalOffset"
          />
        </div>
        <div class="mt-8">
          <div class="relative flex justify-between">
            <label
              for="range"
              class="texbasexl mb-8 block font-medium uppercase"
              >Vertical Offset</label
            >
            <TextInput
              label="Vertical Offset"
              class="rounded-none border-2 border-white text-primary-text"
              :storeValue="+shadow.verticalOffset"
              @update-vertical-offset="
                (value) => {
                  shadow.verticalOffset = value;
                }
              "
              :min="minValue"
              :max="maxValue"
            />
          </div>
          <Slider
            label="Vertical Offset"
            @update-vertical-offset="
              (value) => {
                shadow.verticalOffset = value;
              }
            "
            :min="minValue"
            :max="maxValue"
            :storeValue="+shadow.verticalOffset"
          />
        </div>

        <div class="mt-8">
          <div class="relative flex justify-between">
            <label
              for="range"
              class="baseext-xl mb-8 block font-medium uppercase"
              >Blur Radius</label
            >
            <TextInput
              label="Blur Radius"
              class="rounded-none border-2 border-white text-primary-text"
              :storeValue="+shadow.blurRadius"
              @update-blur-radius="
                (value) => {
                  shadow.blurRadius = value;
                }
              "
              :min="0"
              :max="maxValue"
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
            :max="maxValue"
            :storeValue="+shadow.blurRadius"
          />
        </div>

        <div class="mt-8">
          <div class="relative flex justify-between">
            <label
              for="range"
              class="blockbasetext-xl mb-8 font-medium uppercase"
              >Spread</label
            >
            <TextInput
              label="Spread"
              class="rounded-none border-2 border-white text-primary-text"
              :storeValue="+shadow.spread"
              @update-spread="
                (value) => {
                  shadow.spread = value;
                }
              "
              :min="minValue"
              :max="maxValue"
            />
          </div>
          <Slider
            label="Spread"
            @update-spread="
              (value) => {
                shadow.spread = value;
              }
            "
            :min="minValue"
            :max="maxValue"
            :storeValue="+shadow.spread"
          />
        </div>

        <div class="relative flex flex-col justify-center">
          <label for="range" class="mb-4 text-base font-medium uppercase"
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
        <div class="relative mt-6 flex flex-col justify-center">
          <label for="range" class="mb-4 text-base font-medium uppercase"
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
        <button
          class="box-button mx-auto mt-8 w-full p-4 text-sm font-medium uppercase"
          @click="() => shadowStore.removeShadow(index)"
        >
          - Remove Shadow
        </button>
      </div>
    </div>
    <AddShadowButton />
  </div>
</template>

<script setup lang="ts">
import Slider from "./Slider.vue";
import TextInput from "./TextInput.vue";
import BinaryToggle from "./BinaryToggle.vue";
import ColourPicker from "./ColourPicker.vue";
import AddShadowButton from "./AddShadowButton.vue";
import { useShadowStore } from "../stores/ShadowStore";
const shadowStore = useShadowStore();
const minValue = -200;
const maxValue = 200;
</script>

<style>
.collapse-arrow > .collapse-title:after {
  top: 50%;
  width: 16px;
  height: 16px;
}
</style>
