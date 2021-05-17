<template>
  <ul class="menu-wrapper">
    <li
      :class="[
        'menu-item',
        itemCustomClass,
        usingHoverClass ? 'using-default-hover' : ''
      ]"
      v-for="menu in menus"
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
</template>

<script lang="ts">
import { defineAsyncComponent, defineComponent, PropType } from 'vue'

type IconMenus = {
  name: string
  iconType: string
  onClickHandler: (event: unknown) => never
}

export default defineComponent({
  props: {
    menus: {
      type: Array as PropType<IconMenus[]>
    },
    itemCustomClass: String as PropType<string>,
    iconCustomClass: String as PropType<string>,
    usingHoverClass: {
      type: Boolean as PropType<boolean>,
      required: false,
      default: true
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
</style>
