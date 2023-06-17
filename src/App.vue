<script setup>
// import { useAuthStore } from '@/stores/auth'
import { RouterView, useRoute } from 'vue-router'
// import { ref, watchEffect , onMounted} from 'vue'
// import Mobilenav from './components/Mobilenav.vue'

// const hideNav = ref(true)
// const route = useRoute()
// const pathName = ref(null)
// const AuthStore = useAuthStore()

// onMounted(() => {
//   watchEffect(() => {
//   if(AuthStore.isAuthenticated == false ) {
//     hideNav.value = false
//   } else {
//     hideNav.value = true

//   }
// }) 
// })



</script>
<template>
  <div class="app-x">
    <RouterView />
  </div>
  <!-- <Mobilenav v-show="hideNav == true"/> -->
</template>
<style>
@import './style/app.css';
</style>
