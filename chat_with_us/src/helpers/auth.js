import { auth } from "../services/firebase";
export function signup(email, password) {
	return auth().createUserWithEmailAndPassword(email, password);
}
export function signin(email, password) {
	return auth().signInWithEmailAndPassword(email, password);
}
export function sigInWithGoogle() {
	const provider = new auth.GoogleAuthProvider();
	return auth().signInWithPopup(provider)
}
export function sigInWithGitHub() {
	const provider = new auth.GithubAuthProvider();
	return auth().signInWithPopup(provider);
}