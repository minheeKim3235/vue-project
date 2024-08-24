<template>
  <div class="accordion_basic">
    <slot></slot>
  </div>
</template>

<script setup>
import { ref, provide } from 'vue';

// props
const props = defineProps({
  multiple: {
    type: Boolean,
    default: false
  },
  snap: {
    type: Boolean,
    default: false
  }
});

// data
const accordionItems = ref([]);
const activeIndex = ref(null); // 현재 활성화된 아코디언 항목의 인덱스

provide('addItems', (item) => {
  accordionItems.value.push(item);
});

provide('multiple', props.multiple);
provide('snap', props.snap);
provide('activeIndex', activeIndex);
provide('setActiveIndex', (index) => {
  if (!props.multiple) {
    activeIndex.value = activeIndex.value === index ? null : index;
  }
});
</script>

<style lang="scss" scoped>
</style>
