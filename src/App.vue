<template>
  <div class="relative h-full w-full px-4 py-20">
    <AppHeader />
    <ThemeButton />
    <main class="bg-primary-background mt-11 w-full px-3 py-4">
      <CodeBlock />
      <Preview />
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
