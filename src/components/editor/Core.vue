<template>
  <EditorContent :editor="editor" />
  <BubbleMenu v-if="editor" :editor="editor" class="bubble-menu">
    <button
      v-for="menu in bubbleMenus"
      :key="menu.eventName"
      @click="() => bubbleMenuHandler(menu.eventName)"
      :class="menu.activeFn(editor)"
    >
      {{ menu.title }}
    </button>
  </BubbleMenu>
</template>

<script lang="ts">
import { defineComponent, onUnmounted, reactive, Ref } from 'vue'
import { useEditor, EditorContent, BubbleMenu, Editor } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'
import Highlight from '@tiptap/extension-highlight'
import Underline from '@tiptap/extension-underline'
import TextAlign from '@tiptap/extension-text-align'
import Link from '@tiptap/extension-link'
import { bubbleMenus, BubbleEvents } from './menu'

export default defineComponent({
  components: {
    EditorContent,
    BubbleMenu
  },
  emits: ['init'],
  setup(_, { emit }) {
    const editor = useEditor({
      content: '<h1>running with tiptap vue 3 components ⚡️</h1>'.repeat(50),
      extensions: [StarterKit, Highlight, Underline, TextAlign, Link],
      editorProps: {
        attributes: {
          class: 'core-editor'
        }
      },
      onCreate(_editor) {
        emit('init', _editor)
      }
    }) as Ref<Editor>

    const bubbleMenuEvents = reactive<BubbleEvents>({
      onBubbleBold() {
        editor.value.chain().focus().toggleBold().run()
      },
      onBubbleItalic() {
        editor.value.chain().focus().toggleItalic().run()
      },
      onBubbleStrike() {
        editor.value.chain().focus().toggleStrike().run()
      },
      onHighlight() {
        editor.value.chain().focus().toggleHighlight().run()
      }
    })

    onUnmounted(() => editor.value?.destroy())

    return {
      editor,
      bubbleMenus,
      bubbleMenuHandler(eventName: keyof BubbleEvents) {
        bubbleMenuEvents[eventName]()
      }
    }
  }
})
</script>

<style lang="postcss" scoped>
::v-deep(.core-editor) {
  /* scrollbar-width: none; */
  height: 90vh;
  @apply dark:prose-dark prose p-4 focus:outline-none
  max-w-none overflow-y-auto leading-tight;

  & code {
    @apply px-2 py-1 rounded-lg bg-gray-200 dark:bg-brand-black-w;

    &::before,
    &::after {
      content: '';
    }
  }

  & mark {
    @apply bg-brand-primary;
  }

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    @apply bg-transparent;
  }

  &::-webkit-scrollbar-thumb {
    @apply bg-brand-black dark:bg-gray-200 rounded border-r-4 border-transparent border-solid bg-clip-padding;
  }

  &::-webkit-scrollbar-button {
    @apply hidden;
  }

  & ul > li,
  & ol > li {
    @apply my-1 !important pl-5;

    &::before {
      @apply text-current;
    }

    & p {
      @apply my-1 !important;
    }
  }

  & ul > li {
    &::before {
      @apply top-2 bg-brand-black-tippy dark:bg-gray-100;
    }
  }
}

.floating-menu,
.bubble-menu {
  @apply space-x-3;
  & button {
    @apply text-gray-500 transition-colors duration-200 hover:text-white
    focus:outline-none;

    &.is-active {
      @apply text-white;
    }
  }
}
</style>
