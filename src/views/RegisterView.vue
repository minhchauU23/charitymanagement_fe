<template>
  <div
    class="form-wrapper flex flex-col items-center justify-center min-h-screen font-Poppins"
  >
    <router-link
      :to="{ name: 'home-route' }"
      replace
      class="text-center text-4xl font-semibold cursor-pointer"
      ><span>Give<span class="text-pink-500">Well</span></span>
    </router-link>

    <form
      @submit.prevent="handleRegister"
      class="bg-white border-gray-100 border-2 rounded-lg flex flex-col w-full max-w-lg p-10"
      :class="authStore.getError ? 'mt-6' : 'mt-11'"
    >
      <div class="input-container flex flex-col items-stretch">
        <label class="text-sm font-semibold" for="username"
          >Họ và tên đệm</label
        >
        <input
          v-model="firstName"
          type="text"
          class="rounded-md border-2 border-solid border-gray-200 h-10 px-3 mt-2 focus:outline-indigo-400"
          :class="errors.firstNameError ? 'border-red-500' : ''"
        />
        <span v-if="errors.firstNameError" class="text-red-500 text-xs p-1">{{
          errors.firstNameError
        }}</span>
      </div>
      <div class="input-container flex flex-col items-stretch mt-6">
        <label class="text-sm font-semibold" for="username">Tên</label>
        <input
          v-model="lastName"
          type="text"
          class="rounded-md border-2 border-solid border-gray-200 h-10 px-3 mt-2 focus:outline-indigo-400"
          :class="errors.lastNameError ? 'border-red-500' : ''"
        />
        <span v-if="errors.lastNameError" class="text-red-500 text-xs p-1">{{
          errors.lastNameError
        }}</span>
      </div>
      <div class="input-container flex flex-col items-stretch mt-6">
        <label class="text-sm font-semibold" for="username"
          >Số điện thoại</label
        >
        <input
          v-model="phone"
          type="text"
          class="rounded-md border-2 border-solid border-gray-200 h-10 px-3 mt-2 focus:outline-indigo-400"
          :class="errors.phoneError ? 'border-red-500' : ''"
        />
        <span v-if="errors.phoneError" class="text-red-500 text-xs p-1">{{
          errors.phoneError
        }}</span>
      </div>
      <div class="input-container flex flex-col items-stretch mt-6">
        <label class="text-sm font-semibold" for="username">Email</label>
        <input
          v-model="email"
          type="text"
          class="rounded-md border-2 border-solid border-gray-200 h-10 px-3 mt-2 focus:outline-indigo-400"
          :class="errors.emailError ? 'border-red-500' : ''"
        />
        <span v-if="errors.emailError" class="text-red-500 text-xs p-1">{{
          errors.emailError
        }}</span>
      </div>
      <div class="input-container flex flex-col items-stretch mt-6">
        <label class="text-sm font-semibold" for="password">Mật khẩu</label>
        <input
          v-model="password"
          class="rounded-md border-2 border-gray-200 h-10 px-3 mt-2 focus:outline-indigo-400"
          type="password"
          :class="errors.passwordError ? 'border-red-500' : ''"
        />
        <span v-if="errors.passwordError" class="text-red-500 text-xs p-1">{{
          errors.passwordError
        }}</span>
      </div>
      <button
        type="submit"
        class="min-w-full py-2 mt-8 font-bold text-sm text-white h-10 hover:bg-indigo-400 bg-indigo-500 rounded-md"
      >
        Đăng ký
      </button>
      <!-- <div
        v-if="errors"
        class="text-sm text-red-500 mt-6 transition-[height] duration-500 ease-out"
      >
        <span>{{ errors }}</span>
      </div> -->
    </form>
    <div class="flex text-sm mt-8">
      <span
        >Bạn đã có tài khoản?
        <router-link
          :to="{ name: 'login-route' }"
          replace
          class="text-center hover:text-pink-500 text-pink-400 font-bold"
          >Đăng nhập</router-link
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
    const firstName = ref()
    const lastName = ref()
    const phone = ref()
    const authStore = useAuthStore()
    const router = useRouter()
    const { isRegisted, errors } = storeToRefs(authStore)

    watch(isRegisted, () => {
      console.log('at registed view ' + isRegisted)
      router.replace({ name: 'login-route' })
    })

    const handleRegister = () => {
      authStore.register({
        email: email.value,
        password: password.value,
        firstName: firstName.value,
        lastName: lastName.value,
        phone: phone.value,
      })
    }

    return {
      email,
      password,
      firstName,
      lastName,
      phone,
      authStore,
      isRegisted,
      errors,
      handleRegister,
    }
  },
}
</script>
  
  <style>
</style>    