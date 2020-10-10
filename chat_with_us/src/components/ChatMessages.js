import { auth } from 'firebase';
import React from 'react'

export default function ChatMessages(props) {
  const { text, uid, photoURL } = props.message;
  const messageClass = uid === auth.currentUser.uid ? "sent" : "received";
  return (
    <>
      <div className={`message ${messageClass}`}>
        <img src={photoURL || "https://api.adorable.io/avatars/23/abott@adorable.png"} />
          <p>{text}</p>
      
    </div>
    </>
  )
}
