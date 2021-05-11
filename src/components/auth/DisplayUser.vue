<template>
  <div :key="uid" class="wrapper" ref="parentRef" @click="visible = true">
    <UserAvatar class="mr-2" />
    <div class="mr-2">
      {{ displayName }}
    </div>
    <ChevronDown />
  </div>
  <Tether
    v-if="parentRef && visible"
    :parentRef="parentRef"
    :visible="visible"
    @update:visible="visibleHandler"
  >
    <UserMenu />
  </Tether>
</template>

<script lang="ts">
import { computed, defineAsyncComponent, defineComponent, ref } from 'vue'
import UserAvatar from '@/components/auth/UserAvatar.vue'
import ChevronDown from '@/components/icons/ChevronDown.vue'
import Tether from '@/components/utils/Tether.vue'
import { useTether } from '@/hooks/tether'
import { useStore } from '@/store'

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
    const store = useStore()
    const { parentRef, visible, visibleHandler } = useTether()

    return {
      displayName: computed(() => store.getters['user/getUserDisplayName']),
      uid: computed(() => store.getters['user/getCurrentUser'].uid),
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
