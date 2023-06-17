<script setup>
import { ref , computed} from 'vue'
import { useRouter } from 'vue-router'
import likeIcon from '../icons/likeIcon.vue'
import starsIcon from '../icons/star.vue'
import { useTailorStore } from '@/stores/tailor'

const router = useRouter()

const collection = () => {
  router.push({ name: 'Shop' })
}

const detail = () => {
  router.push({ name: 'Detail' })
}

const tailorStore = useTailorStore()

const data = tailorStore.Tailor
// const rating = computed(() => {
//     return Math.floor(Math.random() * data.length);
//   })
</script>
<template>
  <div class="tailor-card">
    <div class="collection-header">
      <h1>Find the best tailors</h1>
      <span @click="collection()">View all</span>
    </div>
    <div class="collection-wrapper">
      <div
        class="tailor-c"
        v-for="({ profileImage, name, rating, rates }, index) in data"
        :key="index"
        @click="detail()"
      >
        <div class="tailor-img" :style="{ backgroundImage: `url(${profileImage})` }"></div>
        <div class="tailor-info">
          <div class="tailor-data">
            <h1>{{ name }}</h1>
            <div class="card-like">
              <likeIcon class="icon likeIcon" />
            </div>
          </div>
          <div class="tailor-rating">
            <starsIcon class="icon starIcon" />
            <span>{{ rating }}</span>
          </div>
          <div class="rates">
            <span>{{ rates }}</span>
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
