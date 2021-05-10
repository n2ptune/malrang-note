<template>
  <article class="px-4 py-6 space-y-4">
    <DisplayUser />
    <PrivatePages />
  </article>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import DisplayUser from '@/components/auth/DisplayUser.vue'
import PrivatePages from '@/components/pages/PrivatePages.vue'

export default defineComponent({
  components: {
    DisplayUser,
    PrivatePages
  }
})
</script>
