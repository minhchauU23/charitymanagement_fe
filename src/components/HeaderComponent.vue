<template>
  <header
    class="py-4 w-screen mx-auto font-Poppins bg-white border shadow-sm fixed"
  >
    <nav
      class="flex lg:justify-center justify-between items-center mx-4 lg:mx-16"
    >
      <router-link
        :to="{ name: 'home-route' }"
        class="bg-gradient-to-r from-indigo-500 to-pink-500 text-transparent bg-clip-text lg:basis-1/6 basis-1/2 lg:min-w-56 text-center text-3xl font-bold cursor-pointer"
        ><span>Give<span>Well</span></span>
      </router-link>

      <ul
        class="hidden lg:flex lg:flex-row lg:justify-start lg:rounded-none lg:border-none font-semibold text-sm lg:basis-4/6 gap-8"
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
            >Các chiến dịch</router-link
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

      <div class="lg:basis-1/6 basis-1/2 flex justify-end text-sm items-center">
        <div
          v-if="!isLoggedIn"
          class="min-w-56 flex ml-4 justify-end text-sm items-center"
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
        <div v-else class="min-w-56 flex justify-end text-sm items-center">
          <img
            class="h-10 rounded-full"
            src="https://static.vecteezy.com/system/resources/previews/002/002/403/non_2x/man-with-beard-avatar-character-isolated-icon-free-vector.jpg"
            alt="Rounded avatar"
          />
          <!-- {{ user.email }} -->
          <button
            class="px-4 py-2 text-center w-full max-w-28 bg-gray-200 border rounded-md"
            @click="authStore.logout"
          >
            Đăng xuất
          </button>
        </div>

        <div class="px-1 relative lg:hidden" @click="showMenu">
          <span class="hover:text-pink-500 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="size-6"
            >
              <path
                fill-rule="evenodd"
                d="M3 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 5.25Zm0 4.5A.75.75 0 0 1 3.75 9h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 9.75Zm0 4.5a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Zm0 4.5a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
                clip-rule="evenodd"
              />
            </svg>
          </span>
          <ul
            class="absolute top-10 right-0 w-72 flex-col bg-white rounded-md border items-center gap-4 py-4 transition-[height] duration- ease-out"
            :class="isShowMenu ? 'flex' : 'hidden'"
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
                >Các chiến dịch</router-link
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
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import { useAuthStore } from '@/stores/authStore'
import { storeToRefs } from 'pinia'
import { ref } from 'vue'
// import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'

export default {
  setup() {
    const authStore = useAuthStore()
    const router = useRouter()
    const { isLoggedIn, user } = storeToRefs(authStore)
    const isShowMenu = ref(false)

    const showMenu = () => {
      isShowMenu.value = !isShowMenu.value
    }
    const handleLogout = function () {
      authStore.logout
      router.push({ name: 'home-route' })
      //show pop up
    }
    return {
      authStore,
      handleLogout,
      isLoggedIn,
      user,
      showMenu,
      isShowMenu,
    }
  },
}
</script>

<style>
</style>