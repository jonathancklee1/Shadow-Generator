<template>
  <div class="relative flex h-20 w-full justify-center">
    <color-picker
      :pureColor="initialColour"
      useType="pure"
      format="hex"
      disableHistory
      class="color-picker"
      @update:pureColor="$emit(`update-colour`, $event)"
    />
  </div>
</template>
<script lang="ts" setup>
const props = defineProps({
  initialColour: String,
});
</script>
<style></style>
