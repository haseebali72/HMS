import React, { forwardRef } from 'react';
import { useSelector } from 'react-redux';
import Logo from "../../assets/Logo.png"
import "./PrintSlip.css"

const PrintSlip = forwardRef((props, ref) => {
  const data = useSelector(state => state.appointmentFormData);
  return (
    <>
      <div ref={ref} className='wrapperDiv'>

        <div className='header'>
          <div className='headerOne'>
            <h1>Date : 12/8/2024</h1>
          </div>
          <div className='headerTwo'>
            <img src={Logo} style={{ width: "100px", height: "100px" }}></img>
            <h2>Galata Hospital</h2>
            <h1>Appointment Slip</h1>
          </div>
          <div className='headerThree'>
            <h1>Time : 02:00:00 PM</h1>
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
            <p>Blood Group : {data?.bloodGroup}</p>
            <p>Mobile Number : {data?.mobileNumber}</p>
          </div>
          <div className='middleTwo'>
          <p>Referred To : {data?.reffer}</p>
            <p>Doctor : {data?.doctor}</p>
            <p>Made By : {data?.user}</p>
            <p>Payment : {data?.payment}</p>
            <p>Amount : {data?.amount}</p>
            <p>Last Visit : {data?.lastVisit}</p>
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
