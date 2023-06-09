import React, { useContext } from 'react';
import './Header.css'
import logo from '../../images/Logo.svg'
import { Link } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';
const Header = () => {
      const {user,logOut}=useContext(AuthContext)


      const handleSignOut=()=>{
        logOut()
        .then(()=>{})
        .catch(error=>console.log(error))
      }
      
    return (
        <nav className='Header'>
           <img src={logo} alt="" />
           <div>
            <Link to="/">Shop</Link>
            <Link to="/orders">Orders</Link>
            <Link to="/inventory">Inventory</Link>
            <Link to="/login">login</Link>
            <Link to="/signup">SignUp</Link>
             {
                user && <span className='text-white'>{user.email} <button  onClick={handleSignOut}>SignOut</button></span>
             }
           </div>
        </nav>
       

    );
};

export default Header;