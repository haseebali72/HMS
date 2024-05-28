import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'

const Signin = (props) => {

  const [userData, setUserData] = useState({
      role : "",
      userName : "",
      pwd : "",

  })
  const onChangeHandler = e =>{
      setUserData({...userData, [e.target.name] : e.target.value})
  }

  console.log(userData)

  const handleFormSubmit = ()=>{
      e.preventDefault();
      alert("FOrm Submittes")
  }
  
  
  return (
    <>
      <div>
        <form method='POST' onSubmit={handleFormSubmit}>
          <label htmlFor="role">Select Role</label>
          <select id="role" name="role" value={userData.role} onChange={onChangeHandler}>
            <option value="accountant">Accountant</option>
            <option value="doctor">Doctor</option>
            <option value="admin">Admin</option>
            <option value="physician">Physician</option>
            <option value="receptionist">Receptionist</option>
            <option value="nurse">Nurse</option>
            <option value="janitory">Janitorial Staff</option>
            <option value="house_keeping">House Keeping</option>
          </select>
          <input type='text' name='userName' placeholder='Enter userName' onChange={onChangeHandler}></input>
          <input type='password' name='pwd' placeholder='Password' onChange={onChangeHandler}></input>
          <input type="submit"/>
        </form>
      </div>
    </>
  
  )
}

export default Signin