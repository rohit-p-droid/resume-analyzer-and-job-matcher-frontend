import React from 'react';

const ResumeDetails = ({ resumeDetails }) => {

    return (
        <div className="max-w-6xl mx-auto pl-20 px-6 py-10 space-y-5">
            
            {/* Personal Info */}
            {resumeDetails.personalInformation && (
                <section className="bg-white dark:bg-gray-800 rounded-xl shadow p-6">
                    <h2 className="text-xl font-semibold border-b pb-2 mb-4">Personal Information</h2>
                    <p><strong>Name:</strong> {resumeDetails.personalInformation.name || "Not provided"}</p>
                    <p><strong>Email:</strong> {resumeDetails.personalInformation.email || "Not provided"}</p>
                    <p><strong>Phone:</strong> {resumeDetails.personalInformation.phone || "Not provided"}</p>
                    <p><strong>Location:</strong> {resumeDetails.personalInformation.location || "Not provided"}</p>
                </section>
            )}

            {/* Skills */}
            {resumeDetails.skills && resumeDetails.skills.technical && (
                <section className="bg-white dark:bg-gray-800 rounded-xl shadow p-6">
                    <h2 className="text-xl font-semibold border-b pb-2 mb-4">Technical Skills</h2>
                    <div className="flex flex-wrap gap-2">
                        {resumeDetails.skills.technical.map((skill, index) => (
                            <span key={index} className="px-3 py-1 bg-blue-100 dark:bg-blue-600 text-sm rounded-full">{skill}</span>
                        ))}
                    </div>
                </section>
            )}

            {/* Work Experience */}
            {resumeDetails.workExperience && (
                <section className="bg-white dark:bg-gray-800 rounded-xl shadow p-6">
                    <h2 className="text-xl font-semibold border-b pb-2 mb-4">Work Experience</h2>
                    <div className="space-y-6">
                        {resumeDetails.workExperience.map((experience, index) => (
                            <div key={index}>
                                <h3 className="text-lg font-semibold">{experience.jobTitle} - {experience.company}</h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400">{experience.duration}</p>
                                <ul className="list-disc pl-6 mt-2 text-sm space-y-1">
                                    {experience.responsibilities.map((responsibility, i) => (
                                        <li key={i}>{responsibility}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* Education */}
            {resumeDetails.education && (
                <section className="bg-white dark:bg-gray-800 rounded-xl shadow p-6">
                    <h2 className="text-xl font-semibold border-b pb-2 mb-4">Education</h2>
                    {resumeDetails.education.map((edu, index) => (
                        <div key={index}>
                            <p><strong>{edu.degree}</strong></p>
                            <p>{edu.institution}</p>
                        </div>
                    ))}
                </section>
            )}

            {/* Certifications */}
            {resumeDetails.certifications && (
                <section className="bg-white dark:bg-gray-800 rounded-xl shadow p-6">
                    <h2 className="text-xl font-semibold border-b pb-2 mb-4">Certifications</h2>
                    {resumeDetails.certifications.map((cert, index) => (
                        <p key={index}>{cert.name}</p>
                    ))}
                </section>
            )}

            {/* Preferences */}
            {resumeDetails.preferences && (
                <section className="bg-white dark:bg-gray-800 rounded-xl shadow p-6">
                    <h2 className="text-xl font-semibold border-b pb-2 mb-4">Preferences</h2>
                    <p><strong>Job Type:</strong> {resumeDetails.preferences.jobType || "Not specified"}</p>
                    <p><strong>Location:</strong> {resumeDetails.preferences.location || "Not specified"}</p>
                    <p><strong>Industry:</strong> {resumeDetails.preferences.industry || "Not specified"}</p>
                </section>
            )}

            {/* AI Analysis */}
            {resumeDetails.analysis && (
                <section className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white rounded-xl shadow-lg p-8 transform transition duration-300 hover:scale-105">
                    <h2 className="text-2xl font-extrabold border-b-2 border-white pb-4 mb-6 text-center">
                        🚀 AI-Powered Resume Analysis
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-white text-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg">
                            <h3 className="font-bold text-lg mb-3 text-blue-600">🎯 Suitable Job Roles</h3>
                            <ul className="list-disc pl-5 text-sm space-y-2">
                                {resumeDetails.analysis.suitableJobRoles.map((role, index) => (
                                    <li key={index}>{role}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="bg-white text-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg">
                            <h3 className="font-bold text-lg mb-3 text-green-600">💪 Strengths</h3>
                            <ul className="list-disc pl-5 text-sm space-y-2">
                                {resumeDetails.analysis.strengths.map((strength, index) => (
                                    <li key={index}>{strength}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="bg-white text-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg">
                            <h3 className="font-bold text-lg mb-3 text-red-600">⚡ Areas for Improvement</h3>
                            <ul className="list-disc pl-5 text-sm space-y-2">
                                {resumeDetails.analysis.areasForImprovement.map((area, index) => (
                                    <li key={index}>{area}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>
            )}
        </div>
    );
};

export default ResumeDetails;