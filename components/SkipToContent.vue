<template>
  <a 
    href="#main-content" 
    class="skip-to-content fixed top-0 left-0 z-50 p-3 bg-primary-600 text-white transform -translate-y-full focus:translate-y-0 transition-transform"
  >
    Skip to content
  </a>
</template>

<style scoped>
/* Ensure the skip link is visible only when focused */
.skip-to-content:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}
</style> 