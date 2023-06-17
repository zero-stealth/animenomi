<script setup>
import { useRouter } from 'vue-router'
import likeIcon from '../icons/likeIcon.vue'
import { useProductStore } from '@/stores/product'

const router = useRouter()

const collection = () => {
  router.push({ name: 'Search' })
}

const detail = () => {
  router.push({ name: 'Detail' })
}


const ProductStore = useProductStore()

const data = ProductStore.Cloths
</script>
<template>
  <div class="collection-card">
    <div class="collection-header">
      <h1>Our Fabric collection</h1>
      <span @click="collection()">View all</span>
    </div>
    <div class="collection-wrapper">
      <div
        class="card-c"
        v-for="({ productImage, productName, productPrice }, index) in data"
        :key="index"
        @click="detail()"
      >
        <div class="card-img" :style="{ backgroundImage: `url(${productImage})` }">
          <div class="card-like">
            <likeIcon class="icon likeIcon" />
          </div>
        </div>
        <div class="card-info">
          <h1>{{ productName }}</h1>
          <span>{{ productPrice }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
@import '@/style/collectionCard.css';
</style>
