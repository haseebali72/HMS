import React from 'react';
import Form from '../../components/AppointComponents/Form/Form.jsx';
import "./Appointment.css";
import Table from '../../components/AppointComponents/Table/Table.jsx';

const Appointment = () => {

  return (
    <>
      <div className='wrapper'>
       
        <div className='upperDiv'>
            <Form />
        </div>
        <div className='lowerDiv'>
         
          <div className='buttonDiv'>
            <button className='queueButton'>Copy</button>
            <button className='queueButton'>CSV</button>
            <button className='queueButton'>PDF</button>
            <button className='queueButton'>PDF</button>
            <label htmlFor='searchQueue'>Search:</label>
            <input id='searchQueue' type='search' placeholder='Search Queue' />
          </div>
         
          <div className='tableDiv'>
            <Table />
          </div>
        
        </div>
      </div>
    </>
  );
};

export default Appointment;
