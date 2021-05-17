<template>
  <Tippy animation="shift-away" interactive trigger="click" role="group">
    <div
      :key="uid"
      class="inline-flex items-center cursor-pointer"
      ref="parentRef"
      @click="visible = true"
    >
      <UserAvatar class="mr-2" />
      <div class="mr-2">
        {{ displayName }}
      </div>
      <Feather type="chevron-down" :size="20" isDark />
    </div>
    <template #content>
      <UserMenu />
    </template>
  </Tippy>
</template>

<script lang="ts">
import { computed, defineAsyncComponent, defineComponent } from 'vue'
import UserAvatar from '@/components/auth/UserAvatar.vue'
import UserMenu from '@/components/utils/dropdown/UserMenu.vue'
import { useStore } from '@/store'

export default defineComponent({
  components: {
    UserAvatar,
    UserMenu,
    Feather: defineAsyncComponent(
      () => import('@/components/utils/Feather.vue')
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
