<script setup>
import { ref  } from "vue";
import p1 from "@/assets/p1.png";
import p2 from "@/assets/p2.png";


let images = ref([]);
const defaultImage = ref(p1);

// change background image every 5 sec
images = [
  {
    image: p1,
  },
  {
    image: p2,
  },
];

setInterval(() => {
  defaultImage.value = images[Math.floor(Math.random() * images.length)].image;
}, 100000);


</script>
<template>
<div class="home-panel"  :style="{ backgroundImage: `url(${defaultImage})` }">
    <slot></slot>
</div>
</template>
<style>
@import "@/style/panel.css";
</style>