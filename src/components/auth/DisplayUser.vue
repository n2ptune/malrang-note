<template>
  <div :key="uid" class="inline-flex items-center" ref="parentRef">
    <UserAvatar class="mr-2" />
    <div class="mr-2">
      {{ displayName }}
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import UserAvatar from '@/components/auth/UserAvatar.vue'
import { useStore } from '@/store'

export default defineComponent({
  components: {
    UserAvatar
  },
  setup() {
    const store = useStore()

    return {
      displayName: computed(() => store.getters['user/getUserDisplayName']),
      uid: computed(() => store.getters['user/getCurrentUser'].uid)
    }
  }
})
</script>
