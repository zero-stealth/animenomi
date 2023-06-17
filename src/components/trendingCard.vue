<script setup>
import { useRouter } from 'vue-router'
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
  <div class="trending-card">
    <div class="collection-header">
      <h1>Trending clothes</h1>
      <span @click="collection()">View all</span>
    </div>
    <div class="collection-wrapper">
      <div
        class="trending-c"
        v-for="({ productImage, productName, productPrice }, index) in data"
        :key="index"
        @click="detail()"
      >
        <div class="card-img" :style="{ backgroundImage: `url(${productImage})` }">
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
@import '@/style/trendingCard.css';
</style>
