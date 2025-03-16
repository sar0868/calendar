import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
const firebaseConfig = {
  // apiKey: "AIzaSyATKyTSJVN7-Zx60WQ66kkHo3nBhuMhYDs",
  authDomain: "calendar-1f438.firebaseapp.com",
  projectId: "calendar-1f438",
  storageBucket: "calendar-1f438.appspot.com",
  messagingSenderId: "",
  appId: "934544134560",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
