import { doc, getFirestore, collection, getDoc } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
import { PrivatePageModuleState } from '@/store/private'

export const readPrivatePage = async () => {
  const user = getAuth().currentUser

  if (!user) return

  const firestore = getFirestore()

  const s = doc(collection(firestore, 'secret_pages'), 'meta')
  const qs = await getDoc(s)

  return qs.data() as PrivatePageModuleState
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
