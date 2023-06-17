<script setup>
import { ref, computed } from 'vue'
import p1 from '@/assets/p1.png'
import CheckOut from '@/components/CheckOut.vue'
import MobileNav from '@/components/Mobilenav.vue'
import Desktopnav from '@/components/Desktopnav.vue'
import SimpleNav from '@/components/simpleNav.vue'
import likeIcon from '@/icons/likeIcon.vue'
import deleteIcon from "@/icons/delete.vue"
import minusIcon from '@/icons/minus.vue'
import starIcon from '@/icons/star.vue'
import addIcon from '@/icons/add.vue'



const itemNo = ref(1);
const reviews = computed(() => {
  return Math.floor(Math.random() * 4)
})


const title = ref('Cart')

const subtotal = computed(() => {
  return 100 * 1
})

const delivery = computed(() => {
  return 30 * 1
})

const Add = () => {
  itemNo.value ++
}

const Minus = () => {
  if( itemNo.value > 1) {
    itemNo.value --;
  } else {
    itemNo.value = 1;
  }
}
</script>
<template>
    <SimpleNav :title="title" class="nav-simp" />
  <div class="cart-contain">
    <Desktopnav class="desk-simp" />
    <div class="cart-layout">
      <div class="cart-lay1" :style="{ backgroundImage: `url(${p1})` }">
        <!-- product image -->
      </div>
      <div class="cart-lay2">
        <div class="cart-h">
          <h1>Title</h1>
          <likeIcon class="icon cart-like" />
        </div>
        <div class="cart-rev">
          <div class="cart-star">
            <starIcon class="star-con" />
            {{reviews}}
          </div>
        </div>
        <div class="cart-description">
            <p>soft and</p>
          </div>
        <div class="sideline">
                   <div class="cart-price">
           <h4>Price:</h4><span>Ksh 100</span>
          </div>
          <div class="cart-no">
            <div class="inc-contain">
              <div class="cart-in" @click="Add()">
              <addIcon class="icon-add" />
            </div>
            <div class="itemNo">
             {{ itemNo }} 
            </div>
            <div class="cart-in" @click="Minus()">
              <minusIcon class="icon-minus" />
            </div>
            </div>
           <div class="inc-delete">
            <deleteIcon class="icon-delete"/>
           </div>
          </div>
        </div>
        <CheckOut :subtotal="subtotal" :delivery="delivery" class="show-ds" />
      </div>
    </div>  
  <CheckOut :subtotal="subtotal" :delivery="delivery" class="show-mb" />
  </div>
  <MobileNav />
</template>
<style>
@import '@/style/cart.css';
</style>
