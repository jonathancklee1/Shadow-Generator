<template>
  <div class="join mx-auto">
    <button
      class="box-button min-w-28 border-2 text-base"
      :class="{ selected: !isInset }"
      @click="
        () => {
          isInset = false;
          $emit(`update-inset`, isInset);
        }
      "
    >
      Normal
    </button>
    <div class="divider divider-horizontal"></div>
    <button
      class="box-button min-w-28 border-2 p-2 text-base"
      :class="{ selected: isInset }"
      @click="
        () => {
          isInset = true;
          $emit(`update-inset`, isInset);
        }
      "
    >
      Inset
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const isInset = ref(false);
</script>

<style scoped></style>
