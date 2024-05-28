import Signin from './pages/Signin'
import Signup from './pages/Signup'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './components/Dashboard/Main/Dashboard'
import Appointment from './pages/Appointment/Appointment'
import Emergency from './pages/Emergency'
import ClinicalManagement from './pages/ClinicalManagement'
import ProcedureRoom from './pages/ProcedureRoom'
import PrintSlip from './components/AppointmentPrintSlip/PrintSlip'

function App() {

  

  return (
    <>
      <Routes>
       <Route element={<Home/>} path='/'/>
       <Route element={<Signin/>} path='/signin'/>
       <Route element={<Signup/>} path='/signup'/>
       <Route element={<Dashboard/>} path='/dashboard'>
         <Route element={<Appointment/>} path='appointment'></Route>
         <Route element={<Emergency/>} path='emergency'></Route>
         <Route element={<ClinicalManagement/>} path='clin-management'></Route>
         <Route element={<PrintSlip/>} path='procedure-room'></Route>
       </Route>
      </Routes>
    </>
  )
}

export default App
