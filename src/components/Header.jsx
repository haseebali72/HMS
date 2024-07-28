import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { auth } from '../firebase/firebase'
import { toast } from 'react-toastify'


const Header = () => {
    const services = [
        { name: "OPD", path: "/dashboard/opd", key: 1 },
        { name: "Queue", path: "/dashboard/queue", key: 2 },
        { name: "Investigation", path: "/dashboard/investigation", key: 3 },
        { name: "Day Care", path: "/dashboard/day-care", key: 4 },
        { name: "Birth Reg", path: "/dashboard/birth-reg", key: 5 },
        { name: "Notes", path: "/dashboard/notes", key: 6 },
        { name: "Revisit", path: "/dashboard/revisit", key: 7 },
        { name: "Certificate", path: "/dashboard/cert", key: 8 },
        { name: "MIS", path: "/dashboard/opd", key: 9 },
    ]

    const navigate = useNavigate()
    const handleLogout =async ()=>{
        await auth.signOut()
        localStorage.removeItem("registration_table")
        navigate("/sign-in")
        toast.success("Successfully signed out")
    }
    return (
        <>
            <header className='flex justify-between items-center px-3 w-full bg-[#017f82] shadow-xl top-0 sticky z-50 h-14 text-white'>
                <div className=''>
                    HMS LOGO
                </div>
                <nav className=''>
                    <ul className='flex align-middle'>
                        {services.map(service => (<li key={service.key} className='border-white border-x-[.1rem] px-1 '><NavLink to={service.path}>{service.name}</NavLink></li>))}
                    </ul>
                </nav>
                <div>
                    <button  onClick={handleLogout}>Logout</button>
                </div>
            </header>
        </>
    )
}

export default Header