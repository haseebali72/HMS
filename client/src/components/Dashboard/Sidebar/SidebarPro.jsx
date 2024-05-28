import { faHouse, faCalendarCheck, faHome } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import React from 'react'
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar"


const SidebarPro = () => {
        const side_bar_items = [
            {
                id :0,
                name : "Home",
                path : "/",
                icon : <FontAwesomeIcon icon={faHouse}/>
            },
            {
                id: 1,
                name : "Appointment",
                path : "/appointment",
                icon : <FontAwesomeIcon icon={faCalendarCheck}/>
            },
            {
                id : 2 ,
                name : "Clinical Management",
                path : "/clin-management",
                icon : <FontAwesomeIcon icon={faHouse}/>
            },
            {
                id :3,
                name : "Emergency",
                path : "/emergency",
                icon : <FontAwesomeIcon icon={faHouse}/>
            },
            {
                id :4,
                name : "Procedure Room",
                path : "/procedure-romm",
                icon : <FontAwesomeIcon icon={faHouse}/>
            },
            {
                id :5,
                name : "Operation Thetre",
                path : "/opthetre",
                icon : <FontAwesomeIcon icon={faHouse}/>
            },
            {
                id :6,
                name : "Operation Thetre",
                path : "/opthetre",
                icon : <FontAwesomeIcon icon={faHouse}/>
            },
            {
                id :7,
                name : "Operation Thetre",
                path : "/opthetre",
                icon : <FontAwesomeIcon icon={faHouse}/>
            },
            {
                id :8,
                name : "Operation Thetre",
                path : "/opthetre",
                icon : <FontAwesomeIcon icon={faHouse}/>
            },
            {
                id :9,
                name : "Operation Thetre",
                path : "/opthetre",
                icon : <FontAwesomeIcon icon={faHouse}/>
            },
            {
                id :10,
                name : "Operation Thetre",
                path : "/opthetre",
                icon : <FontAwesomeIcon icon={faHouse}/>
            },
            {
                id :11,
                name : "Operation Thetre",
                path : "/opthetre",
                icon : <FontAwesomeIcon icon={faHouse}/>
            }
        ]
    return (
        <>
            <Sidebar className='bg-red-500'>
                <Menu className='mt-5'>
                {side_bar_items.map(item=> <MenuItem key={item.id} className='hover:bg-gray-800'>{item.icon}{item.name}</MenuItem>)}
                </Menu>
            </Sidebar>;
        </>
    )
}

export default SidebarPro