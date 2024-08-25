<template>
  <ul class="common_column" :class="addClass">
    <li v-for="(item, i) in items" :key="i">
      <slot v-bind="{ item, i }" />
    </li>
  </ul>
</template>

<script setup>
import { ref, onMounted } from 'vue';

// props 
const props = defineProps({
  items: [Array, Object],
  columns: Number,
  gap: Number,
  addClass: String
});

// data 
const getColumns = props.columns; 
const getGap = props.gap + 'px';
const columnWidth = `calc((100% - (${getGap} * (${getColumns} - 1))) / ${getColumns})`;


// mounted
onMounted(() => {
  console.log(columnWidth);
})
</script>

<style lang="scss" scoped>
.common_column {
  display: flex;
  flex-flow: row wrap;
  align-items: stretch;
  gap: v-bind(getGap);
  width: 100%;
  li {
    width: v-bind(columnWidth);
    box-sizing: border-box;
  }
}
</style>