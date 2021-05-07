import { getFirestore, collection } from 'firebase/firestore'

// 첫 시작시 페이지 만들기
export const initMyPage: () => Promise<void> = async () => {
  const firestore = getFirestore()
  const secretPages = collection(firestore, 'secret_pages')
}
