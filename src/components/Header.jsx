import React, { useState } from "react"
import { FaBars, FaTimes } from "react-icons/fa"

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)

    const handleNavClick = () => {
        setIsOpen(false);
    }

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
                        {[
                            { name: "About Me", link: "#about" },
                            { name: "My Projects", link: "#projects" },
                            { name: "Contact", link: "#contact" },
                        ].map((item, index) => (
                            <li key={index} className="p-4 md:p-0">
                                <a
                                    href={item.link}
                                    onClick={handleNavClick}
                                    className="block w-full text-center md:inline-block px-4 py-2 hover:bg-gray-700 rounded-md"
                                >
                                    {item.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header