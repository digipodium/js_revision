import React from 'react';
import classes from './login.module.css';

const Login = () => {
  return (
    <div>
        <h1 className='text-center my-5 font-bold text-3xl'>Login Page</h1>
        <button className='global-btn'>Global button</button>
        <button className={classes.loginBtn}>Submit</button>
    </div>
  )
}

export default Login;