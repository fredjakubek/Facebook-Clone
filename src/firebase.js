import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBL4AN8kuJqpxd32C3EDMB7L4manJu1NjU",
    authDomain: "facebook-crypto.firebaseapp.com",
    databaseURL: "https://facebook-crypto.firebaseio.com",
    projectId: "facebook-crypto",
    storageBucket: "facebook-crypto.appspot.com",
    messagingSenderId: "1067491595637",
    appId: "1:1067491595637:web:5a43cf170c3361da07ef3c",
    measurementId: "G-G5D6DY6609"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();

  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  
  export {auth, provider};
  export default db;