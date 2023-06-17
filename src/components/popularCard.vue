<script setup>
import { useRouter } from 'vue-router'
import { useProductStore } from '@/stores/product'


const router = useRouter()

const collection = () => {
  router.push({ productName: 'Shop' })
}
const ProductStore = useProductStore()

const data = ProductStore.Cloths
</script>
<template>
  <div class="tailor-card">
    <div class="collection-header">
      <h1>popular clothes</h1>
      <span @click="collection()">View all</span>
    </div>
    <div class="collection-wrapper">
      <div
        class="tailor-c"
        v-for="({ productImage, productName, productPrice }, index) in data"
        :key="index"
      >
        <div class="tailor-img"  :style="{ backgroundImage: `url(${productImage})` }"></div>
        <div class="tailor-info">
          <div class="tailor-data">
            <h1>{{ productName }}</h1>
          </div>
          <div class="rates">
            <span>{{ productPrice }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
@import '@/style/collectionCard.css';
@import '@/style/tailor.css';
</style>
