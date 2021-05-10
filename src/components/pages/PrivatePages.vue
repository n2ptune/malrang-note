<template>
  <div>{{ meta.title }}</div>
</template>

<script lang="ts">
import { useStore } from '@/store'
import { computed, defineComponent } from 'vue'

export default defineComponent({
  setup() {
    const store = useStore()

    return {
      meta: computed(() => store.getters['private/getPrivatePageMeta'])
    }
  }
})
</script>
