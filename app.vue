<template>
  <div>
    <SeoHead />
    <NuxtLayout>
      <NuxtLoadingIndicator />
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

// Enable dark mode by default
onMounted(() => {
  useColorMode().preference = 'dark'
})
</script>

<style>
html {
  scroll-behavior: smooth;
}
</style> 