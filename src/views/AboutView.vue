<script setup lang="ts">
import { IconBook } from '@tabler/icons-vue'
</script>
<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div>
      <IconBook :size="64" stroke-width="1"/>
    </div>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    flex-flow: column;
    place-content: center;
    place-items: center;
  }
}
</style>
