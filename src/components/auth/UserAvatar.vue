<template>
  <img :src="user.photoURL" :alt="user.uid" />
</template>

<script lang="ts">
import { useCurrentUser } from '@/hooks/user'
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    const currentUser = useCurrentUser()

    return {
      user: currentUser
    }
  }
})
</script>
