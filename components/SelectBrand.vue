<template>
  <div>
    <RadioGroup v-model="selectBrand">
      <Radio value="CSnormal" label="청솔"></Radio>
      <Radio value="CSneo" label="청솔 네오"></Radio>
      <Radio value="HPnormal" label="강하"></Radio>
    </RadioGroup>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const selectBrand = ref('CSnormal');
</script>

<style lang="scss" scoped>

</style>