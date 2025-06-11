import React from 'react'

const Toaster = ({
    message,
    success = false,
    className = "",
}) => {
    return (
        <div className={`fixed top-6 left-1/2 transform -translate-x-1/2 text-white px-4 py-2 rounded-lg shadow-lg z-50 transition-all duration-300 ${success ? "bg-green-600" : "bg-red-600"} ${className}`}>
            <span>{message}</span>
        </div>
    )
}

export default Toaster