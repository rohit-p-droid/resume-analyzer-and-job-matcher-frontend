import React, { useState } from 'react'
import { ResumeDetails, ResumeUploadBtn, Toaster, ConfirmationPopup, Button } from '../components'
import { apiRequest } from '../utils/apiRequest';
import Loader from '../components/Loader';


const UploadResume = () => {
    const [showResumeDetails, setShowResumeDetails] = useState(false);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [resumeDetails, setResumeDetails] = useState({});
    const [isConfirm, setIsConfirm] = useState(false);
    const [resumeFile, setResumeFile] = useState(null);
    const [isDataSaved, setIsDataSaved] = useState(false);

    const handleFileChange = async (e) => {
        setError("");
        const file = e.target.files[0];
        setResumeFile(file);
        if (resumeDetails && Object.keys(resumeDetails).length > 0 && !isDataSaved) {
            setIsConfirm(true);
        } else {
            getResumeDetails(file);
        }
    }

    const getResumeDetails = async (file = resumeFile) => {
        if (file) {
            setLoading(true);
            const validFileTypes = ['image/png', 'image/jpg', 'image/jpeg'];
            if (!validFileTypes.includes(file.type)) {
                setError("Only PNG, JPG, or JPEG files are allowed.");
                setLoading(false);
                return;
            }
            const formData = new FormData();
            formData.append('resume', file);
            const res = await apiRequest({
                url: "/resume/upload",
                method: "POST",
                data: formData
            })
            if (res.statusCode == 200) {
                setLoading(false);
                if (res.data.valid) {
                    setResumeDetails(res.data)
                    setShowResumeDetails(true)
                    setIsDataSaved(false);
                } else {
                    setError(`Invalid resume: ${res.data.wrong_resume}`);
                }
                return;
            }
            setError(res.message)
            setLoading(false);
        }
    }

    const confirmResumeSave = () => {
        getResumeDetails();
        saveResumeDetailsData();
        setIsConfirm(false);
    }

    const saveResumeDetailsData = async () => {
        if (resumeDetails) {
            setLoading(true);
            const res = await apiRequest({
                url: "/resume/save",
                method: "POST",
                data: {
                    resumeDetails
                }
            })
        }
        setIsDataSaved(true);
        setLoading(false);
    }



    return (
        <div>
            {error && <Toaster success={false} message={error} />}
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
                <ResumeUploadBtn
                    onChange={handleFileChange}
                />
            </div>
            {/* <!-- Result Section --> */}
            {showResumeDetails &&
                <div className='pt-5'>
                    <h1 className="text-4xl font-bold text-center text-blue-600 dark:text-blue-400">Extracted Resume Details</h1>

                    <ResumeDetails
                        resumeDetails={resumeDetails}
                    />
                </div>
            }

            {/* save resume details button */}
            {Object.keys(resumeDetails).length > 0 && !isDataSaved &&
                <div className="w-full flex items-center justify-center">
                    <div className='w-70 p-10'>
                        <Button
                            label="Save Resume Details"
                            className='bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white text-lg font-semibold rounded-xl shadow-lg transition-all duration-300'
                            onClick={saveResumeDetailsData}
                        />
                    </div>
                </div>}

            {isConfirm && <ConfirmationPopup
                type='info'
                title="Save Resume Data"
                message="Do you want to save the data from your previous resume?"
                onCancel={() => {
                    setIsConfirm(false)
                    getResumeDetails();
                }}
                onConfirm={confirmResumeSave}
            />}

            {/* loader */}
            {loading && <Loader size={2} />}
        </div>
    )
}

export default UploadResume