import React from 'react';
import { auth } from 'firebase';
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";

export default function SignIn() {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithGoogle(provider)
  }
  return (
		<>
      <button onClick={signInWithGoogle}>Sign In with Google</button>
      
		</>
	);
}
