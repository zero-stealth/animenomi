<script setup>
import { ref } from 'vue'
import ProfileCard from '@/components/profileCard.vue'
import SettingCard from '@/components/settingCard.vue'
import Desktopnav from '@/components/Desktopnav.vue'
import SimpleNav from '@/components/simpleNav.vue'
import Mobilenav from '@/components/Mobilenav.vue'

const title = ref('Settings')
</script>
<template>
  <div class="settings-container">
    <SimpleNav :title="title" class="nav-simp" />
    <Desktopnav class="desk-simp" />
      <div class="s-view-contain">
        <div class="s-view1">
          <SettingCard />
        </div>
        <div class="s-view2">
          <ProfileCard />
        </div>
      </div>
  </div>
  <Mobilenav />
</template>
<style>
@import '@/style/settings.css';
</style>
