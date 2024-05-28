import { faBars, faCalendarCheck, faHouse } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Profile from "../../../assets/Profile.png"
import "./Sidebar.css"

const Sidebar = ({sidebarHandler, toggleSidebar}) => {
    const side_bar_items = [
        {
            id: 0,
            name: "Home",
            path: "/dashboard",
            icon: <FontAwesomeIcon icon={faHouse} />
        },
        {
            id: 1,
            name: "Appointment",
            path: "appointment",
            icon: <FontAwesomeIcon icon={faCalendarCheck} />
        },
        {
            id: 2,
            name: "Clinical Management",
            path: "clin-management",
            icon: <FontAwesomeIcon icon={faHouse} />
        },
        {
            id: 3,
            name: "Emergency",
            path: "emergency",
            icon:  ""
        },
        {
            id: 4,
            name: "Procedure Room",
            path: "procedure-room",
            icon: <FontAwesomeIcon icon={faHouse} />
        },
        {
            id: 5,
            name: "Operation Thetre",
            path: "opthetre",
            icon: <FontAwesomeIcon icon={faHouse} />
        },
        {
            id: 6,
            name: "Operation Thetre",
            path: "/opthetre",
            icon: <FontAwesomeIcon icon={faHouse} />
        },
        {
            id: 7,
            name: "Operation Thetre",
            path: "/opthetre",
            icon: <FontAwesomeIcon icon={faHouse} />
        },
        {
            id: 8,
            name: "Operation Thetre",
            path: "/opthetre",
            icon: <FontAwesomeIcon icon={faHouse} />
        },
        {
            id: 9,
            name: "Operation Thetre",
            path: "/opthetre",
            icon: <FontAwesomeIcon icon={faHouse} />
        }
    ]

    return (
        <>
            <div className={`${toggleSidebar ? 'hiddenSidebar w-12 duration-100 ease' : "sidebar w-56"} bg-greenPalate-darkestLimeGreen`}>
                <div className='float-right text-xl'>
                    <button onClick={sidebarHandler} className={`${toggleSidebar? "": ""}`}>
                        <FontAwesomeIcon icon={faBars}/>
                    </button>
                </div>
                <div className={`${toggleSidebar?"hidden" : "ml-16 w-20 h-30"}`}>
                    <img className='' src={Profile}/>
                    <h1 className='text-white'>User Name</h1>
                </div>
                <nav className='mt-4 flex flex-col'>
                    <ul className='h-auto mt-auto p-0 w-ful'>
                        {side_bar_items.map(item =>
                            <li className='flex w-full h-12  m-0 justify-center items-center text-white hover:bg-greenPalate-darkLimeGreen hover:rounded cursor-pointer duration-150 active:bg-greenPalate-darkLimeGreen' key={item.id}>
                                <NavLink className={({ isActive }) => (isActive ? 'flex items-center h-full rounded-xl bg-greenPalate-darkLimeGreen w-full text-black' : 'flex items-center w-full')} to={item.path}>
                                    <div className={`${toggleSidebar ? "flex-auto m-4 text-xl" : "flex-30 grid place-items-center"}`}>
                                        {item.icon}
                                    </div>
                                    <p className={`${toggleSidebar ? "hidden" : "inline"} font-semibold flex-70  $`}>
                                        {item.name}
                                    </p>
                                </NavLink>
                            </li>)
                        }
                    </ul>
                </nav>


            </div>
        </>
    )
}

export default Sidebar;