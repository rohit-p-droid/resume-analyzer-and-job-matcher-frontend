import React, { useEffect, useState } from 'react'
import { apiRequest } from '../utils/apiRequest';
import { Link, useNavigate } from 'react-router-dom';
import { Button, ConfirmationPopup } from './';
import { FaTrashAlt } from "react-icons/fa";

const ResumeList = () => {
    const [resumeList, setResumeList] = useState([]);
    const [deleteResumeId, setDeleteResumeId] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        getResumeList();
    }, [])

    const getResumeList = async () => {
        // get list of all resumes
        const res = await apiRequest({
            url: "/resume/",
            method: "GET"
        })
        setResumeList(res.data);
    }

    const deleteResume = async () => {
        const res = await apiRequest({
            url: `/resume/delete/${deleteResumeId}`,
            method: "DELETE"
        })
        setResumeList(prev => prev.filter(resume => resume._id !== deleteResumeId))
        setDeleteResumeId("")
    }

    return (
        <>
            <div className="max-w-4xl mx-auto">
                {/* Page Heading */}
                <div className="flex justify-between items-center m-5">
                    <div>
                        <h1 className="text-4xl font-extrabold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
                            Uploaded Resumes
                        </h1>
                        <p className="text-gray-600 dark:text-gray-400 mt-1">List of all uploaded resumes</p>
                    </div>
                    <Link to="/resume-analyzer/upload" className="inline-block px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg shadow transition">
                        Upload Resume
                    </Link>
                </div>

                {/* Resume Cards */}
                <div className="space-y-5 pt-5">
                    {resumeList.length > 0 ? (
                        resumeList.map((resume) => (
                            <div
                                key={resume._id}
                                className="bg-white dark:bg-gray-800 shadow rounded-lg p-6 flex justify-between items-center hover:shadow-lg transition"
                            >
                                <div>
                                    <h2 className="text-xl font-semibold">{resume.name}</h2>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">ID: {resume._id}</p>
                                    <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">
                                        Uploaded on:{" "}
                                        {new Date(resume.createdAt).toLocaleDateString("en-US", {
                                            year: "numeric",
                                            month: "long",
                                            day: "numeric",
                                        })}
                                    </p>
                                </div>

                                <div className='flex gap-2'>
                                    <div className="w-15">
                                        <Button
                                            label="View"
                                            className="text-sm px-4 py-2 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white transition"
                                            onClick={() => navigate(`/resume-analyzer/view/${resume._id}`)}
                                        />
                                    </div>
                                    <div className="w-20">
                                        <Button
                                            label="Remove"
                                            className="text-sm px-4 py-2 rounded-full bg-red-600 hover:bg-red-700 text-white transition"
                                            onClick={() => setDeleteResumeId(resume._id)}
                                        />
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="text-center text-gray-500 dark:text-gray-400 py-10">
                            <p className="text-lg font-semibold">No resumes found</p>
                            <p className="text-sm mt-2">You haven't uploaded any resumes yet.</p>
                        </div>
                    )}
                </div>

                {deleteResumeId && <ConfirmationPopup
                    type='remove'
                    title="Remove resume details"
                    message="Are you sure you want to remove this resume? This action cannot be undone."
                    onConfirm={deleteResume}
                    onCancel={() => setDeleteResumeId("")}
                />}
            </div>
        </>
    )
}

export default ResumeList