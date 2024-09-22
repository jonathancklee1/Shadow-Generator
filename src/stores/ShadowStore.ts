import { defineStore } from "pinia";
import { ref } from "vue";

export const useShadowStore = defineStore("shadow", () => {
  const horizontalOffset = ref(0);
  const verticalOffset = ref(0);
  const blurRadius = ref(0);
  const spread = ref(0);
  /**
   * Sets the horizontal offset for the shadow.
   * @param {number} value - the new horizontal offset value
   */
  function setHorizontalOffset(value: number) {
    console.log("setHorizontalOffset" + value);
    horizontalOffset.value = value;
  }
  function setVerticalOffset(value: number) {
    console.log("setVerticalOffset" + value);
    horizontalOffset.value = value;
  }
  function setBlurRadius(value: number) {
    console.log("setBlurRadius" + value);
    horizontalOffset.value = value;
  }
  function setSpread(value: number) {
    console.log("setSpread" + value);
    horizontalOffset.value = value;
  }

  return {
    horizontalOffset,
    verticalOffset,
    blurRadius,
    spread,
    setHorizontalOffset,
    setVerticalOffset,
    setBlurRadius,
    setSpread,
  };
});
