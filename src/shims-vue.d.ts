/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

interface Timestamp {
  nanoseconds: number
  seconds: number
}

declare module '*.svg' {
  const filePath: string
  export default filePath
}
