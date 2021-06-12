<template>
  <Edit>
    <template #center>
      <!-- TODO: NOTE LIST TARGET PAGE_UID = {{ currentPageUid }}
      <strong>isShared: {{ isShared }}</strong> -->
      <List />
    </template>
    <template #right>
      <!-- <Core /> -->
      <EditorWrapper />
    </template>
  </Edit>
</template>

<script lang="ts">
import { computed, defineComponent, provide, ref, readonly } from 'vue'
import Edit from '@/components/layouts/Edit.vue'
import EditorWrapper from '@/components/editor/Wrapper.vue'
import { useRouter } from 'vue-router'
import { readPrivateNotes } from '@/services/notes/read'
import List from '@/components/notes/List.vue'

export default defineComponent({
  components: {
    Edit,
    EditorWrapper,
    List
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
    provide('noteList', readonly(noteList))
    provide('isShared', readonly(isShared))

    return {
      currentPageUid,
      isShared
    }
  }
})
</script>
