import React, { useEffect, useState } from 'react'
import { Navigate, Outlet, useNavigate } from 'react-router-dom'
import Header from './Header'
import { auth } from '../firebase/firebase'
import { onAuthStateChanged } from 'firebase/auth'

const PrivateRoute = () => {
  const [loggedIn, setLoggedIn] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    onAuthStateChanged(auth, user => {
      if (user) {
        setLoggedIn(true)
      }
      setLoading(false)
    })
  }, [])

  if (loading) {
    return <h1>Loading.....</h1>
  }


  return loggedIn ? <><Header /><Outlet /></> : <Navigate to="/sign-in" />
}

export default PrivateRoute
