import {
  getFirestore,
  collection,
  getDocs,
  query,
  where
} from 'firebase/firestore'

type DBNoteType = 'private' | 'shared'

const firestore = getFirestore()
const privateType: DBNoteType = 'private'

export const readPrivateNotes: () => Promise<unknown> = async () => {
  const noteCollection = collection(firestore, 'notes')
  const privateNotes = query(noteCollection, where('type', '==', privateType))
  const notesDocs = await getDocs(privateNotes)

  const result = notesDocs.docs.map((doc) => doc.data())

  return result
}
