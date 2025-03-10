import React from "react"
import { FaGooglePlay, FaChrome, FaGithub } from "react-icons/fa";
import icApp1 from "../assets/img/logo_trinitalink.jpg"
import icApp2 from "../assets/img/logo_galileaapp.png"
import icApp3 from "../assets/img/logo_wartaimanuelkm3.png"
import icApp4 from "../assets/img/logo_tarsiuslaundry_withbg.png"
import icApp5 from "../assets/img/logo_nutricipe.png"
import icApp6 from "../assets/img/logo_sicemorweb.png"
import fiturApp1 from "../assets/img/fitur_trinitalink.png"
import fiturApp2 from "../assets/img/fitur_galileaapp.png"
import fiturApp3 from "../assets/img/fitur_wartaimanuelkm3.png"
import fiturApp4 from "../assets/img/fitur_tarsiuslaundry.png"
import fiturApp5 from "../assets/img/fitur_nutricipe.png"
import fiturApp6 from "../assets/img/fitur_sicemorweb.png"

const MyProjects = () => {
    const projects = [
        {
            id: 1,
            logo: icApp1,
            title: "TrinitaLink - SiCeMor",
            subtitle: "Aplikasi Android",
            screenshot: fiturApp1,
            description: "Aplikasi penghubung portal dan aplikasi kampus untuk mahasiswa Universitas Trinita.",
            technologies: ["Kotlin", "MVVM pattern", "Firebase Authentication", "Firebase Firestore"],
            playstore: "https://play.google.com/store/apps/details?id=com.pcoding.trinitalink&pcampaignid=web_share",
        },
        {
            id: 2,
            logo: icApp2,
            title: "GalielaApp",
            subtitle: "Aplikasi Android",
            screenshot: fiturApp2,
            description: "Aplikasi Warta Jemaat GPdI Galilea Lopana Satu untuk menampilkan jadwal ibadah, petugas pelayanan, laporan keuangan dan lainnya.",
            technologies: ["Kotlin", "MVVM pattern", "Jetpack Compose", "Firebase Firestore"],
            playstore: "https://play.google.com/store/apps/details?id=com.pcoding.galileaapp&pcampaignid=web_share",
        },
        {
            id: 3,
            logo: icApp3,
            title: "Warta Imanuel KM3",
            subtitle: "Aplikasi Android",
            screenshot: fiturApp3,
            description: "Aplikasi Warta Jemaat GPdI Imanuel Kilometer Tiga untuk menampilkan jadwal ibadah, petugas pelayanan, laporan keuangan dan lainnya.",
            technologies: ["Kotlin", "MVVM pattern", "Jetpack Compose", "Firebase Firestore"],
            playstore: "https://play.google.com/store/apps/details?id=com.pcoding.wartaimanuelkm3&pcampaignid=web_share",
        },
        {
            id: 4,
            logo: icApp4,
            title: "Tarsius Laundry",
            subtitle: "Aplikasi Android",
            screenshot: fiturApp4,
            description: "Aplikasi berbasis web untuk menampilkan jadwal ibadah, petugas pelayanan, dan laporan keuangan jemaat.",
            technologies: ["Kotlin", "MVVM pattern", "Jetpack Compose", "RestAPI", "Retrofit", "OkHTTP", "Bluetooth Printer Thermal", "Scan QR Code"],
            playstore: "https://play.google.com/store/apps/details?id=com.pcoding.tarsiuslaundry&pcampaignid=web_share",
        },
        {
            id: 5,
            logo: icApp5,
            title: "Nutricipe",
            subtitle: "Aplikasi Android",
            screenshot: fiturApp5,
            description: "Aplikasi berbasis web untuk menampilkan jadwal ibadah, petugas pelayanan, dan laporan keuangan jemaat.",
            technologies: ["React.js", "Vite", "Firebase"],
            github: "https://github.com/grandier/Nutricipe/blob/main/README.md"
        }
        ,
        {
            id: 6,
            logo: icApp6,
            title: "SiCeMor - Web",
            subtitle: "Aplikasi Web",
            screenshot: fiturApp6,
            description: "Aplikasi berbasis web untuk menampilkan jadwal ibadah, petugas pelayanan, dan laporan keuangan jemaat.",
            technologies: ["React.js", "Tailwind CSS", "Firebase"],
            browser: "https://sicemor-app.web.app/",
            github: "https://github.com/prasetyodamongi/sicemor-web"
        }
    ]

    return (
        <section id="projects" className="py-16 bg-gray-900 text-white">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8">My Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project) => (
                        <div key={project.id} className="bg-gray-800 p-6 rounded-lg shadow-lg">
                            {/* Logo, Title, Subtitle */}
                            <div className="flex items-center mb-4">
                                <img src={project.logo} alt={project.title} className="w-16 h-16 rounded-lg mr-4" />
                                <div>
                                    <h3 className="text-xl font-bold">{project.title}</h3>
                                    <p className="text-sm text-gray-400">{project.subtitle}</p>
                                </div>
                            </div>

                            {/* Screenshot */}
                            <img src={project.screenshot} alt="Screenshot" className="w-full h-auto rounded-lg mb-4" />

                            {/* Deskripsi */}
                            <p className="text-gray-300 mb-2">{project.description}</p>

                            {/* Teknologi */}
                            <p className="text-sm text-gray-400 mb-4">
                                <strong>Teknologi: </strong> {project.technologies.join(", ")}
                            </p>

                            {/* Links */}
                            <div className="flex gap-4">
                                {project.playstore && (
                                    <a href={project.playstore} target="_blank" rel="noopener noreferrer">
                                        <FaGooglePlay size={30} className="text-white hover:text-gray-400" />
                                    </a>
                                )}
                                {project.browser && (
                                    <a href={project.browser} target="_blank" rel="noopener noreferrer">
                                        <FaChrome size={30} className="text-white hover:text-gray-400" />
                                    </a>
                                )}
                                {project.github && (
                                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                                        <FaGithub size={30} className="text-white hover:text-gray-400" />
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default MyProjects