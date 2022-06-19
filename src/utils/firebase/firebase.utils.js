import userEvent from "@testing-library/user-event";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, signInWithRedirect, GoogleAuthProvider} from 'firebase/auth'
import { getFirestore, doc, getDoc, setDoc} from 'firebase/firestore'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCAn30iV6W-filEH2YvXkhwXRkuD-UKh8k",
  authDomain: "clothing-stuff.firebaseapp.com",
  projectId: "clothing-stuff",
  storageBucket: "clothing-stuff.appspot.com",
  messagingSenderId: "1047361434512",
  appId: "1:1047361434512:web:3f294f60adfc626ce4b915"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt:'select_account'
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)

export const db = getFirestore()
export const createUserDocumentFromAuth = async(userAuth) => {
    const userDocRef =  await doc( db, 'users', userAuth.uid)
    const userSnapshot = await getDoc(userDocRef)
    if(!userSnapshot.exists()){
        const { displayName, email } = userAuth
        const createdAt = new Date()
        try{
            await setDoc(userDocRef, {displayName, email, createdAt})
        }catch(error){
            console.log("error creating the usesr", error.message)
        }
    }

    return userDocRef

} 