// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBe5yK8Nlxu48PD0sBXfiDpyRSLNi4ePy8",
    authDomain: "hypso-5340b.firebaseapp.com",
    projectId: "hypso-5340b",
    storageBucket: "hypso-5340b.appspot.com",
    messagingSenderId: "842892481159",
    appId: "1:842892481159:web:ba6b1687cabf9b8506de22",
    measurementId: "G-VKJRXMRL92"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage();