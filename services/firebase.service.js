import firebase from "firebase/compat/app";
import "firebase/compat/storage"

export const app = firebase.initializeApp({
  projectId: "inventory-images",
  appId: "1:483096924040:web:8ea0850f99b573d54cb43d",
  storageBucket: "inventory-images.appspot.com",
  locationId: "us-central",
  apiKey: "AIzaSyB0hMG8mCKddYw6PRrxBA3-4KFlzHQxHI0",
  authDomain: "inventory-images.firebaseapp.com",
  messagingSenderId: "483096924040",
});
