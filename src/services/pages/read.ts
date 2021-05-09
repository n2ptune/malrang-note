import { withAuthUser } from '@/services/auth/user'
import { useStore } from '@/store'
import { doc, getFirestore, collection, getDoc } from 'firebase/firestore'

export const readPrivatePage = () =>
  withAuthUser(async () => {
    const store = useStore()
    const firestore = getFirestore()

    const s = doc(collection(firestore, 'secret_pages'), 'meta')
    const qs = await getDoc(s)

    console.log(qs.data())
  })
