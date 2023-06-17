<script setup>
import { RouterLink } from 'vue-router'
import HomeIcon from '../icons/home.vue'
import CartIcon from '../icons/cart.vue'
import shopIcon from '../icons/shop.vue'
import settingIcon from '../icons/settings.vue'
</script>
<template>
  <div class="mobile-container">
    <RouterLink :to="{ name: 'Home' }" class="mobile-link">
      <HomeIcon class="mobile-icon" />
      <span>Home</span>
    </RouterLink>
    <RouterLink :to="{ name: 'Shop' }" class="mobile-link">
      <shopIcon class="mobile-icon" />
      <span>shop</span>
    </RouterLink>
    <RouterLink :to="{ name: 'Cart' }" class="mobile-link">
      <CartIcon class="mobile-icon" />
      <span>cart</span>
    </RouterLink>
    <RouterLink :to="{ name: 'Settings' }" class="mobile-link">
      <settingIcon class="mobile-icon" />
      <span>settings</span>
    </RouterLink>
  </div>
</template>
<style>
@import '@/style/Mobilenav.css';
</style>
