// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAvuSf6Qy0GRZg3nlr5JHQhy4wDsjHCacc",
  authDomain: "storage-2768d.firebaseapp.com",
  projectId: "storage-2768d",
  storageBucket: "storage-2768d.appspot.com",
  messagingSenderId: "282475153851",
  appId: "1:282475153851:web:236b79869789d887619c9e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const db = getFirestore(app);