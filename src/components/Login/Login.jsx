import React, { useContext, useState } from 'react';
import './Login.css'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';



const Login = () => {
    const [show , setShow]=useState(false)
     const [error , setError]=useState('')
     const [success , setSuccess]=useState('')
     const {signIn}=useContext(AuthContext)
     const navigate=useNavigate();

     const location=useLocation();
      let from=location.state?.from?.pathname || '/'; 

    const handlerSignIn=(event)=>{
        event.preventDefault();
        
        const form = event.target;
        const email = form.email.value;
        const password=form.password.value;
        console.log(email, password);
        
         setError('');
         setSuccess('')
         
        signIn(email ,password)
        .then(result=>{
            const loggedUser=result.user;
            console.log(loggedUser);
            setSuccess('Login successfull');
            form.reset();
            navigate(from, {replace:true})
 
        })
        .catch(error=>{
            console.log(error)
            setError(error.message)
        })
    }
    

    return (
        <div className='form-container'>
            <h2 className='form-title'>Login</h2>
            <form onSubmit={handlerSignIn}>
                <div className='form-control'>
                 <label htmlFor='email'>Email</label>
                 <input type='email' name='email' id='' required></input>
                </div>
                <div className='form-control'>
                 <label htmlFor='password'>Password</label>
                 <input type={show ? 'text' : 'password'} name='password' id='' required></input>
                 <p onClick={()=>setShow(!show)}><small>
                    {
                        show ? <span>Hide Password</span>: <span>Show password</span>
                    }
                    </small></p>
                </div>

                <input className='btn-submit' type="submit"  value='Login'/>
            </form>
            <p><span>New to Ema-johon? <Link to='/signup'>Create New Account</Link></span></p>
            <p className='text-error'>{error}</p>
            <p className='text-success'>{success}</p>
        </div>
    );
};

export default Login;