import React, { useContext, useState, useEffect, createContext } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  sendPasswordResetEmail,
  updateEmail,
  updatePassword,
  deleteUser,
  updateProfile,
  reauthenticateWithCredential,
  browserLocalPersistence,
  browserSessionPersistence,
  setPersistence,
  GoogleAuthProvider,
  FacebookAuthProvider,
  TwitterAuthProvider,
  GithubAuthProvider,
  signInWithPopup,
  EmailAuthProvider,
  sendEmailVerification,
} from "firebase/auth";
import { auth } from "../utils/firebase";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();

    return signInWithPopup(auth, provider);
  };
  const facebookSignIn = () => {
    const provider = new FacebookAuthProvider();

    return signInWithPopup(auth, provider);
  };
  const twitterSignIn = () => {
    const provider = new TwitterAuthProvider();

    return signInWithPopup(auth, provider);
  };
  const gitHubSignIn = () => {
    const provider = new GithubAuthProvider();

    return signInWithPopup(auth, provider);
  };

  function signup(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }
  const remember = (rememberMe) => {
    if (rememberMe === "true") {
      return setPersistence(auth, browserLocalPersistence); // set persistence to local
    } else {
      return setPersistence(auth, browserSessionPersistence); // set persistence to session
    }
  };

  function logout() {
    return signOut(auth);
  }

  function resetPassword(email) {
    return sendPasswordResetEmail(auth, email);
  }

  function changeEmail(email) {
    return updateEmail(auth.currentUser, email);
  }

  function changePassword(password) {
    return updatePassword(auth.currentUser, password);
  }

  function deleteAcount() {
    return deleteUser(auth.currentUser);
  }

  function sendVerification() {
    return sendEmailVerification(auth.currentUser);
  }

  function changeUserName(userName) {
    return updateProfile(auth.currentUser, { displayName: userName });
  }

  function reauthenticate(password) {
    const credential = EmailAuthProvider.credential(
      auth.currentUser.email,
      password
    );

    return reauthenticateWithCredential(auth.currentUser, credential);
  }

  const value = {
    user,
    googleSignIn,
    facebookSignIn,
    twitterSignIn,
    gitHubSignIn,
    login,
    remember,
    signup,
    logout,
    resetPassword,
    changeEmail,
    changePassword,
    deleteAcount,
    changeUserName,
    sendVerification,
    reauthenticate,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
