import { getAuth } from 'firebase/auth'
import { useStore } from '@/store'
import { initMyPage } from '@/services/pages/write'

export const injectUserToStore: () => void = () => {
  const store = useStore()

  getAuth().onAuthStateChanged((user) => {
    if (user) {
      store.commit('user/SET_USER', user)
      initMyPage()
    }
  })
}
