import React from "react";


import { auth } from "./Firebase";
import { GoogleAuthProvider, signInWithRedirect } from "Firebase/auth";



const Welcome = () => {
  const googleSignIn = () => {};
  const provider = new GoogleAuthProvider();
  signInWithRedirect(auth, provider);
  return (
    <main className="welcome">
      <h2>Welcome to React Chat.</h2>
      <img src="/logo512.png" alt="ReactJs logo" width={50} height={50} />
      <p>Sign in with Google to chat with with your fellow React Developers.</p>
      <button className="sign-in">
        <img
          onClick={googleSignIn}
          src="https://th.bing.com/th/id/OIP.8joJH8aNu0fn4VjJzR5qYgHaDF?pid=ImgDet&rs=1"
            alt="sign in with google"
        />
      </button>
    </main>
  );
};
export default Welcome;