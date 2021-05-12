<template>
  <!-- Layout -->
  <main v-if="loggedIn" class="layout">
    <aside class="bg-brand-black-tippy text-white col-span-2">
      <SideMenu />
    </aside>
    <section class="col-span-14 grid grid-cols-14">
      <router-view />
    </section>
  </main>
  <main v-else>TODO: LOGIN FORM</main>
  <!-- <router-view v-if="currentUser" class="h-screen" />
  <div v-else>Logging</div> -->
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { injectUserToStore } from '@/services/auth/user'
import { useStore } from '@/store'
import { useCheckLogin } from './hooks/user'
import SideMenu from '@/components/layouts/SideMenu.vue'

export default defineComponent({
  components: {
    SideMenu
  },
  setup() {
    useCheckLogin()
    injectUserToStore()

    const store = useStore()

    return {
      loggedIn: computed(() => store.getters['user/getLoggedIn'])
    }
  }
})
</script>

<style lang="postcss" scoped>
.layout {
  @apply grid grid-cols-16 h-screen break-all;
}
</style>
