import { createContext, useContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, signInWithPopup, GoogleAuthProvider, getAuth } from 'firebase/auth';
import { auth } from '../services/farebase';
import { useNavigate } from "react-router-dom";

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
        console.log("its coming here")
        const provider = new GoogleAuthProvider();
        const authInstance = getAuth();
        const result = await signInWithPopup(authInstance, provider);
        const credential = await GoogleAuthProvider.credentialFromResult(result);
        const token = await credential.accessToken;
        const user = await result.user;
        console.log('hii' , user)
        await setUser(user)
    } catch (error) {
        console.error(error);
    }
};

export function signUpUser(email, password) {
    return createUserWithEmailAndPassword(auth, email, password)
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
