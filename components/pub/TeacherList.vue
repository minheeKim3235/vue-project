<template>
  <a @click="$emit('on-click', item)">
    <span class="subj">{{ item.subj }}</span>
    <span class="name">{{ item.name }}</span>
    <span class="slogan">{{ item.slogan }}</span>
    <span class="pic"><img :src="item.imgSrc" alt="" /></span>
  </a>
</template>

<script setup>
const props = defineProps({
  item: [Array, Object]
})
</script>

<style lang="scss" scoped>
a {
  display: block;
  position: relative;
  overflow: hidden;
  padding: 15px;
  width: 100%;
  height: 122px;
  background: #fff;
  border: 1px solid #c2c5cc;
  box-sizing: border-box;
  
  span {
    display: block;
    &.subj {
      font-size: 10px;
      font-weight: 500;
      color: #222;
    }
    &.name {
      font-size: 16px;
      font-weight: 500;
      color: #222;
    }
    &.slogan {
      margin-top: 4px;
      width: 60%;
      font-size: 10px;
      line-height: 14px;
      color: #888;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 4;
      -webkit-box-orient: vertical;
      word-wrap: break-word;
      word-break: keep-all;
    }
    &.pic {
      position: absolute;
      right: 0;
      bottom: 0;
      width: 100px;
      img {
        max-width: 100%;
      }
    }
  }
}
</style>