import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/Firebase.config";


import { GoogleAuthProvider } from "firebase/auth";
import { GithubAuthProvider } from "firebase/auth";


export const AuthContext = createContext(null)

//social auth provider
const googleProvider = new GoogleAuthProvider();
const GitHubProvider = new GithubAuthProvider();

const FirebaseProvider = ({children}) => {
    
 //create user
 const createUser=(email,password)=>{
   return createUserWithEmailAndPassword(auth,email,password)
 }

 //sign in User
 const signInUser =(email, password)=>{
  return signInWithEmailAndPassword(auth, email, password)

 }

 //google login
 const googleLogin=()=>{
 return signInWithPopup(auth, googleProvider)
 }
 //GitHub login
 const GitHubLogin=()=>{
  return signInWithPopup(auth,GitHubProvider)
 }
 //logOut
 const logOut=()=>{
  signOut(auth)
 }
 


 const [user,setUser]=useState(null)
 console.log(user);
 useEffect(()=>{
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUser(user)
    }
  });
 },[])


    const allValues ={
      createUser,
      signInUser,
      googleLogin,
      GitHubLogin,
      logOut,
      
    }
  return (
    <AuthContext.Provider value={allValues}>
      {children}
    </AuthContext.Provider>
  );
};

export default FirebaseProvider;
