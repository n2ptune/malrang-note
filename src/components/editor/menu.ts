import { Editor } from '@tiptap/vue-3'

export type BubbleEvents = {
  onBubbleBold: () => void
  onBubbleItalic: () => void
  onBubbleStrike: () => void
  onHighlight: () => void
}

export type FloatingMenu = {
  title: string
  eventName: keyof BubbleEvents
  activeFn: (editor: Editor) => unknown
  icon?: string
}

export const bubbleMenus: FloatingMenu[] = [
  {
    title: '굵게',
    eventName: 'onBubbleBold',
    activeFn: (editor) => {
      return {
        'is-active': editor.isActive('bold')
      }
    }
  },
  {
    title: '이탤릭',
    eventName: 'onBubbleItalic',
    activeFn: (editor) => {
      return {
        'is-active': editor.isActive('italic')
      }
    }
  },
  {
    title: '취소선',
    eventName: 'onBubbleStrike',
    activeFn: (editor) => {
      return {
        'is-active': editor.isActive('strike')
      }
    }
  },
  {
    title: '형광펜',
    eventName: 'onHighlight',
    activeFn: (editor) => {
      return {
        'is-active': editor.isActive('highlight')
      }
    }
  }
]
