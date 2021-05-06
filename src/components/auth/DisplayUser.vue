<template>
  <div :key="user.uid" class="wrapper">
    <UserAvatar class="mr-2" />
    <div class="mr-2">
      {{ user.displayName || user.email }}
    </div>
    <ChevronDown />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useCurrentUser } from '@/hooks/user'
import UserAvatar from '@/components/auth/UserAvatar.vue'
import ChevronDown from '@/components/icons/ChevronDown.vue'

export default defineComponent({
  components: {
    UserAvatar,
    ChevronDown
  },
  setup() {
    const currentUser = useCurrentUser()

    return {
      user: currentUser
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
