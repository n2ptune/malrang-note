<template>
  <div class="dark:text-red-500 text-brand-primary">Hello Malrang note</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { injectUserToStore } from '@/services/auth/user'
import { useStore } from '@/store'

export default defineComponent({
  setup() {
    injectUserToStore()
  }
})
</script>
