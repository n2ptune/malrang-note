<template>
  <Full> About Page </Full>
</template>

<script lang="ts">
import { defineAsyncComponent, defineComponent } from 'vue'

export default defineComponent({
  components: {
    Full: defineAsyncComponent(() => import('@/components/layouts/Full.vue'))
  }
})
</script>
