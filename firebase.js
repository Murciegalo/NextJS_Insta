import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FB_APIKEY,
  authDomain: 'insta-51128.firebaseapp.com',
  projectId: 'insta-51128',
  storageBucket: 'insta-51128.appspot.com',
  messagingSenderId: '60717122515',
  appId: process.env.FB_APPID,
}

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const storage = getStorage()

export { app, db, storage }
