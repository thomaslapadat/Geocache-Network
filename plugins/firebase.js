// ~/plugins/firebase.js

import firebase from 'firebase'
import 'firebase/firestore'

// firebase init goes here
const config = {
    apiKey: "AIzaSyCz2VNbn0u8tSkSTNvKwBBBzODNAGDjqqk",
    authDomain: "thomas-geocaching.firebaseapp.com",
    databaseURL: "https://thomas-geocaching.firebaseio.com",
    projectId: "thomas-geocaching",
    storageBucket: "thomas-geocaching.appspot.com",
    messagingSenderId: "590518022970",
    appId: "1:590518022970:web:d1467e05ea2bf0834ed603",
    measurementId: "G-KSLP8C5PSB"
}

// Correct initalization
if (!firebase.apps.length) {
    firebase.initializeApp(config);
}

// firebase utils
const db = firebase.firestore(); // NOTE THIS NEEDS TO BE FIRESSTORE NOT DATABASE!
const auth = firebase.auth()
const currentUser = auth.currentUser

// date issue fix according to firebase
/*
const settings = {
    //timestampsInSnapshots: true
}
db.settings(settings)
*/

// firebase collections
const cacheCollection = db.collection('Caches')

export {
    db,
    auth,
    currentUser,
    cacheCollection
}