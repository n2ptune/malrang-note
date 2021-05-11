<template>
  <div class="flex flex-col flex-wrap">
    <div>
      <UserAvatar size="xl" />
      {{ userName }}
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
    const userName = computed(
      () => store.getters['user/getCurrentUser'].email.split('@')[0]
    )

    return {
      userName
    }
  }
})
</script>
