<template>
  <button>
    <Feather v-if="icon" v-bind="icon" />
    <span class="align-middle">
      <slot />
    </span>
  </button>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import Feather from '@/components/utils/Feather.vue'

export default defineComponent({
  components: {
    Feather
  },
  props: {
    icon: {
      type: Object as PropType<unknown>,
      required: false,
      default: null
    }
  }
})
</script>

<style lang="postcss" scoped>
button {
  @apply bg-brand-primary text-brand-black px-4 py-1 transition-colors duration-200
  focus:outline-none space-x-2;

  &:hover {
    @apply bg-brand-pale outline-none;
  }
}
</style>
