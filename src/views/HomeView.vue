<template>
  <!-- <div class="pt-20">
    
    <section></section>
  </div> -->
  <section class="content pt-20">
    <slider-component></slider-component>
  </section>
</template>

<script>
import { useAuthStore } from '@/stores/authStore'
import SliderComponent from '@/components/SliderComponent.vue'

export default {
  components: { SliderComponent },
  setup() {
    const authStore = useAuthStore()

    function click() {
      authStore.clickTest()
    }
    return { authStore, click }
  },
}
</script>

<style>
</style>