// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB1vkOWL27u3uIsPEkN-WtKHUwDKjDdhYE",
    authDomain: "e-commerce-32221.firebaseapp.com",
    databaseURL: "https://e-commerce-32221-default-rtdb.firebaseio.com",
    projectId: "e-commerce-32221",
    storageBucket: "e-commerce-32221.firebasestorage.app",
    messagingSenderId: "85154771955",
    appId: "1:85154771955:web:0e9914643ac9ef5897d886"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)