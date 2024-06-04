import React, { useState } from 'react'
import "./Table.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCircleXmark, faPrint } from '@fortawesome/free-solid-svg-icons'
import { useSelector } from 'react-redux'

const Table = () => {
    const data = useSelector(state => state.appointmentFormData)
    console.log(data)
    const tableInfo = [];
    tableInfo.push(data)
    const onRefundIssue = ()=>{
        alert("refund issued")
    }

    const appointmentSlipGenerator=()=>{
        alert("Appoitnment Slip generating.....")
        window.print()
    }
    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th className='sNumber'>S No.</th>
                        <th className='queueNo'>Queue</th>
                        <th className='opdId'>OPD ID</th>
                        <th className='UHID'>UHID</th>
                        <th className='patientName'>Patient Name</th>
                        <th className='depart'>Department</th>
                        <th className='doc'>Doctor</th>
                        <th className='type'>Type</th>
                        <th className='fee'>Fee</th>
                        <th className='paymentMethod'>Mode</th>
                        <th className='process'>Process</th>
                    </tr>
                </thead>
                <tbody>
                    {tableInfo.map((obj, index) => (
                        <tr key={index}>
                            <td className='sNumber'>{obj?.s_number}</td>
                            <td className='queueNo'>{obj?.queueNo}<button onClick={onRefundIssue}><FontAwesomeIcon icon={faCircleXmark}/></button></td>
                            <td className='opdId'>{obj?.opdId}<button onClick={appointmentSlipGenerator}><FontAwesomeIcon icon={faPrint}/></button></td>
                            <td className='UHID'>{obj?.UHID}</td>
                            <td className='patientName'>{obj?.name}</td>
                            <td className='depart'>{obj?.department}</td>
                            <td className='doc'>{obj?.doctor}</td>
                            <td className='type'>{obj?.Type}</td>
                            <td className='fee'>{obj?.Fee}</td>
                            <td className='paymentMethod'>{obj?.payment_mode}</td>
                            <td className='process'>{obj?.Process}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default Table;