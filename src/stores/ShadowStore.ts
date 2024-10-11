import { defineStore } from "pinia";
import { computed, ref, watch } from "vue";

export const useShadowStore = defineStore("shadow", () => {
  const shadowArray = ref([
    {
      horizontalOffset: "0",
      verticalOffset: "10",
      blurRadius: "0",
      spread: "0",
      inset: false,
      colour: getRandomHex(),
    },
  ]);
  const shadowClass = computed(() => {
    return `box-shadow:${shadowArray.value
      .map((shadow) => {
        return `${shadow.inset ? " inset" : ""} ${shadow.horizontalOffset || 0}px ${shadow.verticalOffset || 0}px ${shadow.blurRadius || 0}px ${shadow.spread || 0}px ${shadow.colour}`;
      })
      .join(",")};`;
  });

  function addShadow() {
    shadowArray.value.push({
      horizontalOffset: "0",
      verticalOffset: "10",
      blurRadius: "0",
      spread: "0",
      inset: false,
      colour: getRandomHex(),
    });
  }
  function removeShadow(index: number) {
    shadowArray.value.splice(index, 1);
  }

  function getIndexShadow(index: number) {
    const selectedShadow = shadowArray.value[index];
    return `<span class="text-pretty">${selectedShadow.horizontalOffset}px ${selectedShadow.verticalOffset}px ${selectedShadow.blurRadius}px ${selectedShadow.spread}px ${selectedShadow.inset ? "inset" : ""}</span> <span style="color: ${selectedShadow.colour};">${selectedShadow.colour}</span> `;
  }
  return {
    shadowClass,
    shadowArray,
    addShadow,
    removeShadow,
    getIndexShadow,
  };
});

function getRandomHex() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
