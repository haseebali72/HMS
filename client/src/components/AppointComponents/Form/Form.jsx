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
    const [loading, setLoading] = useState(false)
     
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
        handlePrint();
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className='formContainer'>
                <div className='labelsdivOne'>
                    <label htmlFor='category'>Category: </label>
                    <label htmlFor='name'>Name:</label>
                    <label htmlFor='mobile'>Mobile:</label>
                    <label htmlFor='gender'>Gender:</label>
                    <label htmlFor='marital_status'>Marital Status:</label>
                    <label htmlFor='address'>Address:</label>
                    <label htmlFor='blood_group'>Blood Group:</label>
                    <label htmlFor='dob'>Date of Birth:</label>
                    <label htmlFor='email'>Email:</label>
                </div>

                <div className='fieldsdivOne'>
                    {/* Category */}
                    <div>
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

                    {/* Name */}
                    <div>
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
                    <div>
                        <input
                            type="text"
                            id='mobile'
                            className="fields"
                            {...register("mobile_number", {
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
                        <p className={`${errors.mobile_number?.message ? "error" : "hidden"}`}>
                            {errors.mobile_number?.message}
                        </p>
                    </div>

                    {/* Gender */}
                    <div>
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

                    {/* Marital Status  */}
                    <div>
                        <select
                            id="marital_status"
                            name='marital_status'
                            className='fields'
                            {...register("marital_status", {
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
                        <p className={`${errors.marital_status?.message ? "error" : "hidden"}`}>
                            {errors.marital_status?.message}
                        </p>

                    </div>

                    {/* Address */}
                    <div>
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

                    {/* Blood Group */}
                    <div>
                        <select
                            id="blood_group"
                            name="blood_group"
                            className='fields'
                            {...register("blood_group", {
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
                        <p className={`${errors.blood_group?.message ? "error" : "hidden"}`}>
                            {errors.blood_group?.message}
                        </p>
                    </div>

                    {/* Date of Birth */}
                    <div>
                        <input
                            type="date"
                            className="fields"
                            id='dob'
                            {...register("date_of_birth", {
                                // valueAsDate : true, the issue of serializaable data on redux
                                required: {
                                    value: true,
                                    message: "Date of Birth Required"
                                },
                                validate: value => value !== "" || "DOB required"

                            })}
                        />
                        <p className={`${errors.date_of_birth?.message ? "error" : "hidden"}`}>
                            {errors.date_of_birth?.message}
                        </p>
                    </div>

                    {/* Email */}
                    <div>
                        <input
                            id='email'
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


                </div>

                <div className='labelsdivTwo'>
                    <label htmlFor=''>Date and Time: </label>
                    <label htmlFor='user'>Made By:</label>
                    <label htmlFor=''>Reffered To : </label>
                    <label htmlFor='depart'>Department:</label>
                    <label htmlFor='doctor'>Doctor:</label>
                    <label htmlFor='City'>City:</label>
                    <label htmlFor='panel'>Panel: </label>
                    <label htmlFor='payment'>Payment:</label>
                </div>

                <div className='fieldsdivTwo'>

                    {/* Date and Time */}
                    <div>
                        <input className='fields' />
                    </div>

                    {/* Made By */}
                    <div>
                        <input
                            id='user'
                            type="text"
                            className="fields"
                            {...register("", {
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

                    {/* Reffered to */}

                    <div>
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

                    <div>
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

                    {/* Doctor */}

                    <div>
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
                        <p className={`${errors.doctor?.message ? "error" : "hidden"}`}>
                            {errors.doctor?.message}
                        </p>
                    </div>

                    {/* City */}
                    <div>
                        <select
                            id="city"
                            name='city'
                            className='fields'
                            {...register("city", {
                                required: {
                                    value: true,
                                    message: "Patient's Category Required"
                                },
                                validate: (value) => value !== "NA" || "Department Required"
                            })}
                        >
                            <option value="NA" defaultValue="NA">NA</option>
                            <option value="Karachi">Karachi</option>
                            <option value="Lahore">Lahore</option>
                            <option value="Peshawar">Peshawar</option>
                            <option value="Quetta">Quetta</option>

                        </select>
                        <p className={`${errors.city?.message ? "error" : "hidden"}`}>
                            {errors.city?.message}
                        </p>
                    </div>

                    {/*  Panel */}
                    <div>
                        <select
                            id="panel"
                            name='panel'
                            className='fields'
                            {...register("panel", {
                                required: {
                                    value: true,
                                    message: "Patient's Category Required"
                                },
                                validate: (value) => value !== "NA" || "Department Required"
                            })}
                        >
                            <option value="NA" defaultValue="NA">NA</option>
                            <option value="PIA">PIA</option>
                            <option value="Jubliee Life">Jubliee Life</option>
                            <option value="Adam jee Insurance">Adam jee Insurance</option>
                            <option value="Railways">Railways</option>

                        </select>
                        <p className={`${errors.panel?.message ? "error" : "hidden"}`}>
                            {errors.panel?.message}
                        </p>
                    </div>

                    {/* Payment */}
                    <div>
                        <select
                            id="payemnt"
                            name='payment'
                            className='fields'
                            {...register("payment", {
                                required: {
                                    value: true,
                                    message: "Patient's Category Required"
                                },
                                validate: (value) => value !== "NA" || "Department Required"
                            })}
                        >
                            <option value="NA" defaultValue="NA">NA</option>
                            <option value="Online">Online</option>
                            <option value="Cash">Cash</option>
                        </select>
                        <p className={`${errors.payment?.message ? "error" : "hidden"}`}>
                            {errors.payment?.message}
                        </p>
                    </div>

                    {/*Submit  */}
                    <div className='submitButton'>
                        <input type='submit'></input>
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