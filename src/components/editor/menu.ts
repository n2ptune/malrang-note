import { Editor } from '@tiptap/vue-3'

type FloatingMenu = {
  title: string
  eventName: string
  activeFn?: (editor: Editor) => unknown
}

export const floatingMenus: FloatingMenu[] = [
  {
    title: '머리말',
    eventName: 'onFloatTopHeading',
    activeFn: (editor) => {
      return {
        'is-active': editor.isActive('heading', { level: 1 })
      }
    }
  },
  {
    title: '제목',
    eventName: 'onFloatHeading',
    activeFn: (editor) => {
      return {
        'is-active': editor.isActive('heading', { level: 2 })
      }
    }
  },
  {
    title: '부제목',
    eventName: 'onFloatSubHeading',
    activeFn: (editor) => {
      return {
        'is-active': editor.isActive('heading', { level: 3 })
      }
    }
  },
  {
    title: '리스트',
    eventName: 'onFloatList',
    activeFn: (editor) => {
      return {
        'is-active': editor.isActive('bullet')
      }
    }
  }
]

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
