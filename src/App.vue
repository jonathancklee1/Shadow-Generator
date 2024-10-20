<template>
  <div
    class="relative h-full min-h-screen w-full overflow-y-auto bg-primary-background px-4 py-8"
  >
    <AppHeader />
    <main
      class="mx-auto w-full max-w-[1100px] gap-4 bg-primary-background pb-4 pt-4 lg:flex lg:max-h-[1200px] lg:bg-transparent lg:px-0 lg:pt-0"
    >
      <div class="basis-2/3">
        <CodeBlock />
        <Preview />
      </div>
      <ControlPanel />
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import AppHeader from "./components/AppHeader.vue";
import CodeBlock from "./components/CodeBlock.vue";
import Preview from "./components/Preview.vue";
import ControlPanel from "./components/ControlPanel.vue";
import Footer from "./components/Footer.vue";
</script>

<style scoped></style>
