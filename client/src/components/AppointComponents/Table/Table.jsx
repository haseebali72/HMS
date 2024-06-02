import React, { useState } from 'react'
import "./Table.css"
import { tableInfo } from '../../../data/appointmentTable'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCircleXmark, faPrint } from '@fortawesome/free-solid-svg-icons'

const Table = () => {
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
                    {tableInfo.map((info) => (
                        <tr key={info.s_number}>
                            <td className='sNumber'>{info.s_number}</td>
                            <td className='queueNo'>{info.queueNo}<button onClick={onRefundIssue}><FontAwesomeIcon icon={faCircleXmark}/></button></td>
                            <td className='opdId'>{info.opdId}<button onClick={appointmentSlipGenerator}><FontAwesomeIcon icon={faPrint}/></button></td>
                            <td className='UHID'>{info.UHID}</td>
                            <td className='patientName'>{info.patient_name}</td>
                            <td className='depart'>{info.Department}</td>
                            <td className='doc'>{info.Doctor}</td>
                            <td className='type'>{info.Type}</td>
                            <td className='fee'>{info.Fee}</td>
                            <td className='paymentMethod'>{info.payment_mode}</td>
                            <td className='process'>{info.Process}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default Table;