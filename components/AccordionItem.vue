<template>
  <div class="accordion_item">
    <button class="accordion_header" @click="toggle">
      <div v-if="$slots.title">
        <slot name="title"></slot>
      </div>
      <span v-else>{{ title }}</span>
    </button>
    <transition name="acc"
      @before-enter="beforeEnter"
      @enter="enter"
      @before-leave="beforeLeave"
      @leave="leave"
    >
      <div class="accordion_content" :class="{'accordion_expanded': isActive, 'snap_motion': snap}" v-show="isActive">
      <!-- <div class="accordion_content" :class="{'accordion_expanded': isActive}"> -->
        <slot></slot>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref, inject, computed, onMounted } from 'vue';

const props = defineProps({
  title: String,
  index: Number, // index prop을 추가하여 아이템의 인덱스를 추적합니다.
  expanded: {
    type: Boolean,
    default: false
  }
});

const multiple = inject('multiple');
const snap = inject('snap');
const addItems = inject('addItems');
const activeIndex = inject('activeIndex');
const setActiveIndex = inject('setActiveIndex');

const isActive = ref(false);

if (!multiple) {
  isActive.value = computed(() => activeIndex.value === props.index);
}

// methods
const toggle = () => {
  if (!multiple) {
    setActiveIndex(props.index);
  } else {
    isActive.value = !isActive.value;
  }
}

const beforeEnter = (el) => {
  el.style.height = '0';
}
const enter = (el) => {
  el.style.height = el.scrollHeight + 'px';
}
const beforeLeave = (el) => {
  el.style.height = el.scrollHeight + 'px';
}
const leave = (el) => {
  el.style.height = '0';
}

onMounted(() => {
  if (props.expanded) {
    if (!multiple) {
      setActiveIndex(props.index);
    } else {
      isActive.value = true;
    }
  }

  addItems({
    title: props.title
  });
});

</script>

<style lang="scss" scoped>
.accordion_content {
  overflow: hidden;
  &.accordion_expanded {
    height: auto;
  }
  &.snap_motion {
    transition: 150ms ease-out;
  }
}
</style>
