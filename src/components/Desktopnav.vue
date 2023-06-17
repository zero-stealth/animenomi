<script setup>
import p1 from '@/assets/p1.png'
import { useRouter } from "vue-router";
import { RouterLink } from 'vue-router';
import notificationIcon from '@/icons/notification.vue';

const router = useRouter();

const Notification = () => {
  router.push({ name : 'Notification'})
}

const Profile = () => {
  router.push({ name : 'Profile'})
}

</script>
<template>
  <div class="desk-container">
    <div class="desk-f1">
      <RouterLink :to="{ name: 'Home' }" class="nav-link">Home</RouterLink>
      <RouterLink :to="{ name: 'Shop' }" class="nav-link">Shop</RouterLink>
      <RouterLink :to="{ name: 'Cart' }" class="nav-link">Cart</RouterLink>
      <RouterLink :to="{ name: 'Settings' }" class="nav-link">Settings</RouterLink>
    </div>
    <div class="desk-f">
      <div class="notification-tag" @click="Notification()">
        <notificationIcon  class="icon icon-notification" />
      </div>
      <div class="avatar-img">
        <img :src="p1" alt="avatar-img" @click="Profile()" class="img-avatar" />
      </div>
    </div>
  </div>
</template>
<style>
@import '@/style/Desktopnav.css';
</style>
