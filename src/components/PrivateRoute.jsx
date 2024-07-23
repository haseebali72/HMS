import React, { useEffect, useState } from 'react'
import { Navigate, Outlet, useNavigate } from 'react-router-dom'
import Header from './Header'
import { auth } from '../firebase/firebase'
import { onAuthStateChanged } from 'firebase/auth'

const PrivateRoute = () => {
  const [loggedIn, setLoggedIn] = useState(false)
  const navigate = useNavigate()
  useEffect(() => {
   onAuthStateChanged(auth, user=>{
    if(user){
      setLoggedIn(true)
      navigate("/dashboard")
    }
   })
  }, [])

  return loggedIn ? <><Header/><Outlet /></>  : <Navigate to="/sign-in" />
}

export default PrivateRoute