import React from 'react'
import {Input} from './'

const ResumeUploadBtn = () => {
    return (
        <div>
            <div id="uploadContainer" className="transition-all duration-700 ease-in-out">
                {/* <label
                    className=""
                >
                    Upload Resume
                </label> */}
                <Input
                    label="Upload Resume"
                    labelClass="cursor-pointer bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 hover:from-indigo-600 hover:to-pink-600 text-white font-bold py-6 px-12 rounded-full shadow-lg transform hover:scale-105 transition-transform duration-300 inline-block text-xl"
                    required={false}
                    type='file'
                    className='hidden'
                    accept="image/*"
                />
            </div>
        </div>
    )
}

export default ResumeUploadBtn