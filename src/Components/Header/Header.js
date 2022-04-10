import React from 'react';
import { Link } from 'react-router-dom';
// import useFirebase from '../../Hooks/useFirebase';
import './Header.css'
import { useAuthState } from 'react-firebase-hooks/auth';
import { getAuth, signOut } from 'firebase/auth';
import app from '../../firebase.init';

const auth = getAuth(app);

const Header = () => {
    // const {user, handleSignOut} = useFirebase();
    const [user] = useAuthState(auth);
    return (
        <div>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/products'>Products</Link>
                <Link to='/register'>Register</Link>
                <Link to='/orders'>Orders</Link>
                {user?.displayName && user?.displayName}
                {user?.uid ?
                    <button onClick={() => signOut(auth)}>Log out</button>
                    :
                    <Link to='/login'>Login</Link>
                }
            </nav>
        </div>
    );
};

export default Header;