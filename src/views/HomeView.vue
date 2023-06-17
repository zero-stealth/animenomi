<script setup>
import Panel from '../components/panel.vue';
import Extra from '../components/extra.vue';
import Desktopnav from '../components/Desktopnav.vue';
import Searchbar from '../components/searchbar.vue';
import CollectionCard from '../components/collectionCard.vue';
import TailorCard from '../components/tailorCard.vue';
import Mobilenav from '@/components/Mobilenav.vue'

</script>
<template>
  <div class="home-container">
    <Desktopnav/>
    <Panel>
      <div class="home-searchbar">
        <Searchbar />
      </div>
    </Panel>
    <Extra/>
    <CollectionCard/>
    <TailorCard/>
  </div>
  <Mobilenav/>
</template>
<style>
@import '@/style/home.css';
</style>
