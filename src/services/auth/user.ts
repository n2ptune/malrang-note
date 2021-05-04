import { app } from '@/plugins/firebase'
import { useStore } from '@/store'

export const injectUserToStore: () => void = () => {
  const store = useStore()

  app.auth().onAuthStateChanged((user) => {
    if (user) {
      store.commit('user/SET_USER', user)
    }
  })
}
