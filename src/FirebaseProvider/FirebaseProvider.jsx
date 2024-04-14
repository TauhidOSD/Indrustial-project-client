import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/Firebase.config";


import { GoogleAuthProvider } from "firebase/auth";
import { GithubAuthProvider } from "firebase/auth";


export const AuthContext = createContext(null)

//social auth provider
const googleProvider = new GoogleAuthProvider();
const GitHubProvider = new GithubAuthProvider();

const FirebaseProvider = ({children}) => {
   
  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(true);


useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
    setLoader(false);
  });
  return () => {
    return unsubscribe();
  };
}, []);
// console.log(user);
//  register with email and pass
const createUser = (email, password) => {
  setLoader(true);
  return createUserWithEmailAndPassword(auth, email, password);
};
const updateUserData = (user, name, photo) => {
  updateProfile(user, {
    displayName: name,
    photoURL: photo,
  })
    .then(() => {
      alert("Successfull");
    })
    .catch((error) => {
      console.log(error.message);
    });
};
// login with email & pass
const login = (email, password) => {
  setLoader(true);
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
  return signInWithPopup(auth,provider);
};
 //GitHub login
 const GitHubLogin=()=>{
  return signInWithPopup(auth,GitHubProvider)
 }
 //logOut
 const logOut=()=>{
  signOut(auth)
 }
 


 
 console.log(user);
 useEffect(()=>{
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUser(user)
    }
  });
 },[])


    const allValues ={
      // createUser,
      // signInUser,
      // googleLogin,
      GitHubLogin,
      user,
    loader,
    createUser,
    updateUserData,
    login,
    logout,
    googleLogin,
      // logOut,
      // user,
      
    }
  return (
    <AuthContext.Provider value={allValues}>
      {children}
    </AuthContext.Provider>
  );
};

export default FirebaseProvider;
