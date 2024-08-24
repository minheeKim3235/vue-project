<template>
  <div>
    <ColumnList :items="teacherList" :columns="4" :gap="20">
      <template #default="{ item }">
        {{ item }}
      </template>
    </ColumnList>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const teacherList = ref([
  { name: '김민희', slogan: 'test' },
  { name: '김민희', slogan: 'test' },
  { name: '김민희', slogan: 'test' },
  { name: '김민희', slogan: 'test' },
  { name: '김민희', slogan: 'test' }
])
</script>

<style lang="scss" scoped>

</style>