<template>
  <button :class="classes">
    <Feather v-if="icon" v-bind="icon" />
    <span class="align-middle">
      <slot />
    </span>
  </button>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue'
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
    },
    isPrimary: {
      type: Boolean as PropType<boolean>,
      required: false,
      default: true
    }
  },
  setup(props) {
    const classes = computed(() =>
      props.isPrimary ? 'primary' : 'non-primary'
    )

    return { classes }
  }
})
</script>

<style lang="postcss" scoped>
button {
  @apply px-4 py-1 transition-colors duration-200
  focus:outline-none space-x-2;

  &.primary {
    @apply text-brand-black bg-brand-primary hover:bg-brand-pale;
  }

  &.non-primary {
    @apply bg-brand-black-l text-white dark:bg-white dark:text-brand-black
    hover:bg-brand-black dark:hover:bg-gray-200;
  }
}
</style>
