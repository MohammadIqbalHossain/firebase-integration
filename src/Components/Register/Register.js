import React from 'react';

const Register = () => {
    return (
        <div>
            <h1>This is register page.</h1>
            <form >
                <input type="text" name="" id="" placeholder='Your name'/>
                <br />
                <input type="email" placeholder='Your Email' />
                <br />
                <input type="password" placeholder='Your password' />
                <br />
                <input type="submit" value="Register" />
            </form>
        </div>
    );
};

export default Register