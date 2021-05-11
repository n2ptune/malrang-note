<template>
  <div v-show="!loggedIn" class="p-5">
    <input v-model="form.email" type="email" />
    <input v-model="form.password" type="password" />
  </div>
</template>

<script lang="ts">
import { useStore } from '@/store'
import { computed, defineComponent, onBeforeUnmount, reactive } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  setup() {
    const router = useRouter()
    const store = useStore()
    const form = reactive({
      email: '',
      password: ''
    })

    // Watch LocalStorage
    const watchStorage = setInterval(() => {
      const loggedIn = localStorage.getItem('loggedIn')
      if (loggedIn) {
        router.push('/')
      }
    }, 1000)

    onBeforeUnmount(() => {
      clearInterval(watchStorage)
    })

    return {
      form,
      loggedIn: computed(() => store.state.user.loggedIn)
    }
  }
})
</script>

<style lang="postcss" scoped>
input {
  @apply focus:outline-none p-2;
}
</style>
