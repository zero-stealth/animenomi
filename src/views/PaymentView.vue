<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import mpesa from "@/assets/mpesa.png";
import Mpesa from "@/assets/mpesa.jpg";
import SimpleNav from '@/components/simpleNav.vue'

const router = useRouter();
const title = ref('Payment')
const phone = ref('0700000');

const goHome = () => {
  router.push({ name: "Home" });
};


const Pay = () => {

}

</script>
<template>
  <div class="main-mpesa">
<SimpleNav :title="title" class="pay-simp" />
    <div class="m-image" :style="{ backgroundImage: `url(${Mpesa})` }">
      <!-- bg image  -->
    </div>
    <div class="mpesa-py">
      <div class="py-title">
        <h1>Payment</h1>
        <p>Please complete the purchase by providing payment details </p>
      </div>
      <div class="payment-type" >
          <img :src="mpesa" alt="mpesa" class="mpesa-logo">
      </div>
      <div class="mpesa-container">
        <form @click.prevent="Pay()" method="POST" class="f-controller">
          <div class="input-container">
            <label for="phoneNumber">Mpesa phone number</label>
            <input type="text" :placeholder="phone" class="f-input" name="phoneNumber" required>
          </div>
          <div class="input-container">
            <label for="amount">Amount</label>
            <input type="text" :placeholder="total" class="f-input" name="amount" required>
          </div>
          <div class="btn-wp">
            <button type="submit" class="btn-py">Pay Now</button>
            <a @click="goHome()">Go back to Home page</a>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<style>
@import "@/style/payment.css";
</style>
