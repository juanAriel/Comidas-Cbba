
import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"

var firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAAJDlXWrplQSUCaMby9rsAEYKbovYLyK8",
    authDomain: "comidas-90700.firebaseapp.com",
    projectId: "comidas-90700",
    storageBucket: "comidas-90700.appspot.com",
    messagingSenderId: "278712564092",
    appId: "1:278712564092:web:3ab067807c303472694cf9"
});

var db = firebaseApp.firestore();

export { db };