<template>
  <pre class="flex bg-[#292929] px-6 py-3">
    <highlightjs
        language="css"
        :code="`div { box-shadow:${ shadowClass }; }`"
        class="text-xl text-pretty"
    />

  </pre>
</template>

<script setup lang="ts">
import { useShadowStore } from "../stores/ShadowStore";
import { storeToRefs } from "pinia";
const shadowStore = useShadowStore();
const { shadowClass } = storeToRefs(shadowStore);
import hljsVuePlugin from "@highlightjs/vue-plugin";
import { defineComponent } from "vue";

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
