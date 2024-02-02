// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBJZa1g2spDtHSBVQbULh3Tr0K3xbYomlc",
    authDomain: "clone-e87d4.firebaseapp.com",
    projectId: "clone-e87d4",
    storageBucket: "clone-e87d4.appspot.com",
    messagingSenderId: "180281594316",
    appId: "1:180281594316:web:c4fbca40bb8281ef0f8d69",
    measurementId: "G-22H2HW7MLC"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { auth, db };
