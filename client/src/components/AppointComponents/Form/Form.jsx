import React, { useRef, useState } from 'react'
import { useForm, useFieldArray } from "react-hook-form"
import { DevTool } from "@hookform/devtools"
import "./form.css"
import { opdDoctors } from '../../../data/Doctors'
import { useDispatch } from 'react-redux'
import { addData } from '../../../redux/slices/appointmentData.slice'
import { useReactToPrint } from "react-to-print"
import PrintSlip from '../../AppointmentPrintSlip/PrintSlip'

const Form = () => {
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current
    })
    const dispatch = useDispatch();
    const form = useForm();
    const { register, handleSubmit, formState, control } = form
    const { errors } = formState

    const onSubmit = data => {
        // console.log(data, typeof data)
        dispatch(addData(data))
        alert("Data submitted")
        handlePrint();
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className='formContainer'>

                {/* Patients Information */}
                <div className='personalInfo'>
                    {/* Category */}
                    <div className='formControl'>
                        <label htmlFor='category' className='fieldLabels'>Category:</label>
                        <select
                            id="category"
                            className='fields'
                            {...register("category", {
                                required: {
                                    value: true,
                                    message: "Patient's Category Required"
                                },
                                validate: (value) => value !== "NA" || "Category Required"
                            })}
                        >
                            <option value="NA" defaultValue="NA">NA</option>
                            <option value="Benificiary">Benificiary</option>
                            <option value="Private">Private</option>
                        </select>
                        <p className={`${errors.category?.message ? "error" : "hidden"}`}>
                            {errors.category?.message}
                        </p>
                    </div>


                    {/* Patient's Name */}
                    <div className="formControl">
                        <label htmlFor="name" className="fieldLabels">Patient's Name:</label>
                        <input
                            type="text"
                            className="fields"
                            id='name'
                            {...register("name", {
                                required: {
                                    value: true,
                                    message: "Patient's Name Required"
                                }
                            })}
                        />
                        <p className={`${errors.name?.message ? "error" : "hidden"}`}>
                            {errors.name?.message}
                        </p>
                    </div>

                    {/* Phone Number */}
                    <div className="formControl">
                        <label htmlFor="mobile" className="fieldLabels">Mobile Number:</label>
                        <input
                            type="text"
                            id='mobile'
                            className="fields"
                            {...register("mobileNumber", {
                                required: {
                                    value: true,
                                    message: "Patient's Name Required"
                                },
                                pattern: {
                                    value: /^03\d{9}$/g,
                                    message: "Invalid Number"

                                }
                            })}
                        />
                        <p className={`${errors.mobileNumber?.message ? "error" : "hidden"}`}>
                            {errors.mobileNumber?.message}
                        </p>

                    </div>

                    {/* MARITAL STATUS */}

                    <div className='formControl'>
                        <label htmlFor='maritalStatus' className='fieldLabels'>Marital Status:</label>
                        <select
                            id="marStatus"
                            name='marStatus'
                            className='fields'
                            {...register("maritalStatus", {
                                required: {
                                    value: true,
                                    message: "Marital Status Required"
                                },
                                validate: (value) => value !== "NA" || "Required"
                            })}
                        >
                            <option value="NA" defaultValue="NA">NA</option>
                            <option value="single">Single</option>
                            <option value="married">Married</option>
                            <option value="widowed">Widowed</option>
                            <option value="divorced">Divorced</option>
                        </select>
                        <p className={`${errors.category?.message ? "error" : "hidden"}`}>
                            {errors.category?.message}
                        </p>
                    </div>

                    {/*Email  */}
                    <div className="formControl">
                        <label htmlFor="email" className="fieldLabels">Email :</label>
                        <input
                            type="email"
                            className="fields"
                            {...register("email", {
                                required: {
                                    value: true,
                                    message: "Email required"
                                },
                                pattern: {
                                    value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                                    message: "Invalid Email"
                                },
                            })}
                        />
                        <p className={`${errors.email?.message ? "error" : "hidden"}`}>
                            {errors.email?.message}
                        </p>
                    </div>

                    {/* Date of Birth */}
                    <div className="formControl">
                        <label htmlFor="dob" className="fieldLabels">DOB :</label>
                        <input
                            type="date"
                            className="fields"
                            id='dob'
                            {...register("dateOfBirth", {
                                // valueAsDate : true, the issue of serializaable data on redux
                                required: {
                                    value: true,
                                    message: "Date of Birth Required"
                                },
                                validate: value => value !== "" || "DOB required"

                            })}
                        />
                        <p className={`${errors.dateOfBirth?.message ? "error" : "hidden"}`}>
                            {errors.dateOfBirth?.message}
                        </p>
                    </div>

                    {/* Age */}

                    <div className="formControl">
                        <label htmlFor="age" className="fieldLabels">Age:</label>
                        <input
                            type="number"
                            className="fields"
                            defaultValue={23}
                            id='age'
                            {...register("age", {
                                valueAsNumber: true
                            })}
                            readOnly
                        />
                        <p className={`${errors.dateOfBirth?.message ? "error" : "hidden"}`}>
                            {errors.dateOfBirth?.message}
                        </p>
                    </div>


                    {/* CNIC */}
                    <div className="formControl">
                        <label htmlFor="cnic" className="fieldLabels">CNIC Number :</label>
                        <input
                            type="text"
                            className="fields"
                            id='cnic'
                            {...register("CNIC", {
                                required: {
                                    value: true,
                                    message: "CNIC Number Required"
                                },
                                pattern: {
                                    value: /^\d{13}$/g,
                                    message: "Invalid CNIC Number"
                                }
                            })}
                        />
                        <p className={`${errors.CNIC?.message ? "error" : "hidden"}`}>
                            {errors.CNIC?.message}
                        </p>                </div>

                    {/* Address */}

                    <div className="formControl">
                        <label htmlFor="address" className="fieldLabels">Address :</label>
                        <input
                            type="text"
                            id='address'
                            className="fields"
                            {...register("address", {
                                required: {
                                    value: true,
                                    message: "Address Required"
                                }
                            })}
                        />
                        <p className={`${errors.address?.message ? "error" : "hidden"}`}>
                            {errors.address?.message}
                        </p>
                    </div>


                    {/* Gender  */}
                    <div className='formControl'>
                        <label htmlFor='gender' className='fieldLabels'>Gender :</label>
                        <select
                            id="gender"
                            name="gender"
                            className='fields'
                            {...register("gender", {
                                required: {
                                    value: true,
                                    message: "Gender Required"
                                },
                                validate: (value) => value !== "NA" || "Gender Required"
                            })}
                        >
                            <option value="NA" defaultValue="NA">NA</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                        <p className={`${errors.gender?.message ? "error" : "hidden"}`}>
                            {errors.gender?.message}
                        </p>
                    </div>


                    {/* Blood group */}
                    <div className='formControl'>
                        <label htmlFor='bldgrp' className='fieldLabels'>Blood Group :</label>
                        <select
                            id="bldgrp"
                            name="bloodGroup"
                            className='fields'
                            {...register("bloodGroup", {
                                required: {
                                    value: true,
                                    message: "Blood Group Required"
                                },
                                validate: value => value != "NA" || "Blood Group Required"
                            })}
                        >
                            <option value="NA" defaultValue="NA">NA</option>
                            <option value="A+">A+</option>
                            <option value="A-">A-</option>
                            <option value="B+">B+</option>
                        </select>
                        <p className={`${errors.bloodGroup?.message ? "error" : "hidden"}`}>
                            {errors.bloodGroup?.message}
                        </p>
                    </div>
                </div>

                <div className='otherInfo'>
                    {/* Reffered to */}
                    <div className='formControl'>
                        <label htmlFor='refferedTo' className='fieldLabels'>Reffered To:</label>
                        <select
                            id="reffer"
                            className='fields'
                            {...register("reffer", {
                                required: {
                                    value: true,
                                    message: "Reffer Required"
                                },
                                validate: (value) => value !== "NA" || "Reffer Required"
                            })}
                        >
                            <option value="NA" defaultValue="NA">NA</option>
                            <option value="Chronic OPD">Chronic OPD</option>
                            <option value="Emergency">Emergency</option>
                        </select>
                        <p className={`${errors.reffer?.message ? "error" : "hidden"}`}>
                            {errors.reffer?.message}
                        </p>
                    </div>

                    {/* Department */}
                    <div className='formControl'>
                        <label htmlFor='department' className='fieldLabels'>Department:</label>
                        <select
                            id="department"
                            name='department'
                            className='fields'
                            {...register("department", {
                                required: {
                                    value: true,
                                    message: "Patient's Category Required"
                                },
                                validate: (value) => value !== "NA" || "Department Required"
                            })}
                        >
                            <option value="NA" defaultValue="NA">NA</option>
                            <option value="GENERAL_MEDICINE">GENERAL MEDICINE</option>

                        </select>
                        <p className={`${errors.department?.message ? "error" : "hidden"}`}>
                            {errors.department?.message}
                        </p>
                    </div>


                    {/* Doctor*/}
                    <div className='formControl'>
                        <label htmlFor='doctor' className='fieldLabels'>Doctor</label>
                        <select
                            id="doctor"
                            name='doctor'
                            className='fields'
                            {...register("doctor", {
                                required: {
                                    value: true,
                                    message: "Please Select Doctor to be consulted"
                                },
                                validate: (value) => value !== "NA" || "Please Select Doctor to be consulted"
                            })}
                        >
                            {opdDoctors.map(doc => <option key={doc.key} value={doc.value}>{doc.name}</option>)}
                        </select>
                        <p className={`${errors.reffer?.message ? "error" : "hidden"}`}>
                            {errors.reffer?.message}
                        </p>
                    </div>

                    {/* Payment*/}
                    <div className='formControl'>
                        <label htmlFor='payment' className='fieldLabels'>Payment :</label>
                        <select
                            id="payment"
                            name="payment"
                            className='fields'
                            {...register("payment", {
                                required: {
                                    value: true,
                                    message: "Payment Method"
                                },
                                validate: value => value != "NA" || "Payment Required"
                            })}
                        >
                            <option value="NA" defaultValue="NA">NA</option>
                            <option value="Cash">Cash</option>
                            <option value="Online">Online</option>
                        </select>
                        <p className={`${errors.payment?.message ? "error" : "hidden"}`}>
                            {errors.payment?.message}
                        </p>
                        <input type='submit' className='submitButton' />

                    </div>
                </div>
            </form>

            <div style={{ display: 'none' }}>
                <PrintSlip ref={componentRef} />
            </div>

            <DevTool control={control} />
        </>
    )
}

export default Form