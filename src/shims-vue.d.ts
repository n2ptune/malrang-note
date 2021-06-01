/* eslint-disable */

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  type PageMeta = PageMeta
  export default component
}

interface PageMeta {
  title: string
  created: Timestamp
  uid: string
}
interface Timestamp {
  nanoseconds: number
  seconds: number
}

type PickValue<T, K extends keyof T> = T[K]

declare module '*.svg' {
  const filePath: string
  export default filePath
}

declare module 'vue-feather' {
  import VueFeather from 'vue-feather'
  export default VueFeather
}
