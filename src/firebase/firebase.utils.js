import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyB5zihA-zQQYtA6JP5WIvnOe1RRYC8ExxE",
  authDomain: "crown-db-7a756.firebaseapp.com",
  projectId: "crown-db-7a756",
  storageBucket: "crown-db-7a756.appspot.com",
  messagingSenderId: "978993790172",
  appId: "1:978993790172:web:c4fc37e500e88f7bfbc819",
  measurementId: "G-NC79L6RLP9"
}

firebase.initializeApp(config);


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
