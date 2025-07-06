import React from 'react'
import { Button } from './'
import { IoInformationSharp } from "react-icons/io5";
import { ImCross } from "react-icons/im";
import { SiTicktick } from "react-icons/si";
import { FaTrashAlt } from "react-icons/fa";





const ConfirmationPopup = ({ type = "info", title, message, onConfirm, onCancel }) => {
    let bg = "bg-blue-600/90";
    if (type == "success") {
        bg = "bg-green-600/90";
    } else if (type == "error" || type == "remove") {
        bg = "bg-red-600/90"
    }

    return (
        <>
            {/* <!-- Modal Overlay --> */}
            <div className="fixed inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center z-50">
                {/* <!-- Modal Content --> */}
                <div className="relative bg-white/20 dark:bg-gray-900/20 backdrop-blur-lg border border-white/30 dark:border-gray-700/30 rounded-2xl shadow-2xl p-8 w-[90%] max-w-md text-center">

                    {/* <!-- Icon --> */}
                    <div className={`w-16 h-16 mx-auto mb-5 flex items-center justify-center rounded-full text-white text-3xl shadow-lg ${bg}`}>
                        {type == "info" && <IoInformationSharp />}
                        {type == "success" && <SiTicktick />}
                        {type == "error" && <ImCross />}
                        {type == "remove" && <FaTrashAlt />}
                    </div>

                    {/* <!-- Heading --> */}
                    <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-3">{title}</h2>

                    {/* <!-- Message --> */}
                    <p className="text-base text-gray-800 dark:text-gray-300 mb-6 leading-relaxed">
                        {message}
                    </p>

                    {/* <!-- Buttons --> */}
                    <div className="flex justify-center gap-4">
                        <Button
                            label="Confirm"
                            className={`px-6 py-2 rounded-full text-white font-medium shadow-lg transition duration-300 ${bg}`}
                            onClick={onConfirm}
                        />

                        <Button
                            label="Cancel"
                            className='bg-gray-500 hover:bg-gray-600'
                            onClick={onCancel}
                        />
                    </div>
                </div>
            </div>


        </>
    )
}

export default ConfirmationPopup