import { getAuth } from 'firebase/auth'
import { useStore } from '@/store'

export const injectUserToStore: () => void = () => {
  const store = useStore()

  getAuth().onAuthStateChanged((user) => {
    if (user) {
      store.commit('user/SET_USER', user)
    }
  })
}
