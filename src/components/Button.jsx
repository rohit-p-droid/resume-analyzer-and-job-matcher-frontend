import React from 'react'

const Button = ({
    label,
    children,
    className = "",
    ...props
}) => {
    return (
        <button
            className={`w-full p-3 bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition ${className}`}
            {...props}
        >
            {label} {children}
        </button>
    )
}

export default Button