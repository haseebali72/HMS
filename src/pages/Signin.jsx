import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import Logo from "../assets/logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faKey, faStaffSnake, faUser } from '@fortawesome/free-solid-svg-icons'
import { signin } from '../firebase/auth.firebase'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { auth } from '../firebase/firebase'
import { RotatingLinesfull } from '../components/Loaders'


const Signin = () => {
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)
    const categories = [
        { value: "admin", name: "Administrator", key: 1 },
        { value: "doctor", name: "Doctor", key: 2 },
        { value: "accountant", name: "Accountant", key: 3 },
        { value: "paramedical", name: "Para-Medical", key: 4 },
    ]

    const form = useForm()
    const { register, handleSubmit, control } = form

    console.log(auth.currentUser)
    const formsubmit = async data => {
        setLoading(true)
        // console.log(data)
        const response = await signin(data)
        if (response.signinSuccess) {
            setLoading(false)
            toast.success("Signed in")
            navigate("/dashboard/opd")
            console.log(auth.currentUser)
        }
        if(response.categoryMismatched){
            setLoading(false)
            toast.error(response.categoryMismatched)
        }
        if(response.invalidCredentialsMessage){
            setLoading(false)
            toast.error(response.invalidCredentialsMessage)
        }
        if(response.ErrorinCatch){
            setLoading(false)
            toast.error(response.ErrorinCatch)
        }
        if(response.noUserName){
            setLoading(false)
            toast.error(response.noUserName)
        }
        
    }

    return (
        loading ? <RotatingLinesfull/> : 
        <>

            <div className=' h-screen flex flex-col justify-center items-center'>
                <div className='bg-slate-200 rounded-md shadow-2xl'>
                    <div className='flex justify-center items-center bg-slate-100 m-1'>
                        <img src={Logo} style={{ width: "16rem" }} />
                    </div>
                    <form onSubmit={handleSubmit(formsubmit)} className='w-80 flex flex-col'>
                        <div className='p-2 mx-2'>
                            <label htmlFor='category' className='bg-blue-600 px-2 rounded-full text-xl'>
                                <FontAwesomeIcon className='' icon={faStaffSnake} />
                            </label>
                            <select id='cateogry' className='rounded' {...register("category", { required: true })}>
                                {categories.map(category => (<option key={category.key} value={category.value}>{category.name}</option>))}
                            </select>
                        </div>
                        <div className='bg-orange-200 p-2 m-2 flex flex-col'>
                            <div>
                                <label htmlFor='category' className='bg-blue-600 p-1 rounded '>
                                    <FontAwesomeIcon icon={faUser} />
                                </label>
                                <input type='text' className='mx-1 p-1 rounded' placeholder='Enter Name' {...register('name', {
                                    required: {
                                        value: true,
                                        message: "Name required"
                                    }
                                })} />
                            </div>
                            <div>
                                <label htmlFor='password' className=''>
                                    <FontAwesomeIcon icon={faKey} />
                                </label>
                                <input type='password' className='mx-1 mt-1 p-1 rounded ' placeholder='Enter Password' {...register('pwd', {
                                    required: {
                                        value: true,
                                        message: "Password required"
                                    }
                                })} />
                            </div>
                        </div>
                        <div className='bg-orange-200 m-2 p-2 flex items-center justify-center'>
                            <input type='submit' value="Log in" className='px-3 py-1 rounded-md shadow-lg bg-blue-500 text-white text-lg cursor-pointer hover:bg-blue-600' />
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Signin