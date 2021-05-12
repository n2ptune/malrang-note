<template>
  <Tippy-Singleton interactive :arrow="false" trigger="click">
    <div :key="uid" class="wrapper" ref="parentRef" @click="visible = true">
      <UserAvatar class="mr-2" />
      <div class="mr-2">
        {{ displayName }}
      </div>
      <ChevronDown />
    </div>
    <template #content>
      <UserMenu />
    </template>
  </Tippy-Singleton>
</template>

<script lang="ts">
import { computed, defineAsyncComponent, defineComponent } from 'vue'
import UserAvatar from '@/components/auth/UserAvatar.vue'
import ChevronDown from '@/components/icons/ChevronDown.vue'
import { useStore } from '@/store'

export default defineComponent({
  components: {
    UserAvatar,
    ChevronDown,
    UserMenu: defineAsyncComponent(
      () => import('@/components/utils/dropdown/UserMenu.vue')
    )
  },
  setup() {
    const store = useStore()

    return {
      displayName: computed(() => store.getters['user/getUserDisplayName']),
      uid: computed(() => store.getters['user/getCurrentUser'].uid)
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
