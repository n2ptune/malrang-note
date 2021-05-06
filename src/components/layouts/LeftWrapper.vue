<template>
  <article class="px-2 py-4">
    <DisplayUser />
  </article>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import DisplayUser from '@/components/auth/DisplayUser.vue'

export default defineComponent({
  components: {
    DisplayUser
  }
})
</script>
