import React, {useState, useRef} from 'react'
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/analytics"
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from 'react-firebase-hooks/firestore';
import chatMessages from "./ChatMessages"
const auth = firebase.auth();
const firestore = firebase.firestore();

export default function ChatRoom(props) {
	const { text, uid, photoURL } = message;
	const messageClass = uid === auth.currentUser.uid ? "sent" : "received";
	const dummy = useRef();
	const messagesRef = firestore.collection("message");
	const query = messagesRef.orderBy("createdAt").limit(25);

	const [messages] = useCollectionData(query, { idField: "id" });
	const [formValue, setFormValue] = useState("");

	const sendMessage = async (e) => {
		e.preventDefault();
		const { uid, photoURL } = auth.currentUser;

		await messagesRef.add({
			text: formValue,
			uid,
			phoroURL,
		});

		setFormValue("");
		dummy.current.scrollintoView({ behavior: "smooth" });
	};

	return (
		<>
			<main>
				{message &&
					message.map((msg) => <chatMessage key={msg.id} message={msg} />)}
				<span ref={dummy}></span>
			</main>
			<form onSubmit={sendMessage}>
				<input
					value={formValue}
					onChange={(e) => setFormValue(e.target.value)}
					placeholde="say something nice"
				/>
				<button type="submit" disabled={!formValue}></button>
			</form>
		</>
	);
}
