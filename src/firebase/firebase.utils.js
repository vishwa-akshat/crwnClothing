import firebase from "firebase/app";

import "firebase/firebase-firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBd5JRvByYaYIdq5GROBgNbc2D_ZQqQVzI",
  authDomain: "crwn-db-efb89.firebaseapp.com",
  projectId: "crwn-db-efb89",
  storageBucket: "crwn-db-efb89.appspot.com",
  messagingSenderId: "759942542005",
  appId: "1:759942542005:web:a0c5a41f85588b5fdb04fc",
  measurementId: "G-4KCZ0X3P2M",
};

export const createUserProfileDocument = async (userAuth, additionalData) =>{
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if(!snapShot.exists){
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try{
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    }catch(error){
      console.log('Error creating user', error.message)
    }
  }

  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);


export default firebase;