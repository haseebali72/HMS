import React, { useState } from 'react'
import Sidebar from '../Sidebar/Sidebar'
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import "./Dashboard.css"

const Dashboard = () => {
  const [toggleSidebar, setToggledSidebar] = useState(false)
  const toggleSidebarHandler = ()=>{
      setToggledSidebar(!toggleSidebar)
  }
  return (
    <>
      <div className='dashboardContainer'>
        <div className='item navbarDiv'>
          {/* <Navbar/> */}
        </div>
          
        <div className={`${toggleSidebar ? 'hiddenSidebarDiv' : 'item sidebarDiv'}`}>
          {/* <Sidebar sidebarHandler={toggleSidebarHandler} toggleSidebar={toggleSidebar}/> */}
        </div>
          
        <div className='item mainDiv'>
          <Outlet/>
        </div>
      </div>
    </>
  )
}

export default Dashboard
