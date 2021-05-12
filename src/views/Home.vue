<template>
  <Edit>
    <template #center> asfuiqhfiquwhfiqwuf center test </template>
    <template #right>
      <Core />
    </template>
  </Edit>
</template>

<script lang="ts">
import { defineAsyncComponent, defineComponent } from 'vue'

export default defineComponent({
  components: {
    Edit: defineAsyncComponent(() => import('@/components/layouts/Edit.vue')),
    Core: defineAsyncComponent(() => import('@/components/editor/Core.vue'))
  }
})
</script>
