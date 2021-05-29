import {
  doc,
  getFirestore,
  collection,
  getDoc,
  where,
  query,
  getDocs
} from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
import { PrivatePageModuleState } from '@/store/private'

const getMyPrivateDoc = async (uid: string | number) => {
  const firestore = getFirestore()
  const myDocQuery = query(
    collection(firestore, 'secret_pages'),
    where('uid', '==', uid)
  )
  const myDoc = await getDocs(myDocQuery)

  if (myDoc.empty) throw new Error('Invalid Private docs')

  return myDoc.docs[0]
}

const getSharedPermissions: () => Promise<string[]> = async () => {
  const user = getAuth().currentUser

  if (!user) throw new Error('Invalid User')

  const firestore = getFirestore()
  const permissions = collection(firestore, 'user_permissions')
  const myPermQuery = query(permissions, where('user_uid', '==', user.uid))
  const permDoc = await getDocs(myPermQuery)

  if (permDoc.empty) return []

  return permDoc.docs[0].data() as string[]
}

export const readSharedPages: () => Promise<unknown> = async () => {
  const reachable = await getSharedPermissions()
  console.log(reachable)
}

export const readPrivatePage: () => Promise<PrivatePageModuleState> = async () => {
  const user = getAuth().currentUser

  if (!user) throw new Error('Invalid User')

  const firestore = getFirestore()

  const _meta = doc(collection(firestore, 'secret_pages'), 'meta')
  const metaDoc = await getDoc(_meta)
  const myDoc = await getMyPrivateDoc(user.uid)

  return {
    meta: metaDoc.data() as PickValue<PrivatePageModuleState, 'meta'>,
    page: myDoc.data() as PickValue<PrivatePageModuleState, 'page'>
  }
}

// export const readPrivateContents: () => Promise<unknown> = async () => {
//   const uid = getAuth().currentUser?.uid

//   if (!uid) throw new Error('Invalid User')

//   const myDoc = await getMyPrivateDoc(uid)
// }
