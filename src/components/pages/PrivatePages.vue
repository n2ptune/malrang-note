<template>
  <div>{{ privatePage.title || privatePageMeta.title }}</div>
</template>

<script lang="ts">
import { useStore } from '@/store'
import { computed, defineComponent } from 'vue'

export default defineComponent({
  setup() {
    const store = useStore()
    store.dispatch('private/dispatchPrivatePage')

    const privatePageMeta = computed(
      () => store.getters['private/getPrivatePageMeta']
    )
    const privatePage = computed(() => store.getters['private/getPrivatePage'])

    return {
      privatePageMeta,
      privatePage
    }
  }
})
</script>
