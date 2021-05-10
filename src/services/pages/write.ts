import { getAuth } from '@firebase/auth'
import {
  getFirestore,
  collection,
  where,
  query,
  getDocs,
  setDoc,
  doc
} from 'firebase/firestore'

const firestore = getFirestore()

const checkEmptySecretPage: () => Promise<boolean> = async () => {
  const secretPages = collection(firestore, 'secret_pages')
  const user = getAuth().currentUser

  if (!user) return false

  const q = query(secretPages, where('uid', '==', user.uid))
  const querySnapshot = await getDocs(q)

  return querySnapshot.empty
}

export const initMyPage: () => Promise<void> = async () => {
  const user = getAuth().currentUser
  const empty = await checkEmptySecretPage()

  if (!user || !empty) return

  const secretPages = collection(firestore, 'secret_pages')

  await setDoc(doc(secretPages), {
    uid: user.uid
  })
}
