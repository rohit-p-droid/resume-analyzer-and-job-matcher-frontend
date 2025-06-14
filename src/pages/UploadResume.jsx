import React, { useState } from 'react'
import { ResumeDetails, ResumeUploadBtn } from '../components'

const UploadResume = () => {
    const [showResumeDetails, setShowResumeDetails] = useState(false);
    return (
        <div>
            <div className="w-full max-w-4xl mx-auto text-center space-y-10">

                {/* <!-- Section Intro --> */}
                <div className="space-y-3 mt-10">
                    <h1 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
                        Upload Your Resume
                    </h1>
                    <p className="text-gray-600 dark:text-gray-400 text-base md:text-lg max-w-xl mx-auto">
                        This step will extract your resume details to help us match relevant job opportunities. Accepted formats: PDF, PNG, JPG.
                    </p>
                </div>

                {/* <!-- Upload Section --> */}
                <ResumeUploadBtn/>

                {/* <!-- Result Section --> */}
                {showResumeDetails && 
                    <ResumeDetails
                        resumeDetails={{}}                    
                    />
                }
            </div>
        </div>
    )
}

export default UploadResume