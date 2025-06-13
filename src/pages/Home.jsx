import React from 'react'
import { Footer } from '../components'

const Home = () => {
  return (
    <div>
      {/* <!-- Hero Section --> */}
      <section className="relative z-10 text-center py-24 px-6 flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-100/20 via-transparent to-transparent dark:from-blue-900/20"></div>

        <h2 className="text-5xl font-extrabold mb-6 leading-tight tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
          Land Your Dream Job with AI
        </h2>
        <p className="text-lg max-w-xl mx-auto text-gray-600 dark:text-gray-300 mb-10">
          Upload your resume and let AI analyze, score, and match you with the best opportunities.
        </p>
        <a href="#" className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-full hover:scale-105 transform transition duration-300 shadow-lg">
          Get Started
        </a>
      </section>

      {/* <!-- Features Section --> */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="text-center mb-14">
          <h3 className="text-3xl dark:text-white font-bold mb-2">Why Choose Us</h3>
          <p className="text-gray-600 dark:text-gray-400">Powerful tools to supercharge your job hunt</p>
        </div>
        <div className="grid gap-10 grid-cols-1 md:grid-cols-3 px-8 max-w-6xl mx-auto">
          <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
            <h4 className="text-xl font-semibold mb-2 text-blue-600 dark:text-blue-400">AI Resume Analyzer</h4>
            <p className='dark:text-white'>Analyze your resume and get a detailed score based on hiring best practices.</p>
          </div>
          <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
            <h4 className="text-xl font-semibold mb-2 text-purple-600 dark:text-purple-400">Smart Job Matching</h4>
            <p className='dark:text-white'>Our system compares your resume to job listings and recommends the best fits.</p>
          </div>
          <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
            <h4 className="text-xl font-semibold mb-2 text-pink-600 dark:text-pink-400">Personalized Suggestions</h4>
            <p className='dark:text-white'>Improve your chances with AI-powered tips and resume enhancement suggestions.</p>
          </div>
        </div>
      </section>

      {/* <!-- Call to Action --> */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center">
        <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Career?</h3>
        <p className="mb-8">Let our AI help you craft the perfect resume and land interviews faster.</p>
        <a href="#" className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-full shadow hover:bg-gray-100 transition">Upload Resume</a>
      </section>
      
      {/* <!-- Footer --> */}
      <Footer/>
    </div>
  )
}

export default Home