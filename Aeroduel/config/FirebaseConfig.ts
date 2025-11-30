// Import the functions you need from the SDKs you need
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { initializeApp } from "firebase/app";
import { getReactNativePersistence, initializeAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAWB2JAB0p1KpwSfZZNIP5nPky742RKlao",
  authDomain: "aeroduel-atlas.firebaseapp.com",
  projectId: "aeroduel-atlas",
  storageBucket: "aeroduel-atlas.firebasestorage.app",
  messagingSenderId: "513384084084",
  appId: "1:513384084084:web:56b25d9d78c3ddd80a1721",
  measurementId: "G-LLSG5N7QC9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});