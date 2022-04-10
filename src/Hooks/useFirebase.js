import { useEffect, useState } from "react"
import { GoogleAuthProvider, getAuth, signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";
import app from "../firebase.init";


const googleProvider = new GoogleAuthProvider();

const auth = getAuth(app)

const useFirebase = () => {
    const [user, setUser] = useState({});


    const signUpWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                setUser(user)
                console.log(user);

            }).catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage)

            });


    }

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            setUser(user)
        })
    }, []);

    const handleSignOut = () => {
        signOut(auth)
        .then(() => {
            
          }).catch((error) => {
           
          });
    }
 
    return { signUpWithGoogle, user, handleSignOut };

}

export default useFirebase;