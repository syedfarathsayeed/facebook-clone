import { useEffect, useState, useCallback } from 'react';
import * as firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"

const config = {
    apiKey: "AIzaSyBg9ipUmQxFXpMnAfkPAVKem3bNQqMpoNA",
    authDomain: "facebook-clone-1f185.firebaseapp.com",
    databaseURL: "https://facebook-clone-1f185.firebaseio.com",
    projectId: "facebook-clone-1f185",
    storageBucket: "facebook-clone-1f185.appspot.com",
    messagingSenderId: "823722193483",
    appId: "1:823722193483:web:2f3c45a84e4e35bff493ce",
    measurementId: "G-PLLM95HVZX"
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: "select_account" })

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export const useFirebase = () => {
  const [authUser, setAuthUser] = useState(auth.currentUser);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => setAuthUser(user))
    return () => {
      unsubscribe()
    };
  }, []);

  const login = useCallback((email, password) => auth
    .signInWithEmailAndPassword(email, password), []);

  const logout = useCallback(() => auth.signOut(), [])

  return { login, authUser, logout }
}

export const createUserProfileDocument = async (authUser, otherProps) => {
  if (!authUser) return;
  const userReference = firestore.doc(`users/${authUser.uid}`)
  const snapshot = await userReference.get()

  if (!snapshot.exists) {
    const { displayName, email, dob, gender } = authUser
    const creationDate = new Date()
    try {
      await userReference.set({
        displayName,
        email,
        dob,
        gender,
        creationDate,
        ...otherProps
      })
    } catch (error) {
      throw new Error("user cannot be created")
    }
  }
  return userReference
}

export const addCollectionsAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch()
  objectsToAdd.forEach(e => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, e)
  })

  return await batch.commit()
}

export default firebase