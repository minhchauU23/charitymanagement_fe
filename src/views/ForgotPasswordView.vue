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
      class="bg-white border-gray-100 shadow-sm border rounded-lg flex flex-col w-full max-w-lg p-10 justify-start"
      @submit.prevent="handleForgotPassword"
    >
      <div class="input-container flex flex-col items-stretch">
        <label class="text-sm font-semibold" for="username"
          >Nhập email của bạn</label
        >
        <!-- <div class="text-xs font-thin">
          Chúng tôi sẽ gửi mật khẩu mới vào email
        </div> -->
        <input
          v-model="email"
          type="text"
          class="rounded-md border-2 border-solid border-gray-200 h-10 px-3 mt-2 focus:outline-pink-300"
          :class="errors.emailError || errors.userError ? 'border-red-500' : ''"
        />
        <span v-if="errors.emailError" class="text-red-500 text-xs p-1">{{
          errors.emailError
        }}</span>
        <span v-if="errors.userError" class="text-red-500 text-xs p-1">{{
          errors.userError
        }}</span>
      </div>

      <button
        type="submit"
        class="min-w-full py-2 mt-3 font-bold text-sm text-white h-10 bg-pink-500 hover:bg-pink-400 rounded-md"
      >
        Gửi yêu cầu
      </button>
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
import { useUserStore } from '@/stores/userStore'
import { storeToRefs } from 'pinia'
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'
export default {
  setup() {
    const email = ref()
    const userStore = useUserStore()
    const router = useRouter()
    const { errors, isForgotSuccess } = storeToRefs(userStore)
    watch(isForgotSuccess, () => {
      router.replace({ name: 'reset-password-route' })
      errors.value = ''
    })

    const handleForgotPassword = () => {
      userStore.forgotPassword({
        email: email.value,
      })
    }

    return { email, userStore, handleForgotPassword, errors }
  },
}
</script>
  
  <style>
</style>    