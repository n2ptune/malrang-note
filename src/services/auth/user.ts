import { initMyPage } from '@/services/pages/write'
import { getAuth } from 'firebase/auth'
import { useStore } from '@/store'

export const injectUserToStore: () => void = () => {
  const store = useStore()

  getAuth().onAuthStateChanged(async (user) => {
    if (user) {
      store.dispatch('user/loginUser', user)
      await initMyPage()
    }
  })
}
