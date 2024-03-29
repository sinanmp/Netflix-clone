import { createContext, useContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, signInWithPopup, GoogleAuthProvider, getAuth } from 'firebase/auth';
import { auth ,db } from '../services/farebase';

import {doc ,onSnapshot,setDoc} from 'firebase/firestore'

const AuthContext = createContext();

export function AuthContextProvider({ children }) {
    const [user, setUser] = useState({});
 

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });

        return () => {
            unsubscribe();
        }
    }, []);

    return (
        <AuthContext.Provider value={{ user }}>
            {children}
        </AuthContext.Provider>
    );
}

const handleGoogleSignIn = async () => {

    try {
        const provider = new GoogleAuthProvider();
        const authInstance = getAuth();
        const result = await signInWithPopup(authInstance, provider);
        const credential =  GoogleAuthProvider.credentialFromResult(result);
        let previouseData
        onSnapshot(doc(db, 'users', `${user.email}`), (doc) => {
               previouseData = doc.data().favShows
          })
        await setDoc(doc(db,'users' ,result.user.email),{
            favShows : [] ,
        })
        const token =  credential.accessToken;
        const user = result.user;
        await setUser(user)
    } catch (error) {
        console.error(error);
    }
};

export function signUpUser(email, password) {
    createUserWithEmailAndPassword(auth, email, password)
    setDoc(doc(db,'users' ,email),{
        favShows : [] ,
    })

}

export function loginUser(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
}

export function logoutUser() {
    return signOut(auth);
}

export function useAuth() {
    return useContext(AuthContext);
}

export { handleGoogleSignIn };
