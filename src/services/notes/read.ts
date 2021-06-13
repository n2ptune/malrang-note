import {
  getFirestore,
  collection,
  getDocs,
  query,
  where
} from 'firebase/firestore'

type DBNoteType = 'private' | 'shared'

export type Note = {
  author: string
  created: Timestamp
  type: DBNoteType
}

export type NoteList = Note[]

const firestore = getFirestore()
const privateType: DBNoteType = 'private'

export const readPrivateNotes: () => Promise<NoteList> = async () => {
  const noteCollection = collection(firestore, 'notes')
  const privateNotes = query(noteCollection, where('type', '==', privateType))
  const notesDocs = await getDocs(privateNotes)

  const result = notesDocs.docs.map((doc) => doc.data())

  return result as NoteList
}
