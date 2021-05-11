import { CurrentUser } from './../store/user'
import { useStore } from '@/store'
import { computed, ComputedRef } from 'vue'
import { useRouter } from 'vue-router'

export const useCurrentUser: () => ComputedRef<CurrentUser> | null = () => {
  const store = useStore()
  const currentUser = computed(
    () => store.getters['user/getCurrentUser'] as CurrentUser
  )

  return currentUser
}

export const useCheckLogin: () => void = () => {
  const router = useRouter()
  const loggedIn = localStorage.getItem('loggedIn')

  if (!loggedIn) {
    router.push({
      name: 'Login',
      path: '/login'
    })
  }
}
