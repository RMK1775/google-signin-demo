import firebase from 'firebase/app'

const firebaseConfig = {
    apiKey: "AIzaSyBsSinN21HK6YlxNol9AM3zH7dzURGeHTY",
    authDomain: "movie-project-6b015.firebaseapp.com",
    projectId: "movie-project-6b015",
    storageBucket: "movie-project-6b015.appspot.com",
    messagingSenderId: "75102954671",
    appId: "1:75102954671:web:fd882ccf17a959928d605a"
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);