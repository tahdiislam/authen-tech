import React, { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth'
import app from '../firebase/firebase';

export const AuthContext = createContext()

const auth = getAuth(app)

const UserContext = ({children}) => {
    const user = {displayName: 'Tahdi Islam'}
    
    // create user with email and password
    const createNewUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    return (
        <AuthContext.Provider value={{user, createNewUser}}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;