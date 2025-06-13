import React from 'react'

const Button = ({
    label,
    className = "",
    ...props
}) => {
    return (
        <button
            className={`w-full p-3 bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition ${className}`}
            {...props}
        >
            {label}
        </button>
    )
}

export default Button