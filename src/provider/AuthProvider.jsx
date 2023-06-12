import React from 'react';
import {createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from "firebase/auth"
import { createContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { app } from '../firebase/firebase.config';



export const AuthContext = createContext(null)
const auth = getAuth(app)
const goggleProvider = new GoogleAuthProvider()
const githubProvider = new GithubAuthProvider()
const AuthProvider = ({children}) => {
    const [user,setUser]= useState(null)
    const [loading,setLoading]= useState(true)

    const createUser = (email,password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword (auth,email,password)
    }

    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        });
    }
    const signIn = (email,password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }

    const logOut = () =>{
        setLoading(true)
        return signOut(auth)
    }
    const goggle = () =>{
        return signInWithPopup(auth,goggleProvider)
    }

    const github = () => {
        return signInWithPopup(auth,githubProvider)
    }

    useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth,loggedUser =>{
            console.log('Logged in user',loggedUser)
            setUser(loggedUser)
            setLoading(false)
        })
        return () =>{
            unsubscribe()
        }
    },[])

    const authInfo = {user,loading,createUser,signIn,logOut,goggle,github,updateUserProfile
    }
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                    {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;