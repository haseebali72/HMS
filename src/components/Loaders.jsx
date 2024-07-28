import React from 'react'
import { DNA, RotatingLines } from 'react-loader-spinner'

const RotatingLinesfull = () => {
    return (
        <>
            <div className='flex h-screen justify-center items-center bg-slate-500 opacity-50'>
                <RotatingLines
                    visible={true}
                    color="red"
                    strokeWidth="3"
                    strokeColor='#017f82'
                    animationDuration="0.75"
                    ariaLabel="rotating-lines-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                />
            </div>

        </>
    )
}

const DNALoading = () => {
    return(
        <>
            <DNA
                visible={true}
                height="80"
                width="80"
                ariaLabel="dna-loading"
                wrapperStyle={{}}
                wrapperClass="dna-wrapper"
            />
        </>
    )
}
export { RotatingLinesfull }
export { DNALoading }