<template>
  <div
    class="form-wrapper flex flex-col items-center justify-center h-screen font-Poppins"
  >
    <router-link
      :to="{ name: 'home-route' }"
      replace
      class="text-center text-4xl font-semibold cursor-pointer"
      ><span>Give<span class="text-pink-500">Well</span></span>
    </router-link>

    <form
      @submit.prevent="handleLogin"
      class="bg-white border-gray-100 shadow-sm border rounded-lg flex flex-col w-full max-w-lg p-10 justify-start"
      :class="authStore.getError ? 'mt-6' : 'mt-11'"
    >
      <div class="input-container flex flex-col items-stretch">
        <label class="text-sm font-semibold" for="username">Email</label>
        <input
          v-model="email"
          type="text"
          class="rounded-md border-2 border-solid border-gray-200 h-10 px-3 mt-2 focus:outline-pink-300"
        />
      </div>
      <div class="input-container flex flex-col items-stretch mt-6">
        <label class="text-sm font-semibold" for="password">Mật khẩu</label>
        <input
          v-model="password"
          class="rounded-md border-2 border-gray-200 h-10 px-3 mt-2 focus:outline-pink-300"
          type="password"
        />
      </div>
      <div
        class="text-right text-sm font-bold w-full min-w-full mt-3 hover:text-pink-500 text-pink-400"
      >
        <router-link to="/" class=""><span>Quên mật khẩu</span></router-link>
      </div>
      <button
        type="submit"
        class="min-w-full py-2 mt-3 font-bold text-sm text-white h-10 bg-pink-500 hover:bg-pink-400 rounded-md"
      >
        Đăng nhập
      </button>
      <div
        v-if="error"
        class="text-sm text-red-500 mt-6 transition-[height] duration-500 ease-out"
      >
        <span>{{ error }}</span>
      </div>
    </form>
    <div class="flex text-sm mt-8">
      <span
        >Bạn chưa có tài khoản?
        <router-link
          :to="{ name: 'register-route' }"
          replace
          class="text-center font-bold hover:text-indigo-500 text-indigo-400"
          >Đăng ký</router-link
        ></span
      >
    </div>
  </div>
</template>

<script>
import { useAuthStore } from '@/stores/authStore'
import { storeToRefs } from 'pinia'
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'
export default {
  setup() {
    const email = ref()
    const password = ref()
    const authStore = useAuthStore()
    const router = useRouter()
    const { isLoggedIn, error } = storeToRefs(authStore)
    watch(isLoggedIn, () => {
      router.replace({ name: 'home-route' })
    })

    const handleLogin = () => {
      authStore.login({
        email: email.value,
        password: password.value,
      })
      // console.log(authStore.getLoggedIn)
      // if (authStore.getLoggedIn) {

      // }
      // console.log(authStore.getLoggedIn)
    }

    return { email, password, authStore, handleLogin, isLoggedIn, error }
  },
}
</script>

<style>
</style>    