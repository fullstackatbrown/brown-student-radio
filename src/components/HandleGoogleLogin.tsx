import {signInWithPopup, GoogleAuthProvider} from 'firebase/auth';
import {auth} from '../firebase-config';

const HandleGoogleLogin = async () => {
  const provider = new GoogleAuthProvider()
  const result = await signInWithPopup(auth, provider)
  const user = result.user
  console.log(user)
  console.log("Login Success")
}

export default HandleGoogleLogin;
