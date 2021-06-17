<template>
  <div class="mt-4 space-y-2">
    <div v-for="note in noteList" :key="note" class="py-2">
      <div class="font-bold text-lg">
        {{ note.title }}
      </div>
      <div class="">
        {{ note.created.seconds }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { NoteList } from '@/services/notes/read'
import { NoteListKey } from '@/views/EditPage.vue'
import { defineComponent, inject, Ref } from 'vue'

export default defineComponent({
  setup() {
    const noteList = inject(NoteListKey) as Ref<NoteList>

    return {
      noteList
    }
  }
})
</script>
