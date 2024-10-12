<template>
  <div
    class="relative h-full min-h-screen w-full bg-primary-background px-4 py-14"
  >
    <AppHeader />
    <ThemeButton />
    <main
      class="mx-auto mt-11 w-full gap-4 bg-primary-background px-3 pb-4 pt-4 lg:flex lg:h-screen lg:bg-transparent lg:pt-0 xl:max-w-screen-xl"
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
