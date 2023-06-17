<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import Desktopnav from '@/components/Desktopnav.vue'
import SimpleNav from '@/components/simpleNav.vue'
import ProfileCard from '@/components/profileCard.vue'
import Mobilenav from '@/components/Mobilenav.vue'

const title = ref('Profile');
const router = useRouter();

const settings = () => {
  router.push({ name: 'Settings' })
}


</script>
<template>
  <div class="profile-ds">
    <Desktopnav class="desk-simp" />
    <div class="ds-contain">
      <ProfileCard />
    </div>
    <div class="ds-info">
        <h4>Nothing's here dummy 😕   , click</h4> <span @click="settings()">settings</span>
    </div>
  </div>
  <Mobilenav />
</template>
<style>
@import '@/style/profile.css';
</style>
