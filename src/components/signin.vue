<script setup>
import { ref } from 'vue'
import { useAuthStore } from '@/stores/auth'

const AuthStore = useAuthStore()
const username = ref()
const phone = ref()
const password = ref()
const email = ref()
const errorMsg = ref()

const reset = () => {
  username.value = ''
  password.value = ''
  email.value = ''
  phone.value = ''

}

const submit = () => {
  if (username.value != '' && phone.value != '' && (password.value != '') & (email.value != '')) {
    AuthStore.getUsername(username.value)
    AuthStore.toggleisAuthenticated()
    // router.push({ name: "Home" });

    reset()
  } else {
    errorMsg.value = 'Write something dummy'
  }
}
</script>
<template>
  <div class="auth-container">
    <form @submit.prevent="submit" class="auth-form">
      <div class="auth-info">
        <h1>Welcome,</h1>
        <span>Start shopping better</span>
      </div>
      <div class="input-wrapper">
        <div class="auth-wrapper-w">
          <label for="username">username</label>
          <input
            type="text"
            class="auth-input"
            placeholder="penguin (4 character long)"
            v-model="username"
          />
        </div>
        <div class="auth-wrapper-w">
          <label for="username">phone</label>
          <input
            type="text"
            class="auth-input"
            placeholder="0712345678"
            v-model="phone"
          />
        </div>
        <div class="auth-wrapper-w">
          <label for="email">email</label>
          <input
            type="email"
            class="auth-input"
            placeholder="penguin@gmail.com"
            v-model="email"
          />
        </div>
        <div class="auth-wrapper-w">
          <label for="password">password</label>
          <input type="password" class="auth-input" placeholder="************" v-model="password" />
        </div>
        <div class="error-msg">
          <span>{{ errorMsg }}</span>
        </div>
      </div>
      <div class="btn-auth">
        <button type="submit" class="btn-auth-c" @keyup.enter="submit()">Create an account</button>
        <span
          >Already have an account?<a href="#" @click="AuthStore.toggleAuthPage()">Login</a></span
        >
      </div>
    </form>
  </div>
</template>
<style>
@import '@/style/auth.css';
</style>
