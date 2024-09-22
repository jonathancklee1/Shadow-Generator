import { defineStore } from "pinia";
import { ref } from "vue";

export const useShadowStore = defineStore("shadow", () => {
  const horizontalOffset = ref(0);
  const verticalOffset = ref(0);
  const blurRadius = ref(0);
  const spread = ref(0);
  return { horizontalOffset, verticalOffset, blurRadius, spread };
});
