import { readPrivatePage } from '@/services/pages/read'
import { getAuth } from 'firebase/auth'
import { useStore } from '@/store'
import { initMyPage } from '@/services/pages/write'

export const withAuthUser = (fn: () => unknown) => {
  if (!getAuth().currentUser) {
    return
  }
  fn()
}

export const injectUserToStore: () => void = () => {
  const store = useStore()

  getAuth().onAuthStateChanged(async (user) => {
    if (user) {
      store.commit('user/SET_USER', user)
      await initMyPage()
      readPrivatePage()
    }
  })
}
