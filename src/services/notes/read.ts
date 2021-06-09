import {
  getFirestore,
  collection,
  getDocs,
  query,
  where
} from 'firebase/firestore'

const firestore = getFirestore()

export const readPrivateNotes: () => Promise<unknown> = async () => {
  const noteCollection = collection(firestore, 'notes')
  const privateNotes = query(noteCollection, where('type', '==', 'secret'))
  const notesDocs = await getDocs(privateNotes)

  const result = notesDocs.docs.map((doc) => doc.data())

  return result
}
