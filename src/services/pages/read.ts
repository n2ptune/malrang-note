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

export const readPrivatePage: () => Promise<PrivatePageModuleState> = async () => {
  const user = getAuth().currentUser

  if (!user) throw new Error('Invalid User')

  const firestore = getFirestore()

  const _meta = doc(collection(firestore, 'secret_pages'), 'meta')
  const _my = query(
    collection(firestore, 'secret_pages'),
    where('uid', '==', user.uid)
  )
  const metaDoc = await getDoc(_meta)
  const myDoc = await getDocs(_my)

  if (myDoc.size !== 1) throw new Error('Invalid Private page')

  return {
    meta: metaDoc.data() as PickValue<PrivatePageModuleState, 'meta'>,
    page: myDoc.docs[0].data() as PickValue<PrivatePageModuleState, 'page'>
  }
}

// ;(async function () {
//   const collect = collection(
//     getFirestore(),
//     'shared_pages',
//     'meta',
//     'page_meta'
//   )
//   const metaDocsQuery = query(collect, where('uid', '==', '12345'))
//   const qsMetaDocs = await getDocs(metaDocsQuery)

//   const data = qsMetaDocs.docs.map((doc) => doc.data())
//   console.log(data)
// })()
