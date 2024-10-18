<template>
  <button @click="click">click test</button>
</template>

<script>
import { useAuthStore } from '@/stores/authStore'

export default {
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