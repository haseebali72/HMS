import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Signin from './pages/Signin'
import PrivateRoute from './components/PrivateRoute'
import Opd from './pages/Opd'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<h1>HMS Home</h1>} />
        <Route path='/sign-in' element={<Signin />} />
        <Route path='/dashboard' element={<PrivateRoute />}>
          <Route path='/dashboard/opd' element={<Opd/>}/>
          <Route path='/dashboard/queue' element={<h1>Queue</h1>}/>
          <Route path='/dashboard/investigation' element={<h1>invest</h1>}/>
          <Route path='/dashboard/day-care' element={<h1>day care</h1>}/>
          <Route path='/dashboard/birth-reg' element={<h1>Birth-reg</h1>}/>
          <Route path='/dashboard/notes' element={<h1>notes</h1>}/>
          <Route path='/dashboard/revisit' element={<h1>rev</h1>}/>
          <Route path='/dashboard/cert' element={<h1>certi</h1>}/>
          <Route path='/dashboard/mis' element={<h1>MKS</h1>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App