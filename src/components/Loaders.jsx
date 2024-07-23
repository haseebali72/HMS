import React from 'react'
import { RotatingLines } from 'react-loader-spinner'

const RotatingLinesfull = () => {
    return (
        <>
            <div className='bg-black bg-opacity-50 flex items-center justify-center fixed left-0 right-0 bottom-0 top-0'>
                <div>
                    <RotatingLines
                        visible={true}
                        height="96"
                        width="96"
                        color="red"
                        strokeWidth="5"
                        animationDuration="0.75"
                        ariaLabel="rotating-lines-loading"
                        wrapperStyle={{}}
                        wrapperClass=""
                    />
                </div>

            </div>

        </>
    )
}


export {RotatingLinesfull}