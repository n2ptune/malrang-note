<template>
  <div :key="user.uid" class="flex justify-center items-center space-x-2">
    <UserAvatar />
    <div>
      {{ user.displayName || user.email }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useCurrentUser } from '@/hooks/user'

export default defineComponent({
  setup() {
    const currentUser = useCurrentUser()

    return {
      user: currentUser
    }
  }
})
</script>
