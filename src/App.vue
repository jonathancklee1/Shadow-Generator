<template>
  <div
    class="relative h-screen w-full overflow-auto bg-primary-background px-4 py-8"
  >
    <AppHeader />
    <main
      class="mx-auto mt-8 w-full gap-4 bg-primary-background px-3 pb-4 pt-4 lg:flex lg:max-h-[1200px] lg:bg-transparent lg:px-0 lg:pt-0 xl:max-w-screen-xl"
    >
      <div class="basis-2/3">
        <CodeBlock />
        <Preview />
      </div>
      <ControlPanel />
    </main>
  </div>
</template>

<script setup lang="ts">
import AppHeader from "./components/AppHeader.vue";
import CodeBlock from "./components/CodeBlock.vue";
import Preview from "./components/Preview.vue";
import ControlPanel from "./components/ControlPanel.vue";
</script>

<style scoped></style>
