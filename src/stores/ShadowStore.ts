import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useShadowStore = defineStore("shadow", () => {
  const horizontalOffset = ref(0);
  const verticalOffset = ref(0);
  const blurRadius = ref(0);
  const spread = ref(0);
  const inset = ref(false);
  const colour = ref("");

  const shadowClass = computed(
    () =>
      `${inset.value ? "inset" : ""} ${horizontalOffset.value || 0}px ${verticalOffset.value || 0}px ${blurRadius.value || 0}px ${spread.value || 0}px ${colour.value}`,
  );
  /**
   * Sets the horizontal offset for the shadow.
   * @param {number} value - the new horizontal offset value
   */
  function setHorizontalOffset(value: number) {
    console.log("setHorizontalOffset = " + value);
    horizontalOffset.value = value;
  }
  function setVerticalOffset(value: number) {
    console.log("setVerticalOffset = " + value);
    verticalOffset.value = value;
  }
  function setBlurRadius(value: number) {
    console.log("setBlurRadius = " + value);
    blurRadius.value = value;
  }
  function setSpread(value: number) {
    console.log("setSpread = " + value);
    spread.value = value;
  }
  function setInset(value: boolean) {
    console.log("setInset = " + value);
    inset.value = value;
  }

  function setColour(value: string) {
    console.log("setColour = " + value);
    colour.value = value;
  }

  return {
    horizontalOffset,
    verticalOffset,
    blurRadius,
    spread,
    shadowClass,
    inset,
    colour,
    setHorizontalOffset,
    setVerticalOffset,
    setBlurRadius,
    setSpread,
    setInset,
    setColour,
  };
});
