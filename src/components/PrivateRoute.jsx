import React, { useEffect, useState } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import Header from './Header'

const PrivateRoute = () => {
  const [loggedIn, setLoggedIn] = useState(true)
  useEffect(() => {

  })
  return loggedIn ? <><Header /> <Outlet /></>  : <Navigate to="/sign-in" />
}

export default PrivateRoute