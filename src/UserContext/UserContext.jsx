import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import app from '../firebase/firebase';

export const AuthContext = createContext()

const auth = getAuth(app)
const googleProviders = new GoogleAuthProvider()

const UserContext = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    // create user with email and password
    const createNewUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // sing in with google 
    const signInWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProviders)
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
        setLoading(true)
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
            setLoading(false)
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
            signInWithGoogle,
            loading
        }}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;