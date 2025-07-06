import React from 'react'
import { Link } from 'react-router-dom'
import config from '../config/config'
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail, SiLeetcode } from "react-icons/si";




const Contact = () => {
    const portfolioLink = config.PORTFOLIO_LINK;
    const email = config.EMAIL;
    const linkedProfileLink = config.LINKED_IN_PROFILE_LINK;
    const githubProfileLink = config.GITHUB_PROFILE_LINK;
    const leetcodeProfileLink = config.LEETCODE_PROFILE_LINK;

    return (
        <div className='min-h-screen flex items-center justify-center px-4 py-10'>
            <section className="w-full max-w-3xl bg-white dark:bg-gray-900/80 backdrop-blur-lg rounded-2xl shadow-2xl p-10">
                <div className="text-center space-y-4">
                    <h2 className="text-4xl font-extrabold text-indigo-600 dark:text-indigo-400">Let’s Connect</h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300">
                        Interested in collaborating or hiring? Connect with me through the links below or explore my work.
                    </p>
                </div>

                {/* Portfolio Link */}
                <div className="mt-6 text-center">
                    <Link to={portfolioLink} target="_blank"
                        className="inline-flex items-center justify-center gap-2 text-indigo-600 dark:text-indigo-400 font-medium text-lg hover:underline hover:text-indigo-700 dark:hover:text-indigo-300 transition">
                        🌐 Visit My Portfolio
                    </Link>
                </div>

                {/* Info Grid */}
                <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-8 text-center text-gray-700 dark:text-gray-300">
                    <div>
                        <Link to={`mailto:${email}`} className="inline-flex flex-col items-center justify-center gap-1 hover:underline hover:text-indigo-600 dark:hover:text-indigo-400">
                            <SiGmail size={28} className="text-indigo-500" />
                            <p>{email}</p>
                        </Link>
                    </div>
                    <div>
                        <Link to={linkedProfileLink} target="_blank" className="inline-flex flex-col items-center justify-center gap-1 hover:underline hover:text-indigo-600 dark:hover:text-indigo-400">
                            <FaLinkedin size={28} className="text-indigo-500" />
                            <p>{linkedProfileLink}</p>
                        </Link>
                    </div>
                    <div>
                        <Link to={githubProfileLink} target="_blank" className="inline-flex flex-col items-center justify-center gap-1 hover:underline hover:text-indigo-600 dark:hover:text-indigo-400">
                            <FaGithub size={28} className="text-indigo-500" />
                            <p>{githubProfileLink}</p>
                        </Link>
                    </div>
                    <div>
                        <Link
                            to={leetcodeProfileLink}
                            target="_blank"
                            className="inline-flex flex-col items-center justify-center gap-1 hover:underline hover:text-indigo-600 dark:hover:text-indigo-400"
                        >
                            <SiLeetcode size={28} className="text-indigo-500" />
                            <p>{leetcodeProfileLink}</p>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contact