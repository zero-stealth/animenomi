<script setup>
import { ref, computed } from 'vue'
import p1 from '@/assets/p1.png'
import MobileNav from '@/components/Mobilenav.vue'
import Desktopnav from '@/components/Desktopnav.vue'
import SimpleNav from '@/components/simpleNav.vue'
import likeIcon from '@/icons/likeIcon.vue'
import minusIcon from '@/icons/minus.vue'
import starIcon from '@/icons/star.vue'
import { useRouter } from 'vue-router'
import addIcon from '@/icons/add.vue'

const itemNo = ref(1)
const router = useRouter();
const reviews = computed(() => {
  return Math.floor(Math.random() * 10)
})

const title = ref('Details')

const subtotal = computed(() => {
  return 100 * 1
})

const cart = () => {
  router.push({ name: 'Cart' })
}


const Add = () => {
  itemNo.value++
}

const Minus = () => {
  if (itemNo.value > 1) {
    itemNo.value--
  } else {
    itemNo.value = 1
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
            <h4>Price:</h4>
            <span>Ksh 100</span>
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
          </div>
        </div>
        <div class="btn-co cod-btn">
          <button class="btn-co-d" @click="cart()">Add to cart</button>
        </div>
      </div>
    </div>
    <div class="btn-co  btn-cod">
      <button class="btn-co-d" @click="cart()">Add to cart</button>
    </div>
  </div>
  <MobileNav />
</template>
<style>
@import '@/style/cart.css';
@import '@/style/detail.css';
</style>
