<template>
  <div class="flex flex-row flex-wrap justify-between items-center w-72">
    <div>
      <UserAvatar size="xl" />
      {{ userName }}
    </div>
    <div class="logout" @click="logoutHandler">로그아웃</div>
  </div>
  <IconMenuList
    class="mt-6"
    itemCustomClass="text-gray-400 hover:text-brand-black-tippy"
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

export default defineComponent({
  components: {
    UserAvatar,
    IconMenuList: defineAsyncComponent(
      () => import('@/components/utils/IconMenuList.vue')
    )
  },
  setup() {
    const store = useStore()
    const userName = computed(() => store.getters['user/getUserDisplayName'])
    const logoutHandler = () => {
      store.dispatch('user/logout')
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

<style lang="postcss" scoped>
.logout {
  @apply rounded px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-400
  hover:text-brand-black-tippy text-sm cursor-pointer;
}
</style>
