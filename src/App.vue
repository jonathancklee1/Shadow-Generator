<template>
  <div
    class="relative mx-auto h-full min-h-screen w-full px-4 py-14 xl:max-w-screen-xl"
  >
    <AppHeader />
    <ThemeButton />
    <main
      class="mt-11 h-full w-full gap-4 bg-primary-background pb-3 pb-4 lg:flex lg:bg-transparent"
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
import ThemeButton from "./components/ThemeButton.vue";
import Preview from "./components/Preview.vue";
import ControlPanel from "./components/ControlPanel.vue";
</script>

<style scoped></style>
