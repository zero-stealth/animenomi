<script setup>
import { useRouter } from 'vue-router'
import cartIcon from '@/icons/cart.vue'
import shopIcon from '@/icons/shop.vue'
import arrowIcon from '@/icons/arrow.vue'
import favIcon from '@/icons/fav.vue'
import profileIcon from '@/icons/profile.vue'
import logoutIcon from '@/icons/logout.vue'
import measureIcon from '@/icons/measure.vue'

const router = useRouter()

const Profile = () => {
  router.push({ name: 'Profile' })
}

const Cart = () => {
  router.push({ name: 'Cart' })
}

const Order = () => {
  router.push({ name: 'History' })
}

const Measurement = () => {
  router.push({ name: 'Measurement' })
}

const Favourite = () => {
  router.push({ name: 'Favourite' })
}

const Logout = () => {
  router.push({ name: 'splash' })
}
</script>
<template>
  <div class="set-card">
    <div class="container-set" @click="Profile()">
      <div class="wrapper-icon-set">
        <div class="icon-set">
          <profileIcon class="set-icon" />
        </div>
        <span>My Profile</span>
      </div>
      <arrowIcon class="set-arrow" />
    </div>
    <div class="container-set" @click="Order()">
      <div class="wrapper-icon-set">
        <div class="icon-set">
          <shopIcon class="set-icon" />
        </div>
        <span>Order history</span>
      </div>
      <arrowIcon class="set-arrow" />
    </div>
    <div class="container-set" @click="Cart()">
      <div class="wrapper-icon-set">
        <div class="icon-set">
          <cartIcon class="set-icon" />
        </div>
        <span>Cart</span>
      </div>
      <arrowIcon class="set-arrow" />
    </div>
    <div class="container-set" @click="Measurement()">
      <div class="wrapper-icon-set">
        <div class="icon-set">
          <measureIcon class="set-icon" />
        </div>
        <span>Measurement profile</span>
      </div>
      <arrowIcon class="set-arrow" />
    </div>
    <div class="container-set"  @click="Favourite()">
      <div class="wrapper-icon-set">
        <div class="icon-set">
          <favIcon class="set-icon" />
        </div>
        <span>Favorites </span>
      </div>
      <arrowIcon class="set-arrow" />
    </div>
    <div class="container-set" @click="Logout()">
      <div class="wrapper-icon-set">
        <div class="icon-set">
          <logoutIcon class="set-icon" />
        </div>
        <span>logout</span>
      </div>
      <arrowIcon class="set-arrow" />
    </div>
  </div>
</template>
<style>
@import '@/style/settingsCard.css';
</style>
