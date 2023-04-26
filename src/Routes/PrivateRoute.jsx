import React, { useContext } from 'react';
import { AuthContext } from '../components/Providers/AuthProvider';
import { Navigate, Route, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const location=useLocation()

    const {user, loading}=useContext(AuthContext)
    if(loading){
        return <div>Loading...</div>
    }
    if(user){
        return children;
    }
    return <Navigate to='/login' state={{from:location}} relative></Navigate>
  
};

export default PrivateRoute;