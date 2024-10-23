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
      @submit.prevent="handleResetPassword"
    >
      <div class="input-container flex flex-col items-stretch">
        <label class="text-sm font-semibold" for="username">Email</label>
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

      <div class="input-container flex flex-col items-stretch mt-6">
        <label class="text-sm font-semibold" for="password">Mật khẩu</label>
        <input
          v-model="password"
          class="rounded-md border-2 border-gray-200 h-10 px-3 mt-2 focus:outline-pink-300"
          type="password"
          :class="errors.passwordError ? 'border-red-500' : ''"
        />
        <span v-if="errors?.passwordError" class="text-red-500 text-xs p-1">{{
          errors.passwordError
        }}</span>
      </div>

      <div class="input-container flex flex-col items-stretch mt-6">
        <label class="text-sm font-semibold" for="password"
          >Nhập lại mật khẩu</label
        >
        <input
          v-model="repeatPassword"
          class="rounded-md border-2 border-gray-200 h-10 px-3 mt-2 focus:outline-pink-300"
          type="password"
          :class="errors.passwordError ? 'border-red-500' : ''"
        />
        <span v-if="errors?.passwordError" class="text-red-500 text-xs p-1">{{
          errors.passwordError
        }}</span>
        <span
          v-if="errors?.repeatPasswordError"
          class="text-red-500 text-xs p-1"
          >{{ errors.repeatPasswordError }}</span
        >
      </div>

      <div class="input-container flex flex-col items-stretch mt-6">
        <label class="text-sm font-semibold" for="password"
          >Mã khôi phục mật khẩu</label
        >
        <input
          v-model="resetPasswordCode"
          class="rounded-md border-2 border-gray-200 h-10 px-3 mt-2 focus:outline-pink-300"
          type="password"
          :class="errors.resetPasswordCodeError ? 'border-red-500' : ''"
        />
        <span
          v-if="errors?.resetPasswordCodeError"
          class="text-red-500 text-xs p-1"
          >{{ errors.resetPasswordCodeError }}</span
        >
      </div>

      <button
        type="submit"
        class="min-w-full py-2 mt-3 font-bold text-sm text-white h-10 bg-pink-500 hover:bg-pink-400 rounded-md"
      >
        Khôi phục
      </button>
    </form>
    <!-- <div class="flex text-sm mt-8">
      <span
        >Bạn chưa có tài khoản?
        <router-link
          :to="{ name: 'register-route' }"
          replace
          class="text-center font-bold hover:text-indigo-500 text-indigo-400"
          >Đăng ký</router-link
        ></span
      >
    </div> -->
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
    const password = ref()
    const repeatPassword = ref()
    const resetPasswordCode = ref()
    const userStore = useUserStore()
    const router = useRouter()
    const { errors, isResetSuccess } = storeToRefs(userStore)
    watch(isResetSuccess, () => {
      router.replace({ name: 'home-route' })
      errors.value = ''
    })

    const handleResetPassword = () => {
      userStore.resetPassword({
        email: email.value,
        password: password.value,
        repeatPassword: repeatPassword.value,
        resetPasswordCode: resetPasswordCode.value,
      })
    }

    return {
      email,
      password,
      repeatPassword,
      resetPasswordCode,
      userStore,
      handleResetPassword,
      errors,
    }
  },
}
</script>
    
<style>
</style>    