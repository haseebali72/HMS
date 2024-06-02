import React, { forwardRef } from 'react';
import { useSelector } from 'react-redux';
import Logo from "../../assets/Logo.png"
import "./PrintSlip.css"

const PrintSlip = forwardRef((props, ref) => {
  const data = useSelector(state => state.appointmentFormData);
  console.log(data)
  
  return (
    <>
      <div ref={ref} className='wrapperDiv'>

        <div className='header'>
          <div className='headerOne'>
            <h1>Date : {data?.date}</h1>
          </div>
          <div className='headerTwo'>
            <img src={Logo} style={{ width: "100px", height: "100px" }}></img>
            <h2>Galata Hospital</h2>
            <h1>Appointment Slip</h1>
          </div>
          <div className='headerThree'>
            <h1>Time : {data?.time}</h1>
          </div>
        </div>

        <hr />

        <div className='middle'>
          <div className='middleOne'>
            <p>Category : {data?.category}</p>
            <p>Reg No. {data?.regNo}</p>
            <p>Patient's Name: {data?.name}</p>
            <p>W/o : {data?.guardianName}</p>
            <p>Age : {data?.age}</p>
            <p>Blood Group : {data?.blood_group}</p>
            <p>Mobile Number : {data?.mobile_number}</p>
            <p>email : {data?.email}</p>
          </div>
          <div className='middleTwo'>
            <p>Referred To : {data?.reffer}</p>
            <p>Doctor : {data?.doctor}</p>
            <p>Made By : {data?.user}</p>
            <p>City : {data?.city}</p>
            <p>Payment : {data?.payment}</p>
            <p>Amount : {data?.amount}</p>
            <p>Last Visit : {data?.lastVisit || "12/4./2023"}</p>
            <p>Panel : {data?.panel}</p>
          </div>
        </div>

        <hr />

        <div className='footer'>Three
          This is my footer
        </div>

      </div>

    </>);
});

export default PrintSlip;
