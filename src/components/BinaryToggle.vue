<template>
  <div class="join mx-auto">
    <button
      class="btn join-item min-w-28 text-lg"
      :class="{ selected: !isInset }"
      @click="
        () => {
          isInset = false;
          shadowStore.setInset(isInset);
        }
      "
    >
      Normal
    </button>
    <div class="divider divider-horizontal"></div>
    <button
      class="btn join-item min-w-28 text-lg"
      :class="{ selected: isInset }"
      @click="
        () => {
          isInset = true;
          shadowStore.setInset(isInset);
        }
      "
    >
      Inset
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useShadowStore } from "../stores/ShadowStore";
const shadowStore = useShadowStore();
const isInset = ref(false);
</script>

<style scoped>
.btn.selected {
  @apply btn-primary;
}
</style>
