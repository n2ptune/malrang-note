/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare global {
  export type User = {
    name: string
    email: string
  }
}

declare module '*.svg' {
  const filePath: string
  export default filePath
}
