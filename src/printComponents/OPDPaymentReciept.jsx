import React from 'react'

const OPDPaymentReciept = React.forwardRef((prop, ref) => {
    return (
        <>
            <div ref={ref}>
                <header className='flex flex-col'>
                    <div className='flex justify-between m-4'>
                        <div>
                            Galata HMS <sup>TM</sup>
                        </div>
                        <div>
                            <address>
                                IT Tower, H-91<br></br>
                                SECTOR-63, NOIDA-201301<br></br>
                                HELPLINE: 923170592934, 76984531<br></br>
                                helpmyhms@gmai.com<br></br>
                            </address>
                        </div>
                    </div>
                    <div className='text-center'>
                        <hr style={{ borderColor: '#000000' }} />
                        <h2 className='my-2'>OPD Payment Reciept</h2>
                        <hr style={{ borderColor: '#000000' }} />
                    </div>
                </header>
                <main  >
                    <div className='flex flex-row justify-between'>
                        <div className='ml-10 mt-2 leading-loose'>
                            <p>Q.No : 2 / Reciept No. : 7</p>
                            <p>UHID : U-7/2024 / OPD ID. 7</p>
                            <p>Name : Mr.Syed Haseeb Ali</p>
                            <p>Age/ DOB : 24Y 4M 3D / 12 May,2000</p>
                            <p>Gen/Mobile No. : Male/ 03170205929</p>
                            <p className='w-56'>Address : 15/A, Survey no.393, Millat Town, Malir Halt, KHI  </p>
                        </div>
                        <div className='mr-20 mt-2 leading-loose'>
                            <p>Date :15-Jan-2024 04:03:06</p>
                            <p>TPA/ Payment_method : None /Cash</p>
                            <p>Department : Generel Medicine</p>
                            <p>Doctor : Dr Habib Ismail</p>
                            <p>Made by : Haseeb Ali</p>
                        </div>
                    </div>
                    <div className='w-[90%] m-auto '>
                        <table className='border-y w-full mt-1'>
                            <thead className='border-y'>
                                <tr className=''>
                                    <th className='w-[10%]'>S No.</th>
                                    <th className='w-[50%]'>Particular</th>
                                    <th className='w-[20%]'>Mode</th>
                                    <th className='w-[20%]'>Amount(Rs)</th>
                                </tr>
                            </thead>
                            <tbody className='text-center'>
                                <tr className='h-20 border-y'>
                                    <td className=''>1</td>
                                    <td className='border-x'>Consultation Fee</td>
                                    <td className='border-x'>Cash</td>
                                    <td>500.00</td>
                                </tr>
                                <tr className='h-10 border-y'>
                                    <td colSpan="3" className='border-r text-end'>Paid Amount(Rupees Five Hundred Only)</td>
                                    <td>500.00</td>
                                </tr>
                            </tbody>

                            <tfoot>
                                <tr>
                                    <td colspan="4" className='text-start font-medium'>Recieved with Thanks <span className='font-bold'>Rs.500/- </span>from Mr Lokesh</td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>

                </main>
            </div>

        </>
    )
})

export default OPDPaymentReciept