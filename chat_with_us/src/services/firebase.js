import firebase from "firebase";
const config = {
	apiKey: "AIzaSyA3sHkeRtc0vsmVQdjulPWGiMQ5joLBTN0",
	authDomain: "chatwithus-c7deb.firebaseapp.com",
	databaseURL: "https://chatwithus-c7deb.firebaseio.com"
};
firebase.initializeApp(config);

export const auth = firebase.auth;
export const db = firebase.database();
