    import React, { useRef , useState, useEffect} from 'react'
    import { useForm,} from "react-hook-form"
    import { DevTool } from "@hookform/devtools"
    import { opdDoctors } from '../../../data/Doctors'
    import { useDispatch } from 'react-redux'
    import { addData } from '../../../redux/slices/appointmentData.slice'
    import { useReactToPrint } from "react-to-print"
    import PrintSlip from '../../AppointmentPrintSlip/PrintSlip'
    import Loader from '../../Loading/Loader'
    import { calculateAge } from '../../../utilities/ageCalculator'
    import "./form.css"


    const Form = () => {

        const [loading, setLoading] = useState(false)
        const componentRef = useRef();
        const handlePrint = useReactToPrint({
            content: () => componentRef.current
        });

        const dispatch = useDispatch();
        const { register, handleSubmit, formState, control, setValue, watch, reset} = useForm({
            defaultValues: {
                date: new Date().toLocaleDateString("en-GB"),
                time: new Date().toLocaleTimeString(),
                }
        });
        const { errors, isDirty } = formState;

        // Watch Values
        const watchDOB = watch('date_of_birth')
        const payment_method = watch("payment_method")
       
        console.log(payment_method)

        const timeRef = useRef(new Date());
        const [, setTick] = useState(0);

        // Effects
        useEffect(() => {
            const interval = setInterval(() => {
                timeRef.current = new Date();
                // Update the time field without re-rendering the component
                setValue('time', timeRef.current.toLocaleTimeString());
                // Trigger a re-render every minute
                if (timeRef.current.getSeconds() === 0) {
                    setTick(tick => tick + 1);
                }
            }, 1000);

            return () => clearInterval(interval);
        }, [setValue]);


        useEffect(()=>{
            if(watchDOB){
                const age = calculateAge(watchDOB)
                setValue('age', age)
            }
        }, [watchDOB, setValue])


        // Form Submit Handler
        const onSubmit = data => {
            setLoading(true)
            dispatch(addData(data));
            alert("Data submitted");
            handlePrint();
            reset()
        };

        // Checking for render
        console.log("Haseeb")
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
                        <label htmlFor='age'>Age:</label>
                        <label htmlFor='email'>Email:</label>
                        <label htmlFor='fee'>Fee : </label>
                    </div>

                    <div className='fieldsdivOne'>
                        {/* Category */}
                        <div>
                            <select
                                id="category"
                                className='fields'
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
                                className="fields"
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
                                className="fields"
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

                        {/* Gender */}
                        <div>
                            <select
                                id="gender"
                                className='fields'
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
                                className='fields'
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
                                className="fields"
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
                                className='fields'
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
                                className="fields"
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
                                className="fields age"
                                id='dob'
                                readOnly
                                {...register("age",{
                                    valueAsNumber : true
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
                                className="fields"
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
                                className="fields"
                                id='fee'
                                {...register("fee")}
                            />
                        </div>
                    </div>

                    <div className='labelsdivTwo'>
                        <label htmlFor='date'>Date: </label>
                        <label htmlFor='time'>Time: </label>
                        <label htmlFor='user'>Made By:</label>
                        <label htmlFor='reffer'>Referred To: </label>
                        <label htmlFor='department'>Department:</label>
                        <label htmlFor='doctor'>Doctor:</label>
                        <label htmlFor='city'>City:</label>
                        <label htmlFor='panel'>Panel: </label>
                        <label htmlFor='payment'>Payment:</label>
                        {payment_method == "Online" && (
                        <>
                            <label htmlFor='transaction_id'>Transaction ID:</label>
                            <label className='bank'>Bank or Wallet:</label>
                        </>            
                        )}
             
                    </div>

                    <div className='fieldsdivTwo'>
                        {/* Date */}
                        <div>
                            <input
                                type="text"
                                id='date'
                                className='fields'
                                readOnly
                                {...register("date")}
                                
                            />
                            <p className={errors.date ? "error" : "hidden"}>
                                {errors.date?.message}
                            </p>
                        </div>
                    
                        {/* Time */}
                        <div>
                            <input
                                type="text"
                                id='time'
                                className='fields'
                                readOnly
                                {...register("time")}
                            />
                            <p className={errors.datetime ? "error" : "hidden"}>
                                {errors.datetime?.message}
                            </p>
                        </div>

                        {/* Made By */}
                        <div>
                            <input
                                placeholder='Software User'
                                id='user'
                                type="text"
                                className="fields"
                                {...register("user", {
                                    required: "User Required"
                                })}
                            />
                            <p className={errors.user ? "error" : "hidden"}>
                                {errors.user?.message}
                            </p>
                        </div>

                        {/* Referred to */}
                        <div>
                            <select
                                id="reffer"
                                className='fields'
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
                                className='fields'
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
                                className='fields'
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
                                className='fields'
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
                                className='fields'
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
                                className='fields'
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
                              className='fields' 
                              {...register('transactionId',{
                                required  :{
                                    value : true,
                                    message : "Transaction ID Required"
                                }

                            })} />
                          </div>
                        )}

                        {/* Bank or WAllet */}
                        {payment_method == "Online" && (
                           <div>
                              <input 
                               className='fields' 
                               id='bank'
                               {...register('particular_bank')}
                              />
                            </div>

                        )}

                        {/* Submit */}
                        <div className='submitButton'>
                            <input type='submit' value="Submit" disabled={isDirty? true : false}/> 
                        </div>
                    </div>
                </form>

                <div style={{ display: 'none' }}>
                    <PrintSlip ref={componentRef} />
                </div>

                {/* <DevTool control={control} /> */}
            </>
        )
    }

    export default Form
