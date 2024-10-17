<template>
  <header class="py-4 mx-auto font-Poppins bg-white">
    <nav class="flex justify-center items-center mx-16">
      <router-link
        :to="{ name: 'home-route' }"
        class="basis-1/6 min-w-56 mã text-center text-3xl font-bold cursor-pointer"
        ><span>Give<span class="text-pink-500">Well</span></span>
      </router-link>
      <ul
        class="hidden lg:flex justify-start items-center font-semibold text-sm basis-4/6 gap-8"
      >
        <li>
          <router-link
            :to="{ name: 'home-route' }"
            replace
            class="hover:text-pink-500"
            >Trang chủ</router-link
          >
        </li>
        <li>
          <router-link
            :to="{ name: 'campaigns-route' }"
            replace
            class="hover:text-pink-500"
            >Chiến dịch</router-link
          >
        </li>
        <li>
          <router-link
            :to="{ name: 'about-route' }"
            replace
            class="hover:text-pink-500"
            >Về chúng tôi</router-link
          >
        </li>
        <li>
          <router-link
            :to="{ name: 'reference-route' }"
            replace
            class="hover:text-pink-500"
            >Hướng dẫn</router-link
          >
        </li>
      </ul>

      <div
        v-if="!isLoggedIn"
        class="basis-1/6 min-w-56 flex ml-4 justify-end text-sm items-center"
      >
        <router-link
          :to="{ name: 'login-route' }"
          class="px-4 py-2 w-full max-w-28 text-center bg-pink-500 text-white font-bold text-xs border rounded-md"
          >Đăng nhập</router-link
        >
        <router-link
          :to="{ name: 'register-route' }"
          class="px-4 py-2 ml-2 w-full max-w-28 text-center bg-indigo-500 font-bold text-xs text-white border rounded-md"
          >Đăng ký</router-link
        >
      </div>
      <div v-else class="basis-1/6 flex justify-end text-sm items-center">
        <img
          class="h-10 rounded-full"
          src="https://static.vecteezy.com/system/resources/previews/002/002/403/non_2x/man-with-beard-avatar-character-isolated-icon-free-vector.jpg"
          alt="Rounded avatar"
        />
        <button
          class="px-6 py-2 text-center bg-gray-200 border rounded-md"
          @click="authStore.logout"
        >
          Đăng xuất
        </button>

        <!-- <div class="auth-wrapper">
          <
        </div> -->
      </div>
    </nav>
  </header>
</template>

<script>
import { useAuthStore } from '@/stores/authStore'
import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router'

export default {
  setup() {
    const authStore = useAuthStore()
    const router = useRouter()
    const { isLoggedIn } = storeToRefs(authStore)
    const handleLogout = function () {
      authStore.logout
      router.push({ name: 'home-route' })

      //show pop up
    }
    return { authStore, handleLogout, isLoggedIn }
  },
}
</script>

<style>
</style>