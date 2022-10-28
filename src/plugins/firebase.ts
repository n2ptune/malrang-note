import { initializeApp } from 'firebase/app'
import {
  getAuth,
  browserLocalPersistence,
  setPersistence,
  signInWithEmailAndPassword
} from 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

initializeApp({
  apiKey: process.env.VUE_APP_FB_API_KEY,
  authDomain: process.env.VUE_APP_FB_AUTH_DOMAIN,
  projectId: process.env.VUE_APP_FB_PROJECT_ID,
  storageBucket: process.env.VUE_APP_FB_STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_APP_FB_MESSAGING_SENDER_ID,
  appId: process.env.VUE_APP_FB_APP_ID,
  measurementId: process.env.VUE_APP_FB_MEASUREMENT_ID
})

signInWithEmailAndPassword(getAuth(), 'vue2598@gmail.com', '12345a')

setPersistence(getAuth(), browserLocalPersistence)
