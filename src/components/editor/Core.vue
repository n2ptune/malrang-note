<template>
  <EditorContent :editor="editor" />
</template>

<script lang="ts">
import { defineComponent, onUnmounted } from 'vue'
import { useEditor, EditorContent } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'

export default defineComponent({
  components: {
    EditorContent
  },
  setup() {
    const editor = useEditor({
      content: '<h1>running with tiptap vue 3 components ⚡️</h1>',
      extensions: [StarterKit],
      editorProps: {
        attributes: {
          class: 'dark:prose-dark prose p-5 focus:outline-none max-w-none'
        }
      }
    })

    onUnmounted(() => editor.value?.destroy())

    return {
      editor
    }
  }
})
</script>
