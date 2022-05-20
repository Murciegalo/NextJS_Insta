import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyB8RTswEsnMs11nkaT_r7O20oVwSnc6iv0',
  authDomain: 'insta-51128.firebaseapp.com',
  projectId: 'insta-51128',
  storageBucket: 'insta-51128.appspot.com',
  messagingSenderId: '60717122515',
  appId: '1:60717122515:web:ea48149e3fa76692d1a526',
}

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const storage = getStorage()

export { app, db, storage }
