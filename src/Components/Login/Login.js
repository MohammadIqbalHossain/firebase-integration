import { getAuth } from 'firebase/auth';
import React from 'react';
import app from '../../firebase.init';
import { useSignInWithGoogle} from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';


const auth = getAuth(app)

const Login = () => {
    // const {signUpWithGoogle} = useFirebase();
    const [ signInWithGoogle, user ] = useSignInWithGoogle(auth);
    
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || "/";

    const handlesignInWithGoogle = () => {
       signInWithGoogle()
       .then(() => {
           navigate(from, {replace: true})
       })

    }

    return (
        <div>
            <h1>This is login page.</h1>
            <div style={{margin: '20px'}}>
                <button onClick={handlesignInWithGoogle}>Sing in with google</button>
            </div>
            <form >
               
                <input type="email" placeholder='Your Email' />
                <br />
                <input type="password" placeholder='Your password' />
                <br />
                <input type="submit" value="Login" />
            </form>
        </div>
    );
};

export default Login;