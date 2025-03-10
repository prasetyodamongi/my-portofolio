import React, { useState } from "react"
import { FaBars, FaTimes } from "react-icons/fa"

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="bg-gray-900 text-white p-4 sticky top-0 z-50">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-3xl font-bold">pras</h1>

                <button
                    className="md:hidden text-2xl"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <FaTimes /> : <FaBars />}
                </button>

                <nav
                    className={`absolute md:static top-16 left-0 w-full md:w-auto bg-gray-800 md:bg-transparent transition-all ${isOpen ? "block" : "hidden"
                        } md:block`}
                >
                    <ul className="flex flex-col md:flex-row md:space-x-6">
                        <li className="p-4 md:p-0 text-center">
                            <a href="#about" className="hover:text-gray-400">
                                About Me
                            </a>
                        </li>
                        <li className="p-4 md:p-0 text-center">
                            <a href="#projects" className="hover:text-gray-400">
                                My Projects
                            </a>
                        </li>
                        <li className="p-4 md:p-0 text-center">
                            <a href="#contact" className="hover:text-gray-400">
                                Contact
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header