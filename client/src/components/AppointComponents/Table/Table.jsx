import React, { useState } from 'react'
import "./Table.css"
import { tableInfo } from '../../../data/appointmentTable'

const Table = () => {
    const [issueRefund, setIssueRefund] = useState(false)

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
                        <th>S No.</th>
                        <th>Queue</th>
                        <th>OPD ID</th>
                        <th>UHID</th>
                        <th>Patient Name</th>
                        <th>Department</th>
                        <th>Doctor</th>
                        <th>Type</th>
                        <th>Fee</th>
                        <th>Mode</th>
                        <th>Process</th>
                    </tr>
                </thead>
                <tbody>
                    {tableInfo.map((info) => (
                        <tr key={info.s_number}>
                            <td>{info.s_number}</td>
                            <td>{info.queueNo}<button onClick={onRefundIssue}>cancle</button></td>
                            <td>{info.opdId}<button onClick={appointmentSlipGenerator}>print</button></td>
                            <td>{info.UHID}</td>
                            <td>{info.patient_name}</td>
                            <td>{info.Department}</td>
                            <td>{info.Doctor}</td>
                            <td>{info.Type}</td>
                            <td>{info.Fee}</td>
                            <td>{info.payment_mode}</td>
                            <td>{info.Process}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default Table;