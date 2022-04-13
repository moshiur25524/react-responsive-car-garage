import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css'

const Register = () => {

    const navigate = useNavigate()
    const navigateLogin = () =>{
        navigate('/login')
    }

    const handleRegister = event =>{
        event.preventDefault()
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(name, email, password);
    }

    return (
        <div className='register-form'>
            <h2 style={{textAlign: 'center'}}>This is Register</h2>
            <form onSubmit={handleRegister}>
                <input type="text" name="name" id="" placeholder='Your Name' required/>
                <br /> <br />
                <input type="email" name="email" id="" placeholder='Your Email' required/>
                <br /> <br />
                <input type="password" name="password" id="" placeholder='Your Password' required/>
                <input type="submit" value="Register" />
            </form>
            <p>Already Have an account? <span className='text-danger' onClick={navigateLogin}>Please Login</span></p>
        </div>
    );
};

export default Register;