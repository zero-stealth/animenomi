<script setup>
import { ref } from 'vue'
import p1 from '@/assets/p1.png'
import p2 from '@/assets/p2.png'


const categoryData = ref([
  {
    img: p1,
    name: 'Female'
  },
  {
    img: p2,
    name: 'Male'
  },
  {
    img: p1,
    name: 'children'
  }
])
</script>
<template>
  <div class="category-c">
    <div  class="category-wrapper" v-for="({ img, name }, index) in categoryData" :key="index">
      <div class="category-img" :style="{ backgroundImage: `url(${img})` }"></div>
      <span>{{ name }}</span>
    </div>
  </div>
</template>
<style>
@import '@/style/categories.css';
</style>
