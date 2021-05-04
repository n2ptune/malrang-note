<template>
  <div class="dark:text-red-500 text-brand-primary">Hello Malrang note</div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import { useStore } from 'vuex'
import { app } from '@/plugins/firebase'

export default defineComponent({
  setup() {
    const store = useStore()

    onMounted(async () => {
      app.auth().onAuthStateChanged((user) => {
        console.log(user)
      })
    })
  }
})
</script>
