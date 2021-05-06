<template>
  <router-view v-if="currentUser" class="h-screen" />
  <div v-else>Logging</div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { injectUserToStore } from '@/services/auth/user'
import { useStore } from '@/store'

export default defineComponent({
  setup() {
    injectUserToStore()

    const store = useStore()

    return {
      currentUser: computed(() => store.getters['user/getCurrentUser'])
    }
  }
})
</script>
