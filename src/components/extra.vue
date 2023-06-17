<script setup>
import { useRouter } from 'vue-router'
import addIcon from '@/icons/add.vue'
import measureIcon from '@/icons/measure.vue'
import fabricIcon from '@/icons/fabric.vue'
import scissorIcon from '@/icons/scissor.vue'
import tailorIcon from '@/icons/tailor.vue'
import clothIcon from '@/icons/t-shirt.vue'

const router = useRouter()

const Measurement = () => {
  router.push({ name: 'Measurement' })
}

const Filter = () => {
  router.push({ name: 'Search' })
}

const Alter = () => {
  router.push({ name: 'Alter' })
}

const Customize = () => {
  router.push({ name: 'Customize' })
}

const Admin = () => {
  router.push({ name: 'Admin' })
}
</script>
<template>
  <div class="extra-container">
    <div class="extra-card" @click="Measurement()">
      <measureIcon class="icon extra-icon" />
      <span>Get measured</span>
    </div>
    <div class="extra-card" @click="Filter()">
      <fabricIcon class="icon extra-icon" />
      <span>Fabric collection</span>
    </div>
    <div class="extra-card" @click="Alter()">
      <scissorIcon class="icon extra-icon" />
      <span>Alter your cloths</span>
    </div>
    <div class="extra-card" @click="Filter()">
      <tailorIcon class="icon extra-icon" />
      <span>Tailor made cloths</span>
    </div>
    <div class="extra-card" @click="Customize()">
      <clothIcon class="icon extra-icon" />
      <span>Customize cloth</span>
    </div>
    <div class="extra-card" @click="Admin()">
      <addIcon class="icon extra-icon" />
    </div>
  </div>
</template>
<style>
@import '@/style/extra.css';
</style>
