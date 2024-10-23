<template>
  <slider-component></slider-component>
  <div>Hello</div>
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