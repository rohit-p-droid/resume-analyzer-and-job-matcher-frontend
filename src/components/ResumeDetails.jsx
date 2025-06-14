import React from 'react'

const ResumeDetails = (resumeDetails) => {
    return (
        <div>
            <div id="resultContainer" className="flex flex-col items-center mt-8 space-y-8">
                <div className="w-full bg-gray-100 dark:bg-gray-900 p-6 rounded-3xl shadow-xl border border-gray-300 dark:border-gray-700">
                    <h2 className="text-2xl font-bold mb-4">Extracted Details</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left text-gray-800 dark:text-white">
                        <div>
                            <p><strong>Name:</strong> <span id="name">Rohit Patil</span></p>
                            <p><strong>Email:</strong> <span id="email">rohit@email.com</span></p>
                            <p><strong>Phone:</strong> <span id="phone">+91-XXXXXXXXXX</span></p>
                            <p><strong>Location:</strong> <span id="location">Mumbai, India</span></p>
                        </div>
                        <div>
                            <p><strong>Skills:</strong></p>
                            <ul className="list-disc list-inside" id="skills">
                                <li>React.js</li>
                                <li>Node.js</li>
                                <li>MongoDB</li>
                                <li>Tailwind CSS</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResumeDetails