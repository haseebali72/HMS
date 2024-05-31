import React from 'react';
import Form from '../../components/AppointComponents/Form/Form.jsx';
import "./Appointment.css";
import Table from '../../components/AppointComponents/Table/Table.jsx';

const Appointment = () => {

  return (
    <>
      <div className='wrapper'>
        <div className='upperDiv'>
          <div className='formDiv'>
            <Form />
          </div>
        </div>
        <div className='lowerDiv'>
          <div className='tableDiv'>
            <Table />
          </div>
        </div>
      </div>
    </>
  );
};

export default Appointment;
