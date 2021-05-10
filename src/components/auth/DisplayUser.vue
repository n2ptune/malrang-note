<template>
  <div
    :key="user.uid"
    class="wrapper"
    ref="tetherParentRef"
    @click="tetherVisible = !tetherVisible"
  >
    <UserAvatar class="mr-2" />
    <div class="mr-2">
      {{ user.displayName || user.email }}
    </div>
    <ChevronDown />
    <Tether
      v-if="tetherParentRef && tetherVisible"
      :parentRef="tetherParentRef"
      :visible="tetherVisible"
    >
      <div class="bg-white p-5">asdjasgfqyuwfgqwifgqwuifghqwuif</div>
    </Tether>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useCurrentUser } from '@/hooks/user'
import UserAvatar from '@/components/auth/UserAvatar.vue'
import ChevronDown from '@/components/icons/ChevronDown.vue'
import Tether from '@/components/utils/Tether.vue'

export default defineComponent({
  components: {
    UserAvatar,
    ChevronDown,
    Tether
  },
  setup() {
    const currentUser = useCurrentUser()
    const tetherParentRef = ref()
    const tetherVisible = ref(false)

    return {
      user: currentUser,
      tetherParentRef,
      tetherVisible
    }
  }
})
</script>

<style lang="postcss" scoped>
.wrapper {
  @apply flex items-center cursor-pointer;
  & ::v-deep .icon-base {
    @apply transition-colors duration-200 text-gray-400;
  }
  &:hover ::v-deep .icon-base {
    @apply text-white;
  }
}
</style>
