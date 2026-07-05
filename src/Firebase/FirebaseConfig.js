import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBIhBiO3flFpAcL2Fm_Ef22QQo6udFp5b4",
  authDomain: "react-HajiBI-eb4f0.firebaseapp.com",
  projectId: "react-HajiBI-eb4f0",
  storageBucket: "react-HajiBI-eb4f0.appspot.com",
  messagingSenderId: "29045190704",
  appId: "1:29045190704:web:a7c74bd778aa5f993c7df5",
  measurementId: "G-9TB7LL3YPM",
};


export const FirebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore(FirebaseApp);
const analytics = getAnalytics(FirebaseApp);
