import React from 'react'

const Loader = ({ size = 16, color = "border-blue-500" }) => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm">
            <div className='flex items-center justify-center'>
                <div
                    // className={`w-${size} h-${size} border-4 border-t-transparent rounded-full animate-spin ${color}`}
                    className='w-24 h-24 border-[10px] border-gray-300 dark:border-gray-800 border-t-blue-600 dark:border-t-blue-400 rounded-full animate-spin'
                    role='status'
                ></div>
            </div>
        </div>
    )
}

export default Loader