import React from 'react'
import { Navigate } from 'react-router-dom'

const Home = (props) => {
  return (
    <>
    {props.userCredentials? <div>This is User Home</div> : <Navigate to="/signin"/>}
    </>
  ) 
}

export default Home