import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../../Firebase/Firebase.confiq';

export const AuthContext = createContext(null)
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState('')
    const [loading ,setLoading]=useState(true)

    //  registration
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    //  login
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    //  signout

    const logOut=()=>{
        signOut(auth)
    }

    // observe user auth state
    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth ,currentUser=>{
            setUser(currentUser)
            setLoading(false)
        });
        return ()=>{
            unsubscribe();
        }
    },[])
 


    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut,
        
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;