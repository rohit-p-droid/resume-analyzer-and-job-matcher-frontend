import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logout, toggleTheme } from '../../reducers';
import { FaMoon, FaSun } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { apiRequest } from '../../utils/apiRequest';

const Header = ({ children }) => {
    const dispatch = useDispatch();
    const theme = useSelector((state) => state.theme.mode);
    const authStatus = useSelector((state) => state.auth.status);

    const navigate = useNavigate();
    const location = useLocation();

    const isActive = (path) => location.pathname == path;

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <div>
            <header className="w-full px-6 py-4 bg-white dark:bg-gray-900 shadow fixed top-0 z-50">
                <div className="flex items-center justify-between max-w-7xl mx-auto">
                    {/* <!-- Logo --> */}
                    <Link to="/">
                        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Smart Resume Analyzer</h1>
                    </Link>

                    {/* <!-- Desktop Menu --> */}
                    <nav className="hidden md:flex items-center space-x-6">
                        <Link
                            to="/"
                            className={`hover:text-blue-600 dark:hover:text-blue-400 transition ${isActive("/") ? "font-bold text-blue-600 dark:text-blue-400" : "dark:text-white"
                                }`}
                        >
                            Home
                        </Link>
                        {authStatus && (
                            <Link
                                to="/resume-analyzer"
                                className={`hover:text-blue-600 dark:hover:text-blue-400 transition ${isActive("/resume-analyzer") ? "font-bold text-blue-600 dark:text-blue-400" : "dark:text-white"
                                    }`}
                            >
                                Dashboard
                            </Link>
                        )}
                        <Link
                            to="/about"
                            className={`hover:text-blue-600 dark:hover:text-blue-400 transition ${isActive("/about") ? "font-bold text-blue-600 dark:text-blue-400" : "dark:text-white"
                                }`}
                        >
                            About
                        </Link>
                        <Link
                            to="/contact"
                            className={`hover:text-blue-600 dark:hover:text-blue-400 transition ${isActive("/contact") ? "font-bold text-blue-600 dark:text-blue-400" : "dark:text-white"
                                }`}
                        >
                            Contact
                        </Link>

                        {/* <!-- Auth Buttons --> */}
                        {!authStatus ?
                            <>
                                <Link to="/login"><button className="px-4 py-1 rounded bg-blue-600 text-white hover:bg-blue-700 transition">Login</button></Link>
                                <Link to="/register"><button className="px-4 py-1 rounded border border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white transition">Register</button></Link>
                            </> :
                            <>
                                <button
                                    className="px-4 py-1 rounded bg-blue-600 text-white hover:bg-blue-700 transition"
                                    onClick={() => navigate("/logout")}
                                >
                                    Logout
                                </button>
                            </>

                        }

                        {/* <!-- Theme Toggle --> */}
                        <button
                            className="text-gray-700 dark:text-gray-200 hover:text-black dark:hover:text-white focus:outline-none text-lg"
                            aria-label="Toggle Theme"
                            onClick={() => dispatch(toggleTheme())}
                        >
                            {theme == "light" ? <FaMoon /> : <FaSun />}
                        </button>
                    </nav>

                    {/* <!-- Mobile Menu Toggle --> */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden text-2xl focus:outline-none dark:text-white">
                        ☰
                    </button>
                </div>

                {/* <!-- Mobile Menu --> */}
                {isMenuOpen &&
                    <div className="md:hidden flex-col space-y-3 mt-4">
                        <Link to="/" className="block text-center dark:text-white hover:text-blue-600 dark:hover:text-blue-400">Home</Link>
                        <Link to="#" className="block text-center dark:text-white hover:text-blue-600 dark:hover:text-blue-400">Features</Link>
                        <Link to="#" className="block text-center dark:text-white hover:text-blue-600 dark:hover:text-blue-400">About</Link>
                        <Link to="#" className="block text-center dark:text-white hover:text-blue-600 dark:hover:text-blue-400">Contact</Link>
                        <div className="flex justify-center space-x-4">
                            {!authStatus ?
                                <>
                                    <Link to="/login"><button className="px-4 py-1 rounded bg-blue-600 text-white hover:bg-blue-700">Login</button></Link>
                                    <Link to="/register"><button className="px-4 py-1 rounded border border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white">Register</button></Link>
                                </> :
                                <>

                                </>
                            }
                        </div>
                        <button
                            className="text-gray-700 dark:text-gray-200 hover:text-black dark:hover:text-white focus:outline-none text-lg"
                            aria-label="Toggle Theme"
                            onClick={() => dispatch(toggleTheme())}
                        >
                            {theme == "light" ? <FaMoon /> : <FaSun />}
                        </button>
                    </div>
                }
            </header>
            <div className='pt-15'>
                {children}
            </div>
        </div>
    )
}

export default Header