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
      content: '<p>running with tiptap vue 3 components ⚡️',
      extensions: [StarterKit],
      editorProps: {
        attributes: {
          class:
            'dark:prose-dark prose prose-lg lg:prose-xl p-5 focus:outline-none prose-indigo max-w-none'
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
