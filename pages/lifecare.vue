<template>
  <div>
    <Accordion snap>
      <template v-for="(item, i) in rules">
        <AccordionItem  :key="i" :title="item.title" :index="i" :expanded="item.expanded">
          {{ item.items }}
        </AccordionItem>
      </template>
    </Accordion>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const rules = ref([
  { title: '학원생활규정', items: 'content', expanded: true },
  { title: '학원생활수칙 주요사항 안내', items: 'content', expanded: false },
])
</script>

<style lang="scss" scoped>

</style>