import React from 'react'

export default function SignOut() {
      return  auth.currentUser && (
       <button onClick={() => auth.SignOut()}>SignOut</button>
      )
}
