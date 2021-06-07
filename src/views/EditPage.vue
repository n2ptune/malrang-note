<template>
  <Edit>
    <template #center>
      TODO: NOTE LIST TARGET PAGE_UID = {{ currentPageUid }}
      <strong>isShared: {{ isShared }}</strong>
    </template>
    <template #right>
      <!-- <Core /> -->
      <EditorWrapper />
    </template>
  </Edit>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import Edit from '@/components/layouts/Edit.vue'
import EditorWrapper from '@/components/editor/Wrapper.vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  components: {
    Edit,
    EditorWrapper
  },
  setup() {
    const router = useRouter()
    const currentPageUid = computed(() => router.currentRoute.value.params.uid)
    const isShared = computed(() => currentPageUid.value.length === 36)

    return {
      currentPageUid,
      isShared
    }
  }
})
</script>
