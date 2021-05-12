<template>
  <Edit>
    <template #center> TODO: NOTE LIST </template>
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
