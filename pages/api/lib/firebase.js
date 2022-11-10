import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCILYefb3KJTYX7VmxRiPj9SmeimuPioOY",
  authDomain: "starbucks-clone-ffd35.firebaseapp.com",
  databaseURL: "https://starbucks-clone-ffd35-default-rtdb.firebaseio.com",
  projectId: "starbucks-clone-ffd35",
  storageBucket: "starbucks-clone-ffd35.appspot.com",
  messagingSenderId: "131062407447",
  appId: "1:131062407447:web:873e07a5d18e1a5e8d5752"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// apiKey: process.env.FIREBASE_API_KEY,
// authDomain: process.env.FIREBASE_AUTH_DOMAIN,
// databaseURL: process.env.FIREBASE_DB_URL,
// projectId: process.env.FIREBASE_PROJECT_ID,
// storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
// messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
// appId: process.env.FIREBASE_APP_ID