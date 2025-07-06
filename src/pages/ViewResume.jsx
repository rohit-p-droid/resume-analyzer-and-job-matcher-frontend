import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Button, ResumeDetails, Input } from '../components';
import { apiRequest } from '../utils/apiRequest';
import { FaEdit } from "react-icons/fa";

const ViewResume = () => {

    const { resumeId } = useParams();
    const [resumeDetails, setResumeDetails] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const [editedTitle, setEditedTitle] = useState("");


    useEffect(() => {
        getResumeDetails();
    }, [])

    const getResumeDetails = async () => {
        const res = await apiRequest({
            url: `/resume/${resumeId}`,
            method: "GET"
        })
        setResumeDetails(res.data)
        setEditedTitle(res.data?.name)
    }

    const handleEditResumeTitle = async () => {
        const res = await apiRequest({
            url: `/resume/edit-name/${resumeId}`,
            method: "PUT",
            data: {
                name: editedTitle
            }
        })

        if(res.statusCode == 200) {
            setResumeDetails({ ...resumeDetails, name: editedTitle });
        }
        setIsEditing(false);
    }


    return (
        <>
            <div className="max-w-5xl mx-auto">
                {/* Header */}
                <div className="text-center p-5">
                    <h1
                        className="text-5xl font-extrabold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
                        Resume Details
                    </h1>
                </div>

                {/* Resume Title with Edit Button */}
                <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 shadow flex items-center justify-between ml-19 mr-9 mt-10">
                    <div>
                        <h2 className="text-sm font-medium text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">Resume
                            Title</h2>
                        {!isEditing ? (
                            <p className="text-xl pt-1 font-semibold text-gray-900 dark:text-white">{resumeDetails?.name}</p>
                        ) : (
                            <>
                                <div className="flex gap-4 pt-4">
                                    <Input
                                        type="text"
                                        className="flex-grow p-2 text-gray-800 dark:text-white bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded"
                                        style={{ width: 'auto' }}
                                        value={editedTitle}
                                        onChange={(e) => setEditedTitle(e.target.value)}
                                    />
                                    <Button
                                        label="Save"
                                        className="bg-indigo-600 text-white rounded hover:bg-indigo-700"
                                        onClick={handleEditResumeTitle}
                                    />
                                    <Button
                                        label="Cancel"
                                        className="bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-white rounded hover:bg-gray-400 dark:hover:bg-gray-600"
                                        onClick={() => setIsEditing(false)}
                                    />

                                </div>
                            </>
                        )}
                    </div>
                    <div>
                        {!isEditing && <Button
                            className='bg-transparent hover:bg-transparent'
                            onClick={() => setIsEditing(true)}
                        >
                            <FaEdit
                                size={28} // Increased icon size
                                className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition"
                            />
                        </Button>}
                    </div>
                </div >

                {/* resume dettailed information */}
                {resumeDetails && <ResumeDetails resumeDetails={resumeDetails.resumeDetails} />}

            </div >
        </>
    )
}

export default ViewResume