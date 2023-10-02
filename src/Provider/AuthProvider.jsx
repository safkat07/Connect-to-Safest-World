import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import auth from "../Firebase/firebase.config";
import { createContext, useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";


export const AuthContext = createContext({});

//continue with google auth
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  //google login
  const GoogleLogin = () => {
    setLoading(false);
    return signInWithPopup(auth, googleProvider);
    
    
    
  };


  //manage users
  useEffect(() =>{
    onAuthStateChanged(auth, (user)=>{
      setUser(user)
      setTimeout(() =>{
        setLoading(false)
      },3000)
      // setLoading(false)
    })
    
    
  },[])
   console.log(user);
   //singout user

   const logOut = () =>{
    return signOut(auth)
   }

  //value of Context
  const authInfo = {
    GoogleLogin,
    user,
    logOut,
    loading,
    

  };
  return (
    <AuthContext.Provider value={authInfo}>{children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
