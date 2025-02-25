import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { useObject } from "react-firebase-hooks/database";

const firebaseConfig = {
  apiKey: "AIzaSyDEgr6JO-jjcrQ5eNrelJx3OrKHd8UQgaQ",
  authDomain: "react-app-31851.firebaseapp.com",
  databaseURL: "https://react-app-31851-default-rtdb.europe-west1.firebasedatabase.app/",
  projectId: "react-app-31851",
  storageBucket: "react-app-31851.appspot.com",
  messagingSenderId: "524566805313",
  appId: "1:524566805313:web:2e363b7e65b24cd5d6ffc0"
};

console.log("Initializing Firebase...");
const firebaseApp = initializeApp(firebaseConfig);
console.log("Firebase Initialized:", firebaseApp);

const database = getDatabase(firebaseApp);
const auth = getAuth(firebaseApp);

export const useData = (transform) => {
  console.log("Fetching data from 'courses'...");
  const [snapshot, loading, error] = useObject(ref(database, "courses")); 

  const value = snapshot?.val();
  console.log("Data Retrieved from Firebase:", value);
  console.log("Loading:", loading);
  console.log("Error:", error);

  return [transform ? transform(value) : value, loading, error];
};

export const setData = (path, value) => set(ref(database, path), value);

export const signInWithGoogle = () => signInWithPopup(auth, new GoogleAuthProvider());
export const firebaseSignOut = () => signOut(auth);
export const useUserState = () => useAuthState(auth);

export { database, ref };




































