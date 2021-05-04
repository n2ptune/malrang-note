import { app } from '@/plugins/firebase'

// 첫 시작시 페이지 만들기
export const initMyPage: () => Promise<void> = async () => {
  const secretPages = app.firestore().collection('secret_pages')
}
