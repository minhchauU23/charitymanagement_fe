<template>
  <div class="content pt-20 pb-8 mx-8">
    <section class="bread-cum"></section>
    <section class="campaign-types">
      <ul
        class="flex max-w-2xl w-full justify-between text-pink-500 font-bold text-lg flex-wrap text-center py-4 mx-auto"
      >
        <li>Trẻ em</li>
        <li>Y tế</li>
        <li>Giáo dục</li>
        <li>Người già neo đơn</li>
        <li>Cộng đồng</li>
      </ul>
    </section>
    <section class="campaigns">
      <div class="max-w-2xl w-full mx-auto">
        <ul class="campaign-tabs flex justify-between">
          <li>Các chiến dịch đang gây quỹ</li>
          <li>Các chiến dịch đã gây quỹ</li>
        </ul>
      </div>
      <div
        class="grid grid-cols-1 gap-8 lg:grid-cols-3 md:grid-cols-2 md:gap-8 max-w-6xl mt-10 mx-auto"
      >
        <card-component
          title="Hello word"
          short-description="This is description"
          :gived="10000"
          :total="10000000"
        ></card-component>
        <!-- <card-component></card-component>
        <card-component></card-component>
        <card-component></card-component> -->
      </div>
    </section>
  </div>
</template>

<script>
import CardComponent from '@/components/CardComponent.vue'

export default {
  components: {
    CardComponent,
  },
  setup() {},
}
</script>

<style>
</style>