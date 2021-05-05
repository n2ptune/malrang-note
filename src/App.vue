<template>
  <router-view class="h-screen" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { injectUserToStore } from '@/services/auth/user'

export default defineComponent({
  setup() {
    injectUserToStore()
  }
})
</script>
