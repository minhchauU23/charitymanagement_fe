<template>
  <div class="w-full min-h-[500px] shadow-lg flex flex-col">
    <div>
      <img
        src="https://givenow.vn/wp-content/uploads/2024/09/SA%CC%81T-CA%CC%81NH-CU%CC%80NG-EM-QUA-MU%CC%80A-LU%CC%83_--450x338.png"
        class="w-full"
      />
    </div>
    <div class="content px-4 py-3 flex flex-col basis-1/2">
      <div class="title text-pink-500 font-bold text-lg">
        {{ title }}
      </div>
      <div class="flex-1">
        <p class="text-sm font-thin">
          {{ shortDescription }}
        </p>
      </div>
      <div class="loader">
        <div class="w-full bg-pink-500 h-1"></div>
        <div class="flex justify-between">
          <div>Đã quyên góp được: {{ gived }}</div>
          <div>44%</div>
        </div>
      </div>
      <div>Với mục tiêu: {{ total }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    shortDescription: String,
    gived: Number,
    total: Number,
  },
  setup() {},
}
</script>

<style>
</style>