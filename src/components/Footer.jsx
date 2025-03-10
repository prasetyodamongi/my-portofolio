import React from "react"
import { FaLinkedin, FaGithub, FaDiscord } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-8">
            <div className="container mx-auto px-4 text-center">
                <p className="mb-4">~ Prasetyo Yermia Damongi ~</p>
                <div className="flex justify-center space-x-6">
                    <a
                        href="https://linkedin.com/in/pydamongi"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-gray-400 transition-colors"
                    >
                        <FaLinkedin className="w-6 h-6 hover:scale-110 transition-transform" />
                    </a>

                    <a
                        href="https://github.com/prasetyodamongi"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-gray-400 transition-colors"
                    >
                        <FaGithub className="w-6 h-6 hover:scale-110 transition-transform" />
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer