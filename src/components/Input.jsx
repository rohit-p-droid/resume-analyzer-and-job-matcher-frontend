import React, { useId } from 'react'

const Input = ({
    label,
    type = "text",
    className = "",
    validationError="",
    ...props
}, ref) => {
    const id = useId();
    return (
        <>
            <div>
                {label && <label htmlFor={id} className="block text-sm font-medium text-gray-700 dark:text-gray-300">{label}</label>}
                <input
                    type={type}
                    id={id}
                    ref={ref}
                    className={`mt-1 block w-full px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
                    {...props}
                />
                {validationError && <span className='text-red-500'>{validationError}</span>}
            </div>
        </>
    )
}

export default Input