import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

export const firebaseConfig = {
  apiKey: "AIzaSyC3c7kqn8Rk5GrXxL8ZW_hR-9Exdd6Phe0",
  authDomain: "clone-complete-92747.firebaseapp.com",
  databaseURL: "https://clone-complete-92747-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "clone-complete-92747",
  storageBucket: "clone-complete-92747.appspot.com",
  messagingSenderId: "80113929120",
  appId: "1:80113929120:web:44265fc8bba9e52c9a72c5",
  measurementId: "G-R5FMKNRTDV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
export {app, db};