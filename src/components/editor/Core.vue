<template>
  <EditorContent :editor="editor" />
  <FloatingMenu v-if="editor" :editor="editor" class="floating-menu">
    <button
      v-for="menu in floatingMenus"
      :key="menu.eventName"
      @click="() => floatMenuHandler(menu.eventName)"
    >
      {{ menu.title }}
    </button>
  </FloatingMenu>
  <BubbleMenu v-if="editor" :editor="editor" class="bubble-menu" />
</template>

<script lang="ts">
import { defineComponent, onUnmounted, reactive } from 'vue'
import {
  useEditor,
  EditorContent,
  FloatingMenu,
  BubbleMenu
} from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'
import { floatingMenus } from './menu'

export default defineComponent({
  components: {
    EditorContent,
    FloatingMenu,
    BubbleMenu
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

    const floatMenuEvents = reactive({
      onFloatTopHeading() {
        editor.value?.chain().focus().toggleHeading({ level: 1 }).run()
      },
      onFloatHeading() {
        editor.value?.chain().focus().toggleHeading({ level: 2 }).run()
      },
      onFloatSubHeading() {
        editor.value?.chain().focus().toggleHeading({ level: 3 }).run()
      },
      onFloatList() {
        editor.value?.chain().focus().toggleBulletList().run()
      }
    })

    onUnmounted(() => editor.value?.destroy())

    return {
      editor,
      floatingMenus,
      floatMenuHandler(eventName: keyof typeof floatMenuEvents) {
        floatMenuEvents[eventName]()
      }
    }
  }
})
</script>

<style lang="postcss" scoped>
::v-deep(.core-editor) {
  /* scrollbar-width: none; */
  height: 80vh;
  @apply dark:prose-dark prose px-4 py-2 focus:outline-none
  max-w-none overflow-y-auto leading-tight;

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
.floating-menu {
  @apply space-x-3;
  & button {
    @apply text-gray-500 transition-colors duration-200 hover:text-white
    focus:outline-none;
  }
}
</style>
