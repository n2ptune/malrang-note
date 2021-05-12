<template>
  <vue-feather
    :type="type"
    :class="['feather-icon-extend', noHoverClass || 'hover-standalone']"
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
    size: [String, Number] as PropType<string | number>,
    noHoverClass: {
      type: Boolean as PropType<boolean>,
      required: false,
      default: false
    }
  }
})
</script>

<style lang="postcss" scoped>
.feather-icon-extend {
  @apply transition-colors duration-200 text-gray-400;

  &.hover-standalone:hover {
    @apply text-white;
  }
}
</style>
