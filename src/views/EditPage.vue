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
import {
  computed,
  defineComponent,
  provide,
  ref,
  InjectionKey,
  Ref,
  watchEffect
} from 'vue'
import Edit from '@/components/layouts/Edit.vue'
import EditorWrapper from '@/components/editor/Wrapper.vue'
import { useRouter } from 'vue-router'
import { readPrivateNotes, NoteList } from '@/services/notes/read'
import List from '@/components/notes/List.vue'

export const NoteListKey: InjectionKey<Ref<NoteList>> = Symbol('NoteList')

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
    const noteList = ref<NoteList>([])

    const getNoteList = async () => {
      if (isShared.value) {
        noteList.value = []
      } else {
        noteList.value = await readPrivateNotes()
      }
    }

    watchEffect(() => getNoteList())

    getNoteList()
    provide(NoteListKey, noteList)
    provide('isShared', isShared)

    return {
      currentPageUid,
      isShared
    }
  }
})
</script>
