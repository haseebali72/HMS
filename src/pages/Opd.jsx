import { faSearch, faSheetPlastic } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useForm } from 'react-hook-form'

const Opd = () => {
    const entries = [
        {
            serial: 1,
            queue: 1,
            opdId: "OP-6",
            patient_name: "Haseeb Ali",
            depart: "Skin Specialist",
            doc: "Shmaila Taqi",
            type: "Gen",
            fee: "500 Rs",
            mode: "Cash",
            process: <><button><FontAwesomeIcon icon={faSheetPlastic} /></button></> 
        }
    ]
    const opdDoctors = [
        { key: 0, name: "Dr Ismail Habib", value: "Dr Ismail Habib" },
        { key: 1, name: "Dr Isra Shehbaz", value: "Dr Isra Shehbaz" },
        { key: 2, name: "Dr Samia Rehman", value: "Dr Samia Rehman" },
        { key: 3, name: "Dr Habib Asim", value: "Dr Habib Asim" },
        { key: 4, name: "Dr Azhar Javed", value: "Dr Azhar Javed" },
        { key: 6, name: "Dr Kaleem Khan", value: "Dr Kaleem Khan" },
    ]
    const form = useForm()
    const { register, handleSubmit, control, watch, formState: { errors } } = form
    const payment_method = watch("payment_method")

    const formsubmit = data =>{
        console.log(data)
    }
    return (
        <>
            <div className='m-2'>

                {/* Search Div */}
                <div className='bg-[#017f82] rounded my-1'>
                    <input type='search' placeholder='Enter UHID or CNIC' className='m-1 px-2 h-8 text-[1rem] rounded appearance-none' />
                    <button className='-m-6 '><FontAwesomeIcon icon={faSearch} /></button>
                </div>

                {/* Form Div */}
                <form className='grid grid-cols-12 bg-[#f1f1f1] rounded my-2' onSubmit={handleSubmit(formsubmit)}>

                    {/* Grid column one */}
                    <div className='flex flex-col m-4 col-span-2'>
                        <label htmlFor='category' className='m-1'>Category: </label>
                        <label htmlFor='name' className='m-1'>Name:</label>
                        <label htmlFor='mobile' className='m-1'>Mobile:</label>
                        <label htmlFor='CNIC' className='m-1'>CNIC:</label>
                        <label htmlFor='gender' className='m-1'>Gender:</label>
                        <label htmlFor='marital_status' className='m-1'>Marital Status:</label>
                        <label htmlFor='address' className='m-1'>Address:</label>
                        <label htmlFor='blood_group' className='m-1'>Blood Group:</label>
                        <label htmlFor='dob' className='m-1'>Date of Birth:</label>
                        <label htmlFor='age' className='m-1'>Age:</label>
                        <label htmlFor='email' className='m-1'>Email:</label>
                        <label htmlFor='fee' className='m-1'>Fee : </label>
                    </div>


                    {/* Grid column two */}

                    <div className='m-4 col-span-4'>
                        {/* Category */}
                        <div>
                            <select
                                id="category"
                                className='m-1 rounded-sm border-[.1rem] transition-all ease-in-out border-gray-200'
                                defaultValue="NA"
                                {...register("category", {
                                    required: "Patient's Category Required",
                                    validate: value => value !== "NA" || "Category Required"
                                })}
                            >
                                <option value="NA">NA</option>
                                <option value="Benificiary">Benificiary</option>
                                <option value="Private">Private</option>
                            </select>
                            <p className={errors.category ? "error" : "hidden"}>
                                {errors.category?.message}
                            </p>
                        </div>

                        {/* Name */}
                        <div>
                            <input
                                type="text"
                                placeholder="Patient's Name"
                                className='m-1 rounded-sm border-[.1rem] transition-all ease-in-out border-gray-200'
                                id='name'
                                {...register("name", {
                                    required: "Patient's Name Required"
                                })}
                            />
                            <p className={errors.name ? "error" : "hidden"}>
                                {errors.name?.message}
                            </p>
                        </div>

                        {/* Phone Number */}
                        <div>
                            <input
                                type="text"
                                id='mobile'
                                placeholder="Patient's Phone Number"
                                className='m-1 rounded-sm border-[.1rem] transition-all ease-in-out border-gray-200'
                                {...register("mobile_number", {
                                    required: "Patient's Mobile Number Required",
                                    pattern: {
                                        value: /^03\d{9}$/,
                                        message: "Invalid Number"
                                    }
                                })}
                            />
                            <p className={errors.mobile_number ? "error" : "hidden"}>
                                {errors.mobile_number?.message}
                            </p>
                        </div>

                        {/* CNIC */}
                        <div>
                            <input
                                type="text"
                                placeholder="Patient's CNIC"
                                className='m-1 rounded-sm border-[.1rem] transition-all ease-in-out border-gray-200'
                                id='CNIC'
                                {...register("CNIC", {
                                    required: "Patient's CNIC Required"
                                })}
                            />
                            <p className={errors.CNIC ? "error" : "hidden"}>
                                {errors.CNIC?.message}
                            </p>
                        </div>

                        {/* Gender */}
                        <div>
                            <select
                                id="gender"
                                className='m-1 rounded-sm border-[.1rem] transition-all ease-in-out border-gray-200'
                                defaultValue="NA"
                                {...register("gender", {
                                    required: "Gender Required",
                                    validate: value => value !== "NA" || "Gender Required"
                                })}
                            >
                                <option value="NA">NA</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>
                            <p className={errors.gender ? "error" : "hidden"}>
                                {errors.gender?.message}
                            </p>
                        </div>

                        {/* Marital Status */}
                        <div>
                            <select
                                id="marital_status"
                                className='m-1 rounded-sm border-[.1rem] transition-all ease-in-out border-gray-200'
                                defaultValue="NA"
                                {...register("marital_status", {
                                    required: "Marital Status Required",
                                    validate: value => value !== "NA" || "Marital Status Required"
                                })}
                            >
                                <option value="NA">NA</option>
                                <option value="single">Single</option>
                                <option value="married">Married</option>
                                <option value="widowed">Widowed</option>
                                <option value="divorced">Divorced</option>
                            </select>
                            <p className={errors.marital_status ? "error" : "hidden"}>
                                {errors.marital_status?.message}
                            </p>
                        </div>

                        {/* Address */}
                        <div>
                            <input
                                type="text"
                                placeholder="Patient's Home Address"
                                id='address'
                                className='m-1 rounded-sm border-[.1rem] transition-all ease-in-out border-gray-200'
                                {...register("address", {
                                    required: "Address Required"
                                })}
                            />
                            <p className={errors.address ? "error" : "hidden"}>
                                {errors.address?.message}
                            </p>
                        </div>

                        {/* Blood Group */}
                        <div>
                            <select
                                id="blood_group"
                                className='m-1 rounded-sm border-[.1rem] transition-all ease-in-out border-gray-200'
                                defaultValue="NA"
                                {...register("blood_group", {
                                    required: "Blood Group Required",
                                    validate: value => value !== "NA" || "Blood Group Required"
                                })}
                            >
                                <option value="NA">NA</option>
                                <option value="A+">A+</option>
                                <option value="A-">A-</option>
                                <option value="B+">B+</option>
                            </select>
                            <p className={errors.blood_group ? "error" : "hidden"}>
                                {errors.blood_group?.message}
                            </p>
                        </div>

                        {/* Date of Birth */}
                        <div>
                            <input
                                type="date"
                                className='m-1 rounded-sm border-[.1rem] transition-all ease-in-out border-gray-200'
                                max={new Date().toISOString().split("T")[0]}
                                id='dob'
                                {...register("date_of_birth", {
                                    required: "Date of Birth Required",
                                    validate: value => value !== "" || "DOB Required",
                                })}
                            />
                            <p className={errors.date_of_birth ? "error" : "hidden"}>
                                {errors.date_of_birth?.message}
                            </p>
                        </div>

                        {/* Age */}

                        <div>
                            <input
                                placeholder="Patient's Age"
                                type="number"
                                className='m-1 rounded-sm border-[.1rem] transition-all ease-in-out border-gray-200'
                                id='dob'
                                readOnly
                                {...register("age", {
                                    valueAsNumber: true
                                }

                                )}
                            />
                            <span>Years</span>
                        </div>

                        {/* Email */}
                        <div>
                            <input
                                id='email'
                                placeholder="Patient's Email"
                                type="email"
                                className='m-1 rounded-sm border-[.1rem] transition-all ease-in-out border-gray-200'
                                {...register("email", {
                                    required: "Email Required",
                                    pattern: {
                                        value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                                        message: "Invalid Email"
                                    }
                                })}
                            />
                            <p className={errors.email ? "error" : "hidden"}>
                                {errors.email?.message}
                            </p>
                        </div>

                        {/* Fee */}
                        <div>
                            <input
                                placeholder="Fee"
                                type="number"
                                className='m-1 rounded-sm border-[.1rem] transition-all ease-in-out border-gray-200'
                                id='fee'
                                {...register("fee")}
                            />
                        </div>
                    </div>

                    {/* Grid column three */}

                    <div className='flex flex-col m-4 col-span-2'>
                        <label htmlFor='date' className='my-1'>Date: </label>
                        <label htmlFor='time' className='m-1'>Time: </label>
                        <label htmlFor='user' className='m-1'>Made By:</label>
                        <label htmlFor='reffer' className='m-1'>Referred To: </label>
                        <label htmlFor='department' className='m-1'>Department:</label>
                        <label htmlFor='doctor' className='m-1'>Doctor:</label>
                        <label htmlFor='city' className='m-1'>City:</label>
                        <label htmlFor='panel' className='m-1'>Panel: </label>
                        <label htmlFor='payment' className='m-1'>Payment:</label>
                        {payment_method == "Online" && (
                            <>
                                <label htmlFor='transaction_id' className='m-1'>Transaction ID:</label>
                                <label className='m-1'>Bank or Wallet:</label>
                            </>
                        )}

                    </div>

                    {/* Grid column four */}

                    <div className='m-4 col-span-4'>
                        {/* Date */}
                        <div>
                            <input
                                type="text"
                                id='date'
                                className='m-1 rounded-sm border-[.1rem] transition-all ease-in-out border-gray-200'
                                readOnly
                                {...register("registrationDate")}

                            />
                            <p className={errors.registrationDate ? "error" : "hidden"}>
                                {errors.registrationDate?.message}
                            </p>
                        </div>

                        {/* Time */}
                        <div>
                            <input
                                type="text"
                                id='time'
                                className='m-1 rounded-sm border-[.1rem] transition-all ease-in-out border-gray-200'
                                readOnly
                                {...register("registrationTime")}
                            />
                            <p className={errors.registrationTime ? "error" : "hidden"}>
                                {errors.registrationTime?.message}
                            </p>
                        </div>

                        {/* Made By */}
                        <div>
                            <input
                                placeholder='Software User'
                                id='user'
                                type="text"
                                readOnly
                                className='m-1 rounded-sm border-[.1rem] transition-all ease-in-out border-gray-200'
                                {...register("created_by", {
                                    required: "User Required"
                                })}
                            />
                            <p className={errors.created_by ? "error" : "hidden"}>
                                {errors.created_by?.message}
                            </p>
                        </div>

                        {/* Referred to */}
                        <div>
                            <select
                                id="reffer"
                                className='m-1 rounded-sm border-[.1rem] transition-all ease-in-out border-gray-200'
                                defaultValue="NA"
                                {...register("reffer", {
                                    required: "Referred Required",
                                    validate: value => value !== "NA" || "Referred Required"
                                })}
                            >
                                <option value="NA">NA</option>
                                <option value="Chronic OPD">Chronic OPD</option>
                                <option value="Emergency">Emergency</option>
                            </select>
                            <p className={errors.reffer ? "error" : "hidden"}>
                                {errors.reffer?.message}
                            </p>
                        </div>

                        {/* Department */}
                        <div>
                            <select
                                id="department"
                                className='m-1 rounded-sm border-[.1rem] transition-all ease-in-out border-gray-200'
                                defaultValue="NA"
                                {...register("department", {
                                    required: "Department Required",
                                    validate: value => value !== "NA" || "Department Required"
                                })}
                            >
                                <option value="NA">NA</option>
                                <option value="GENERAL_MEDICINE">GENERAL MEDICINE</option>
                            </select>
                            <p className={errors.department ? "error" : "hidden"}>
                                {errors.department?.message}
                            </p>
                        </div>

                        {/* Doctor */}
                        <div>
                            <select
                                id="doctor"
                                className='m-1 rounded-sm border-[.1rem] transition-all ease-in-out border-gray-200'
                                {...register("doctor", {
                                    required: "Doctor Required",
                                    validate: value => value !== "NA" || "Doctor Required"
                                })}
                            >
                                <option value="NA">NA</option>
                                {opdDoctors.map(doc => (
                                    <option key={doc.key} value={doc.value}>{doc.name}</option>
                                ))}
                            </select>
                            <p className={errors.doctor ? "error" : "hidden"}>
                                {errors.doctor?.message}
                            </p>
                        </div>

                        {/* City */}
                        <div>
                            <select
                                id="city"
                                className='m-1 rounded-sm border-[.1rem] transition-all ease-in-out border-gray-200'
                                defaultValue="NA"
                                {...register("city", {
                                    required: "City Required",
                                    validate: value => value !== "NA" || "City Required"
                                })}
                            >
                                <option value="NA">NA</option>
                                <option value="Karachi">Karachi</option>
                                <option value="Lahore">Lahore</option>
                                <option value="Peshawar">Peshawar</option>
                                <option value="Quetta">Quetta</option>
                            </select>
                            <p className={errors.city ? "error" : "hidden"}>
                                {errors.city?.message}
                            </p>
                        </div>

                        {/* Panel */}
                        <div>
                            <select
                                id="panel"
                                className='m-1 rounded-sm border-[.1rem] transition-all ease-in-out border-gray-200'
                                defaultValue="NA"
                                {...register("panel", {
                                    required: "Panel Required",
                                    validate: value => value !== "NA" || "Panel Required"
                                })}
                            >
                                <option value="NA">NA</option>
                                <option value="PIA">PIA</option>
                                <option value="Jubliee Life">Jubliee Life</option>
                                <option value="Adam jee Insurance">Adam jee Insurance</option>
                                <option value="Railways">Railways</option>
                            </select>
                            <p className={errors.panel ? "error" : "hidden"}>
                                {errors.panel?.message}
                            </p>
                        </div>

                        {/* Payment */}
                        <div>
                            <select
                                id="payment"
                                className='m-1 rounded-sm border-[.1rem] transition-all ease-in-out border-gray-200'
                                defaultValue="NA"
                                {...register("payment_method", {
                                    required: "Payment Method Required",
                                    validate: value => value !== "NA" || "Payment Method Required"
                                })}
                            >
                                <option value="NA">NA</option>
                                <option value="Online">Online</option>
                                <option value="Cash">Cash</option>
                            </select>
                            <p className={errors.payment_method ? "error" : "hidden"}>
                                {errors.payment_method?.message}
                            </p>
                        </div>

                        {/* Transaction Id*/}
                        {payment_method == "Online" && (
                            <div>
                                <input
                                    id='transaction_id'
                                    className='m-1 rounded-sm border-[.1rem] transition-all ease-in-out border-gray-200'
                                    {...register('transactionId', {
                                        required: {
                                            value: true,
                                            message: "Transaction ID Required"
                                        }

                                    })} />
                            </div>
                        )}

                        {/* Bank or WAllet */}
                        {payment_method == "Online" && (
                            <div>
                                <input
                                    className='m-1 rounded-sm border-[.1rem] transition-all ease-in-out border-gray-200'
                                    id='bank'
                                    {...register('particular_bank')}
                                />
                            </div>

                        )}

                        {/* Submit */}
                        <div className='submitButton'>
                            <input type='submit' value="Register" className='m-1 px-2 py-1 rounded shadow-xl cursor-pointer hover:bg-blue-700 tranistion-all duration-200 ease-in-out bg-blue-500 text-white font-thin' />
                        </div>
                    </div>
                </form>

                {/* Table Div */}
                <div>
                    <div>
                        <button>Copy</button>
                        <button>CSV</button>
                        <button>PDF</button>
                    </div>

                    <div className='m-1'>
                        <table className='table w-full'>
                            <tr className='text-center'>
                                <th>S.No</th>
                                <th>Queue</th>
                                <th>OPD ID</th>
                                <th>Patient Name</th>
                                <th>Department</th>
                                <th>Doctor</th>
                                <th>Type</th>
                                <th>Fee</th>
                                <th>Mode</th>
                                <th>Process</th>
                            </tr>
                            <tr className='text-center'>
                                {entries.map(entry => (
                                    <>
                                        <td >{entry.serial}</td>
                                        <td>{entry.queue}</td>
                                        <td>{entry.opdId}</td>
                                        <td>{entry.patient_name}</td>
                                        <td>{entry.depart}</td>
                                        <td>{entry.doc}</td>
                                        <td>{entry.type}</td>
                                        <td>{entry.fee}</td>
                                        <td>{entry.mode}</td>
                                        <td>{entry.process}</td>
                                    </>
                                ))}
                            </tr>
                        </table>

                    </div>

                </div>
            </div>
        </>
    )
}

export default Opd