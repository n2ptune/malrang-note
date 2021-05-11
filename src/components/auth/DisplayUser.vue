<template>
  <div :key="user.uid" class="wrapper" ref="parentRef" @click="visible = true">
    <UserAvatar class="mr-2" />
    <div class="mr-2">
      {{ user.displayName || user.email }}
    </div>
    <ChevronDown />
  </div>
  <Tether
    v-if="parentRef && visible"
    class="w-72"
    attachment="top left"
    targetAttachment="bottom left"
    offset="-15px 0"
    :parentRef="parentRef"
    :visible="visible"
    @update:visible="visibleHandler"
  >
    <UserMenu />
  </Tether>
</template>

<script lang="ts">
import { defineAsyncComponent, defineComponent } from 'vue'
import { useCurrentUser } from '@/hooks/user'
import UserAvatar from '@/components/auth/UserAvatar.vue'
import ChevronDown from '@/components/icons/ChevronDown.vue'
import Tether from '@/components/utils/Tether.vue'
import { useTether } from '@/hooks/tether'

export default defineComponent({
  components: {
    UserAvatar,
    ChevronDown,
    Tether,
    UserMenu: defineAsyncComponent(
      () => import('@/components/utils/dropdown/UserMenu.vue')
    )
  },
  setup() {
    const currentUser = useCurrentUser()
    const { parentRef, visible, visibleHandler } = useTether()

    return {
      user: currentUser,
      parentRef,
      visible,
      visibleHandler
    }
  }
})
</script>

<style lang="postcss" scoped>
.wrapper {
  @apply inline-flex items-center cursor-pointer;
  & ::v-deep .icon-base {
    @apply transition-colors duration-200 text-gray-400;
  }
  &:hover ::v-deep .icon-base {
    @apply text-white;
  }
}
</style>
