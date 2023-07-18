import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyBcVNYBWLgjJ5kdAx5SD5Va8n3Z_Fs0ms4',
  authDomain: 'minhastarefas-9f631.firebaseapp.com',
  projectId: 'minhastarefas-9f631',
  storageBucket: 'minhastarefas-9f631.appspot.com',
  messagingSenderId: '649442149539',
  appId: '1:649442149539:web:718c5a2fdc9c5b87be6b16',
}

const firebaseApp = initializeApp(firebaseConfig)

const db = getFirestore(firebaseApp)

export { db }
