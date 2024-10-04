<template>
  <div class="relative flex h-20 w-full justify-center">
    <color-picker
      :pureColor="pureColor"
      useType="pure"
      format="hex"
      disableHistory
      class="color-picker"
      @update:pureColor="setShadowColour($event)"
    />
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import { ColorInputWithoutInstance } from "tinycolor2";
import { useShadowStore } from "../stores/ShadowStore";
const pureColor = ref<ColorInputWithoutInstance>("red");

const shadowStore = useShadowStore();
function setShadowColour(color: ColorInputWithoutInstance) {
  const colourString = color as string;
  shadowStore.setColour(colourString);
}
</script>
<style></style>
