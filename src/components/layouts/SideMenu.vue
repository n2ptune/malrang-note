<template>
  <aside class="relative px-4 py-6 space-y-4 h-full">
    <DisplayUser />
    <PrivatePages />
    <SharedPages />
    <MyOptions />
  </aside>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import DisplayUser from '@/components/auth/DisplayUser.vue'
import MyOptions from '@/components/utils/MyOptions.vue'
import PrivatePages from '@/components/pages/PrivatePages.vue'
import SharedPages from '@/components/pages/SharedPages.vue'

export default defineComponent({
  components: {
    DisplayUser,
    PrivatePages,
    MyOptions,
    SharedPages
  }
})
</script>
