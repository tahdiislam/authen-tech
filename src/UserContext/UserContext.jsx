import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth'
import app from '../firebase/firebase';

export const AuthContext = createContext()

const auth = getAuth(app)

const UserContext = ({ children }) => {
    const [user, setUser] = useState(null)

    // create user with email and password
    const createNewUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // update user name 
    const setName = name => {
        return updateProfile(auth.currentUser, {
            displayName: name
        })
            .then(() => {
                //update name
                console.log('name updated');
            })
            .catch(error => {
                console.error(error.message);
            })
    }

    // login with email and pass 
    const logIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    // log out
    const logOut = () => {
        return signOut(auth)
            .then(() => {
                // sign out
            })
            .catch(error => {
                console.error(error.message);
            })
    }
    // get logged in user
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            console.log(currentUser);
        })
        return () => unSubscribe();
    }, [])

    // email verification
    const emailVerification = () => {
        return sendEmailVerification(auth.currentUser)
            .then(() => {
                // verification email send
                alert('Please check your email for verification!!')
            })
            .catch(error => {
                console.error(error.message);
            })
    }

    return (
        <AuthContext.Provider value={{
            user,
            createNewUser,
            logIn,
            setName,
            logOut,
            emailVerification,
        }}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;