import React, { useState, useContext, useEffect } from 'react';
import { db, provider } from '../firebase/firebase';
import {
    getAuth,
    signInWithPopup,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
    signOut,
    onAuthStateChanged,
} from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';

const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const [user, setUser] = useState();
    const [loadingUser, setLoadingUser] = useState(true);
    const auth = getAuth();

    const loginWithGoogle = async () => {
        return await signInWithPopup(auth, provider);
    };

    const signup = async (email, password, username) => {
        sessionStorage.setItem('username', username);
        return await createUserWithEmailAndPassword(auth, email, password).then(async () => {
            await updateProfile(auth.currentUser, {
                displayName: username,
            }).catch((err) => console.log(err));
        });
    };

    const login = async (email, password) => {
        return await signInWithEmailAndPassword(auth, email, password);
    };

    const logout = async () => {
        return await signOut(auth).catch((err) => {
            console.log(err.message);
        });
    };

    useEffect(() => {
        const unsubscriber = onAuthStateChanged(auth, async (user) => {
            try {
                if (user) {
                    const { uid, displayName, email, photoURL } = user;
                    setUser({ uid, displayName, email, photoURL });
                    await setDoc(doc(db, 'users', user.uid), {
                        displayName: user.displayName,
                        photoURL: user.photoURL,
                        uid: user.uid,
                        email: user.email,
                    }).catch((err) => console.log(err));
                } else setUser(null);
            } catch (error) {
                console.log(error);
            } finally {
                setLoadingUser(false);
            }
        });
        return () => unsubscriber();
    }, [auth]);

    const value = {
        user,
        loginWithGoogle,
        signup,
        login,
        logout,
        loadingUser,
    };

    return <AuthContext.Provider value={value}>{!loadingUser && children}</AuthContext.Provider>;
}
