import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/Firebase.config";

import { GoogleAuthProvider } from "firebase/auth";
import { GithubAuthProvider } from "firebase/auth";

export const AuthContext = createContext(null);

//social auth provider
const googleProvider = new GoogleAuthProvider();
const GitHubProvider = new GithubAuthProvider();

const FirebaseProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(true);
  const [loading, setLoading] = useState(true);
  console.log(loading);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoader(false);
      setLoading(false);
    });
    return () => {
      return unsubscribe();
    };
  }, []);
  // console.log(user);
  //  register with email and pass
  const createUser = (email, password) => {
    console.log(email, password);
    setLoader(true);
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //update user profile
  const updateUserData = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };
  // login with email & pass
  const login = (email, password) => {
    setLoader(true);
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  // logOut
  const logout = () => {
    setLoader(true);

    return signOut(auth);
  };
  // google login
  const googleLogin = (provider) => {
    setLoader(true);
    setLoading(true);
    return signInWithPopup(auth, provider);
  };
  //GitHub login
  const GitHubLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, GitHubProvider);
  };
  

  console.log(user);

  const allValues = {
    GitHubLogin,
    user,
    loader,
    createUser,
    updateUserData,
    login,
    logout,
    googleLogin,
    loading,
    // logOut,
    // user,
  };
  return (
    <AuthContext.Provider value={allValues}>{children}</AuthContext.Provider>
  );
};

export default FirebaseProvider;
