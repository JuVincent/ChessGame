<script lang="ts" setup>
 defineProps<{
  isDark: boolean
}>()
</script>

<template>
  <div
    class="h-100% w-100%"
    :class="isDark ? 'bg-gray' : 'bg-white'"
  >
  </div>
</template>
