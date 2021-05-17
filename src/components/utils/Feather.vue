<template>
  <vue-feather
    :type="type"
    :class="[
      'feather-icon-extend',
      noHoverClass || 'hover-standalone',
      isDark || 'is-dark'
    ]"
    :size="size"
  />
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import VueFeather from 'vue-feather'

export default defineComponent({
  components: {
    VueFeather
  },
  props: {
    type: String as PropType<string>,
    size: {
      type: [String, Number] as PropType<string | number>,
      required: false,
      default: 16
    },
    noHoverClass: {
      type: Boolean as PropType<boolean>,
      required: false,
      default: false
    },
    isDark: {
      type: Boolean as PropType<boolean>,
      required: false,
      default: true
    }
  }
})
</script>

<style lang="postcss" scoped>
.feather-icon-extend {
  @apply text-current align-middle;

  &.hover-standalone {
    @apply transition-colors duration-200 text-gray-400;

    &:hover {
      @apply text-brand-black dark:text-white;
    }

    &.is-dark:hover {
      @apply text-white;
    }
  }
}
</style>
