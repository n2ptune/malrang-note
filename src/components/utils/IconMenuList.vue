<template>
  <ul class="menu-wrapper">
    <li
      :class="[
        'menu-item',
        itemCustomClass,
        usingHoverClass ? 'using-default-hover' : ''
      ]"
      :key="menu.name"
      @click="menu.onClickHandler"
    >
      <Feather
        noHoverClass
        :type="menu.iconType"
        :class="['feather', iconCustomClass]"
        :size="18"
      />
      <span>{{ menu.name }}</span>
    </li>
  </ul>
  <ul v-if="children" class="children-wrapper">
    <slot name="children" />
  </ul>
</template>

<script lang="ts">
import { defineAsyncComponent, defineComponent, PropType } from 'vue'

export type IconMenu = {
  name: string
  iconType: string
  onClickHandler?: (event: unknown) => unknown
}

export default defineComponent({
  props: {
    menu: {
      type: Object as PropType<IconMenu>,
      required: true
    },
    itemCustomClass: String as PropType<string>,
    iconCustomClass: String as PropType<string>,
    usingHoverClass: {
      type: Boolean as PropType<boolean>,
      required: false,
      default: true
    },
    children: {
      type: Boolean as PropType<boolean>,
      required: false,
      default: false
    }
  },
  components: {
    Feather: defineAsyncComponent(() => import('./Feather.vue'))
  }
})
</script>

<style lang="postcss" scoped>
.menu-wrapper {
  @apply space-y-4;

  & > .menu-item {
    /* default */
    @apply transition-colors duration-300 cursor-pointer;

    /* default by optional */
    &.using-default-hover {
      @apply text-gray-400 hover:text-white;
    }
    & > * {
      @apply align-middle;

      &.feather {
        @apply mr-2;
      }
    }
  }
}
.children-wrapper {
  @apply pt-1;

  &::v-deep(li) {
    @apply text-gray-400 transition-colors duration-300 cursor-pointer pl-7 my-1
    hover:text-white;
  }
}
</style>
