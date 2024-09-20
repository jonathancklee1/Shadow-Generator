<template>
    <div class="relative bg-slate-500 w-full py-20 px-4 h-screen">
        <AppHeader />
        <ThemeButton />
        <main class="w-full bg-black py-4 px-3 mt-11">
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
