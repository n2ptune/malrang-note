<template>
  <div class="flex flex-row flex-wrap justify-between items-center w-72">
    <div>
      <UserAvatar size="xl" />
      {{ userName }}
    </div>
    <Button
      @click="logoutHandler"
      class="rounded text-sm"
      :icon="{ type: 'log-out', size: 16, noHoverClass: true, isDark: false }"
    >
      로그아웃
    </Button>
  </div>
  <IconMenuList
    class="mt-6"
    :menus="[
      {
        name: '프로필 업데이트',
        iconType: 'user',
        onClickHandler: updateProfileHandler
      }
    ]"
  />
</template>

<script lang="ts">
import { computed, defineAsyncComponent, defineComponent } from 'vue'
import UserAvatar from '@/components/auth/UserAvatar.vue'
import { useStore } from '@/store'
import Button from '@/components/common/Button.vue'

export default defineComponent({
  components: {
    UserAvatar,
    IconMenuList: defineAsyncComponent(
      () => import('@/components/utils/IconMenuList.vue')
    ),
    Button
  },
  setup() {
    const store = useStore()
    const userName = computed(() => store.getters['user/getUserDisplayName'])
    const logoutHandler = () => {
      // store.dispatch('user/logout')
      console.log('logout')
    }
    const updateProfileHandler = (_event: unknown) => {
      console.log('update')
    }

    return {
      userName,
      logoutHandler,
      updateProfileHandler
    }
  }
})
</script>
