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
import { computed, defineComponent, ref } from 'vue'
import Edit from '@/components/layouts/Edit.vue'
import EditorWrapper from '@/components/editor/Wrapper.vue'
import { useRouter } from 'vue-router'
import { readPrivateNotes } from '@/services/notes/read'

export default defineComponent({
  components: {
    Edit,
    EditorWrapper
  },
  setup() {
    const router = useRouter()
    const currentPageUid = computed(() => router.currentRoute.value.params.uid)
    const isShared = computed(() => currentPageUid.value.length === 36)
    const noteList = ref<unknown[]>([])

    const getNoteList = async () => {
      if (isShared.value) {
        noteList.value = []
      } else {
        noteList.value = (await readPrivateNotes()) as unknown[]
        console.log(noteList.value.length)
      }
    }

    getNoteList()

    return {
      currentPageUid,
      isShared
    }
  }
})
</script>
