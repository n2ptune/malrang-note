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
      content: '<h1>running with tiptap vue 3 components ⚡️</h1>'.repeat(50),
      extensions: [StarterKit],
      editorProps: {
        attributes: {
          class: 'core-editor'
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

<style lang="postcss" scoped>
::v-deep(.core-editor) {
  height: 80vh;
  @apply dark:prose-dark prose px-4 py-2 focus:outline-none
  max-w-none overflow-y-auto leading-tight;

  & ul > li {
    @apply my-1 !important pl-5;

    &::before {
      @apply top-2 bg-brand-black-tippy dark:bg-gray-100 !important;
    }

    & p {
      @apply my-1 !important;
    }
  }
}
</style>
