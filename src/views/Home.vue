<template>
  <Edit>
    <template #center> TODO: NOTE LIST </template>
    <template #right>
      <!-- <Core /> -->
      <EditorWrapper />
    </template>
  </Edit>
</template>

<script lang="ts">
import { defineAsyncComponent, defineComponent } from 'vue'

export default defineComponent({
  components: {
    Edit: defineAsyncComponent(() => import('@/components/layouts/Edit.vue')),
    EditorWrapper: defineAsyncComponent(
      () => import('@/components/editor/Wrapper.vue')
    )
  }
})
</script>
