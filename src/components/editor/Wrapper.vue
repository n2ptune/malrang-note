<template>
  <section class="flex flex-col space-y-2">
    <div
      class="top-menu flex justify-between p-4 border-b border-gray-200 dark:border-brand-black"
    >
      <span class="empty"></span>
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
import { defineAsyncComponent, defineComponent } from 'vue'

export default defineComponent({
  components: {
    Core: defineAsyncComponent(() => import('@/components/editor/Core.vue')),
    Button: defineAsyncComponent(() => import('@/components/common/Button.vue'))
  }
})
</script>
