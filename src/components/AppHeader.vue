<template>
  <header>
    <h1
      class="relative inset-0 z-20 mx-auto max-w-[600px] overflow-hidden border-2 border-tertiary-background bg-secondary-background p-4 text-center text-4xl font-medium tracking-[.4rem] text-secondary-text lg:mb-6 lg:p-6"
    >
      Shadow Generator
    </h1>
  </header>
</template>

<script setup lang="ts"></script>

<style scoped>
h1 {
  mask: radial-gradient(10px at 40px 40px, transparent 98%, black) -40px -40px;
}
</style>
