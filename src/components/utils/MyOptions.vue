<template>
  <div class="my-options">
    <Feather
      v-for="icon in icons"
      :key="icon.type"
      v-bind="defaultFeatherOption"
      v-tippy="generateTippyOptions(icon.name)"
      :type="icon.type"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Feather from '@/components/utils/Feather.vue'
import { TippyOptions } from 'vue-tippy'

export default defineComponent({
  components: {
    Feather
  },
  setup() {
    return {
      icons: [
        {
          content: '프로필 업데이트',
          type: 'user'
        },
        {
          content: '새 글 쓰기',
          type: 'edit'
        }
      ],
      defaultFeatherOption: {
        size: 24,
        isDark: false
      },
      generateTippyOptions(name: string): TippyOptions {
        return {
          content: name,
          arrow: true,
          placement: 'top'
        }
      }
    }
  }
})
</script>

<style lang="postcss" scoped>
.my-options {
  height: 5vh;
  @apply absolute bottom-0 py-2 px-6 w-full left-0 border-t border-brand-thick
  flex items-center space-x-4 justify-end;
}
</style>
