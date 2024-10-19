<script >
import { computed } from 'vue'
import { useRoute } from 'vue-router'
export default {
  setup() {
    const route = useRoute()

    const layout = computed(() => {
      return `${route.meta.layout}-layout`
    })

    return { layout }
  },
}
</script>

<template>
  <component :is="layout"><router-view></router-view></component>
</template>

<style >
</style>
