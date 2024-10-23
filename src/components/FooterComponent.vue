<template>
  <footer
    class="bg-zinc-800 flex justify-center text-lg font-thin text-white min-h-[517px] px-20 py-10"
  >
    <div class="w-screen max-w-4xl flex flex-col">
      <div class="flex justify-between flex-1">
        <div class="bottom-menu flex flex-col gap-4">
          <router-link
            :to="{ name: 'home-route' }"
            class="bg-gradient-to-r from-indigo-500 to-pink-500 text-transparent bg-clip-text lg:min-w-56 text-6xl font-bold cursor-pointer"
            ><span class=" ">Give<span class="">Well</span></span>
          </router-link>
          <ul class="gap-4">
            <li>Thường Tín, Hà Nội</li>
            <li>givewell@gmail.com</li>
            <li>0396024810</li>
          </ul>
        </div>

        <div class="">
          <ul>
            <li>Trang chủ</li>
            <li>Các chiến dịch</li>
            <li>Về chúng tôi</li>
            <li>Hướng dẫn</li>
          </ul>
        </div>
        <div class="">
          <ul>
            <li>Hỏi đáp</li>
            <li>Liên hệ</li>
            <li>Chính sách bảo mật</li>
            <li>Điều khoản & điều kiện</li>
          </ul>
        </div>
      </div>
      <div class="flex justify-center border-b-2 border-pink-500 mb-6">
        <ul class="flex gap-4 justify-center p-4">
          <li>Zalo</li>
          <li>Facebook</li>
        </ul>
      </div>
      <div class="text-center">COPYRIGHT @2024 GiveWell</div>
    </div>
  </footer>
</template>

<script>
export default {}
</script>

<style>
</style>