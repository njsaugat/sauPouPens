import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import { getAnalytics } from "@firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyANfkVJaMDjyUY7iWgtAWQ_lVpj8-HQy1s",
  authDomain: "saupou-writes.firebaseapp.com",
  projectId: "saupou-writes",
  storageBucket: "saupou-writes.appspot.com",
  messagingSenderId: "514453287647",
  appId: "1:514453287647:web:0cc81be6ae94a8aa362f6a",
  measurementId: "G-KHD4EL47JL",
};

// Initialize Firebase
if (!firebase.apps.length) {
  const app = firebase.initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
}

// nice way to export since only this place has to be changed
export const auth = firebase.auth;
export const firestore = firebase.firestore();
export const storage = firebase.storage();
