import { defineStore } from "pinia";
import { computed, ref } from "vue";

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
  let hexCode = "#";

  while (hexCode.length < 7) {
    hexCode += Math.round(Math.random() * 15).toString(16);
  }

  return hexCode;
}
