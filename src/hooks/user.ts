import { CurrentUser } from './../store/user'
import { useStore } from '@/store'
import { computed, ComputedRef } from 'vue'

export const useCurrentUser: () => ComputedRef<CurrentUser> | null = () => {
  const store = useStore()
  const currentUser = computed(
    () => store.getters['user/getCurrentUser'] as CurrentUser
  )

  return currentUser
}
