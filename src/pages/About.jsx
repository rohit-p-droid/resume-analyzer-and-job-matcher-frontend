import React from 'react'

const About = () => {
    return (
        <>
            <div className='min-h-screen px-4 py-12 flex items-center justify-center'>
                <section className="w-full max-w-4xl bg-white dark:bg-gray-900/80 backdrop-blur-md rounded-2xl shadow-xl p-10">
                    <div className="text-center mb-10">
                        <h1 className="text-4xl md:text-5xl font-extrabold text-indigo-600 dark:text-indigo-400">About This Project</h1>
                        <p className="mt-3 text-lg text-gray-600 dark:text-gray-300">
                            AI-powered Resume Analyzer and Job Suggestion Tool
                        </p>
                    </div>

                    <div className="space-y-8 text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                        <p>
                            This project is a full-stack web application built using the <strong>MERN stack</strong> (MongoDB, Express.js, React.js, Node.js) that empowers users to upload image-based resumes (<strong>JPG, PNG, JPEG</strong>) and receive smart feedback and job suggestions.
                        </p>

                        <div className="bg-indigo-50 dark:bg-gray-800/60 p-6 rounded-xl border border-indigo-200 dark:border-indigo-600">
                            <h2 className="text-2xl font-bold mb-4 text-indigo-600 dark:text-indigo-400">💡 Key Features</h2>
                            <ul className="list-disc list-inside space-y-2">
                                <li><strong>Secure Authentication:</strong> Login and logout functionality using MERN-based JWT auth.</li>
                                <li><strong>Image Resume Upload:</strong> Users upload image formats (JPG, PNG, JPEG) for analysis.</li>
                                <li><strong>AI Analysis:</strong> Extracts resume data like skills, education, experience, and more using Groq's LLM APIs.</li>
                                <li><strong>Smart Suggestions:</strong> Recommends relevant job roles and points out areas for improvement in the resume.</li>
                                <li><strong>Interactive UI:</strong> Modern, responsive, and user-friendly interface with dark/light theme support.</li>
                            </ul>
                        </div>

                        <div className="bg-yellow-50 dark:bg-yellow-900/50 p-5 rounded-lg border-l-4 border-yellow-500 dark:border-yellow-400">
                            <h3 className="text-xl font-semibold text-yellow-700 dark:text-yellow-300 mb-2">📌 Future Plans</h3>
                            <ul className="list-disc list-inside mt-2 space-y-1">
                                <li>Support for PDF resume uploads</li>
                                <li>Real-time job matching using job boards/APIs</li>
                                <li>Personalized user dashboard to manage and save resume insights</li>
                                <li>Admin panel for managing submissions</li>
                                <li>Detailed skill gap analysis using AI</li>
                            </ul>
                        </div>

                        <p className="text-center text-sm text-gray-500 dark:text-gray-400 pt-6">
                            Made with precision, passion, and purpose by Rohit Vasant Patil.
                        </p>
                    </div>
                </section>
            </div>
        </>
    )
}

export default About