<template>
  <img
    :class="[avatarSize, 'rounded-full inline-block mr-3']"
    :src="user.photoURL"
    :alt="user.uid"
  />
</template>

<script lang="ts">
/** @TODO fallback user avatar url when no photoURL key in user object */
import { useCurrentUser } from '@/hooks/user'
import { computed, defineComponent, PropType } from 'vue'

export default defineComponent({
  props: {
    size: {
      type: String as PropType<'sm' | 'md' | 'lg'>,
      required: false,
      default: 'md'
    }
  },
  setup(props) {
    const currentUser = useCurrentUser()
    const avatarSize = computed(() => {
      switch (props.size) {
        case 'sm':
          return 'w-8 h-8'
        case 'md':
          return 'w-10 h-10'
        case 'lg':
          return 'w-16 h-16'
        default:
          return 'w-10 h-10'
      }
    })

    return {
      user: currentUser,
      avatarSize
    }
  }
})
</script>
