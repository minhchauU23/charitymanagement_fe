<template>
  <HeaderComponent></HeaderComponent>
  <slot></slot>
  <FooterComponent></FooterComponent>
</template>

<script>
import FooterComponent from '@/components/FooterComponent.vue'
import HeaderComponent from '@/components/HeaderComponent.vue'

export default {
  components: {
    HeaderComponent,
    FooterComponent,
  },
  setup() {},
}
</script>

<style>
</style>