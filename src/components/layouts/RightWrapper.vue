<template>
  <Core />
</template>

<script lang="ts">
import { defineAsyncComponent, defineComponent } from 'vue'

export default defineComponent({
  components: {
    Core: defineAsyncComponent(() => import('@/components/editor/Core.vue'))
  }
})
</script>
