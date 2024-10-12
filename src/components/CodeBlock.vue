<template>
  <div
    class="group relative border-2 border-primary-text"
    @click="copyToClipboard(shadowStore.shadowClass)"
  >
    <pre class="flex cursor-pointer bg-black px-8 py-6">
      <highlightjs
          language="css"
          :code="`div { ${ shadowStore.shadowClass } }`"
          class="text-xl text-pretty"
      />
     
  
    </pre>
    <button
      class="invisible absolute right-0 top-4 flex items-center justify-center rounded-2xl border-2 border-secondary-background bg-primary-background p-2 px-4 font-bold text-primary-text opacity-0 transition-all duration-300 ease-in-out hover:bg-secondary-background hover:text-secondary-text group-hover:visible group-hover:-translate-x-4 group-hover:opacity-100"
    >
      <span>{{ isCopied ? "Copied!" : "Copy" }}</span>
    </button>
  </div>
</template>

<script setup lang="ts">
import { useShadowStore } from "../stores/ShadowStore";
import { storeToRefs } from "pinia";
import hljsVuePlugin from "@highlightjs/vue-plugin";
import { defineComponent, ref } from "vue";
const shadowStore = useShadowStore();

const isCopied = ref(false);
function copyToClipboard(text: string) {
  navigator.clipboard.writeText(text);
  isCopied.value = true;
}

shadowStore.$subscribe(() => {
  isCopied.value = false;
});

defineComponent({
  components: {
    highlightjs: hljsVuePlugin.component,
  },
});
</script>

<style>
.hljs-selector-tag {
  color: #5ea4f9;
}
.hljs-attribute {
  color: #ffa201;
}
.hljs-number {
  color: #a2daff;
}
</style>
