<script setup>
import { ref, watchEffect } from 'vue'
import searchIcon from '@/icons/search.vue'
import { useSearchStore } from '@/stores/search'

const search = ref(null);
const searchStore = useSearchStore();

watchEffect(() => {
  if (search.value != null && search.value.length > 0) {
    searchStore.updateKeyword(search.value)
  }
})
</script>
<template>
  <div class="searchbar">
    <searchIcon class="icon search-icon" />
    <input type="text" class="search-input" v-model="search" placeholder="Search..." />
  </div>
</template>
<style>
@import '@/style/searchbar.css';
</style>
