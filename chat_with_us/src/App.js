import React from 'react';
import logo from './logo.svg';
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import './App.css';
import ChatRoom from "./components/ChatRoom";
import SignIn from "./components/SignIn"

// firebase.initializeApp({
// 	apiKey: "AIzaSyA3sHkeRtc0vsmVQdjulPWGiMQ5joLBTN0",
// 	authDomain: "chatwithus-c7deb.firebaseapp.com",
// 	databaseURL: "https://chatwithus-c7deb.firebaseio.com",
// 	projectId: "chatwithus-c7deb",
// 	storageBucket: "chatwithus-c7deb.appspot.com",
// 	messagingSenderId: "608884609385",
// 	appId: "1:608884609385:web:9fa8ec03bb781bdc73edf8",
// 	measurementId: "G-X43RBPBW34",
// });

const auth = firebase.auth();
const firestore = firebase.firestore()
function App() {
  const [user] = useAuthState(auth)
  return (
		<div className="App">
			<header className="App-header"></header>
			<section>{user ? <ChatRoom /> : <SignIn />}</section>
		</div>
	);
}

export default App;
