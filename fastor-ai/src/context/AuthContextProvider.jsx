import React from 'react'
import { useState } from 'react';
import { createContext } from 'react'

export const AuthContext=createContext();

const AuthContextProvider = ({children}) => {

    const initState={
        isAuth:false,
        token:null,
        username:null,
        loading:false,
        data:[],
        otp:"",
        phoneNumber:"",
    }

    const[authState,setAuthState] = useState(initState);


    const storeOtp=(otp,phone)=>{
        setAuthState({...authState,otp:otp,phoneNumber:phone})
    }

    const verifyOtp=(token,username)=>{
        setAuthState({...authState,token:token,username:username})
    }

    const loadingStatus=()=>{
      setAuthState({...authState,loading:true})
    }
  return (
    <AuthContext.Provider value={{authState,storeOtp,verifyOtp,loadingStatus}}>{children}</AuthContext.Provider>
  )
}

export default AuthContextProvider;