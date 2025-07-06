import React, { useId, useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const PasswordInput = ({
    label,
    type = "password",
    className,
    validationError="",
    required=true,
    ...props
}, ref) => {
    const [visible, setVisible] = useState(false);
    const id = useId();
    return (
        <div>
            {label && <label htmlFor={id} className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                {label}&nbsp;{required && <span className='text-red-600'>*</span>}
            </label>}
            <div className="relative">
                <input
                    type={visible ? "text" : "password"}
                    id={id}
                    className="mt-1 block w-full px-4 py-2 pr-10 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    {...props}
                />
                {validationError && <span className='text-red-500'>{validationError}</span>}
                <button
                    type="button"
                    onClick={() => setVisible(!visible)}
                    className="absolute inset-y-0 right-2 flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-500 focus:outline-none"
                >
                    {visible ? <FaEye /> : <FaEyeSlash />}
                </button>
            </div>
        </div>
    )
}

export default PasswordInput