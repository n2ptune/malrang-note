<template>
  <section class="relative flex flex-col space-y-2">
    <div class="top-menu">
      <div class="space-x-2">
        <Feather
          :type="iconType"
          :size="20"
          class="cursor-pointer pr-3 border-r border-gray-200 dark:border-brand-black-tippy"
          @click="fullHandler"
        />
        <Feather type="coffee" :size="20" class="pl-2 pr-1" noHoverClass />
        <span>asdasdfuq</span>
        <div class="w-px h-full bg-white" />
      </div>
      <div class="space-x-2 text-sm">
        <Button :isPrimary="false" class="rounded"> 삭제 </Button>
        <Button class="rounded"> 공유 </Button>
      </div>
    </div>
    <div class="editor-menu">
      <div>Editor Menus</div>
    </div>
    <Core />
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
.top-menu {
  height: 5vh;
  @apply flex justify-between px-4 py-2 border-b items-center
  border-gray-200 dark:border-brand-black;
}
</style>
