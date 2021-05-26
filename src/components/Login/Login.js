import React from 'react';
import { useAuth0 } from '@auth0/auth0-react'
import './login.css'

const Login = () => {
    const { loginWithRedirect } = useAuth0()

    return (
        <div className='vh-100 bg-dark'>
            <div className='contain'>
                <div className='login'>
                    <h2 className='p-4'>Login into app</h2>
                    <button className='mt-3 btn btn-lg btn-primary' onClick={() => loginWithRedirect()}>Login</button>
                </div>
            </div>
        </div>
    );
}
 
export default Login;