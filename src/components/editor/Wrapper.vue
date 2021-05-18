<template>
  <section class="h-screen relative flex flex-col space-y-2">
    <div class="menu top-menu flexing">
      <div class="space-x-3">
        <Feather
          v-tippy="{ content: '화면 전환', arrow: true }"
          :type="iconType"
          :size="20"
          class="icon"
          @click="fullHandler"
        />
        <Tippy animation="shift-away" interactive trigger="click" role="group">
          <Feather
            type="more-horizontal"
            :size="20"
            class="icon pr-4 border-gray-200 dark:border-brand-black border-r"
          />
          <template #content>
            <EditMenu />
          </template>
        </Tippy>
        <span class="pl-2">현재 작업중인 메모장 1</span>
        <div class="w-px h-full bg-white" />
      </div>
      <div class="space-x-2 text-sm">
        <Button :isPrimary="false" class="rounded"> 삭제 </Button>
        <Button class="rounded"> 공유 </Button>
      </div>
    </div>
    <div class="menu editor-menu">
      <div>Editor Menus</div>
    </div>
    <Core />
    <div class="menu bottom-menu flexing">test</div>
  </section>
</template>

<script lang="ts">
import { computed, defineAsyncComponent, defineComponent, ref } from 'vue'

export default defineComponent({
  components: {
    Core: defineAsyncComponent(() => import('@/components/editor/Core.vue')),
    Button: defineAsyncComponent(
      () => import('@/components/common/Button.vue')
    ),
    Feather: defineAsyncComponent(
      () => import('@/components/utils/Feather.vue')
    ),
    EditMenu: defineAsyncComponent(
      () => import('@/components/utils/dropdown/EditMenu.vue')
    )
  },
  setup() {
    const isFull = ref(false)
    const iconType = computed(() => (isFull.value ? 'minimize' : 'maximize'))

    const fullHandler = () => {
      isFull.value = !isFull.value
    }

    return {
      iconType,
      fullHandler
    }
  }
})
</script>

<style lang="postcss" scoped>
.menu {
  height: 5vh;

  @apply px-4 py-2 border-gray-200 dark:border-brand-black;

  &.flexing {
    @apply flex items-center;
  }

  &.bottom-menu {
    @apply absolute w-full border-t z-10 bottom-0;
  }

  &.top-menu {
    @apply justify-between border-b;

    & .icon {
      @apply cursor-pointer;
    }
  }
}
</style>
