import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBPrJVHscsRqgLtRnA3PJJlqbRUsbCxhxE",
  authDomain: "todo-app-typescript-c3961.firebaseapp.com",
  projectId: "todo-app-typescript-c3961",
  storageBucket: "todo-app-typescript-c3961.appspot.com",
  messagingSenderId: "768110274996",
  appId: "1:768110274996:web:65f2c23be18a61abe9aae1",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
