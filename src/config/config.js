import * as firebase from "firebase";

const config = {

    apiKey: "AIzaSyAjtGdADfeLB34eEdS0pVlkKAkYv26g8UU",
    authDomain: "danzzar-d8344.firebaseapp.com",
    databaseURL: "https://danzzar-d8344.firebaseio.com",
    projectId: "danzzar-d8344",
    storageBucket: "danzzar-d8344.appspot.com",
    messagingSenderId: "363663639511",
    appId: "1:363663639511:web:b15801834c2baa35cb4192",
    measurementId: "G-HRPZGRFPZC"

};

export default !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();
