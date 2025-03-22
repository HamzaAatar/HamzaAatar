<template>
  <div class="accessible-image-wrapper">
    <img
      :src="src"
      :alt="alt"
      :width="width"
      :height="height"
      :loading="loading"
      :class="imageClass"
      :title="title || alt"
    />
    <span v-if="caption" class="image-caption" :id="captionId">{{ caption }}</span>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  src: {
    type: String,
    required: true
  },
  alt: {
    type: String,
    required: true,
    default: 'Image'
  },
  width: {
    type: [Number, String],
    default: undefined
  },
  height: {
    type: [Number, String],
    default: undefined
  },
  loading: {
    type: String,
    default: 'lazy'
  },
  imageClass: {
    type: String,
    default: ''
  },
  title: {
    type: String,
    default: ''
  },
  caption: {
    type: String,
    default: ''
  }
});

const captionId = computed(() => {
  return `caption-${Math.random().toString(36).substring(2, 9)}`;
});
</script>

<style scoped>
.accessible-image-wrapper {
  display: inline-block;
  position: relative;
}

img {
  max-width: 100%;
  height: auto;
}

.image-caption {
  display: block;
  margin-top: 0.5rem;
  font-size: 0.875rem;
  color: var(--gray-600);
  text-align: center;
}

@media (prefers-reduced-motion: reduce) {
  img {
    animation: none !important;
    transition: none !important;
  }
}
</style> 