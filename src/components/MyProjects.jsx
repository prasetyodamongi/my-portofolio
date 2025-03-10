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
            description: "Aplikasi penghubung portal dan aplikasi kampus untuk mahasiswa Universitas Trinita. Aplikasi ini merupakan aplikasi pertama yang saya kembangkan hingga release ke Google Playstore. Awalnya aplikasi ini bernama TrinitaLink tapi setelah Cifest 2023, produk yang kami kembangkan ialah SiCeMor diintegrasikan ke dalam aplikasi ini.",
            technologies: ["Kotlin", "MVVM pattern", "Firebase Authentication", "Firebase Firestore"],
            playstore: "https://play.google.com/store/apps/details?id=com.pcoding.trinitalink&pcampaignid=web_share",
        },
        {
            id: 2,
            logo: icApp2,
            title: "GalielaApp",
            subtitle: "Aplikasi Android",
            screenshot: fiturApp2,
            description: "Aplikasi Warta Jemaat GPdI Galilea Lopana Satu untuk menampilkan jadwal ibadah, petugas pelayanan, laporan keuangan dan lainnya. Aplikasi ini merupakan aplikasi pertama yang saya kembangkan menggunakan Jetpack Compose, aplikasi ini terintegrasi firebase firestore sebagai tempat penyimpanan data jadwal ibadah, petugas pelayanan, laporan keuangan dan informasi ulang tahun.",
            technologies: ["Kotlin", "MVVM pattern", "Jetpack Compose", "Firebase Firestore"],
            playstore: "https://play.google.com/store/apps/details?id=com.pcoding.galileaapp&pcampaignid=web_share",
        },
        {
            id: 3,
            logo: icApp3,
            title: "Warta Imanuel KM3",
            subtitle: "Aplikasi Android",
            screenshot: fiturApp3,
            description: "Aplikasi Warta Jemaat GPdI Imanuel Kilometer Tiga untuk menampilkan jadwal ibadah, petugas pelayanan, laporan keuangan dan lainnya. Aplikasi ini mirip dengan GalileaApp namun dengan fitur yang lebih lengkap.",
            technologies: ["Kotlin", "MVVM pattern", "Jetpack Compose", "Firebase Firestore"],
            playstore: "https://play.google.com/store/apps/details?id=com.pcoding.wartaimanuelkm3&pcampaignid=web_share",
        },
        {
            id: 4,
            logo: icApp4,
            title: "Tarsius Laundry",
            subtitle: "Aplikasi Android",
            screenshot: fiturApp4,
            description: "Aplikasi Manajemen Laundry untuk mengatur pesanan laundry oleh karyawan, pembuatan laporan oleh tim manajemen dan monitoring laundry oleh admin. Aplikasi ini merupakan aplikasi pertama saya yang berkolaborasi dengan back-end, saya disini berperan sebagai front-end untuk merancang tampilan aplikasi.",
            technologies: ["Kotlin", "MVVM pattern", "Jetpack Compose", "RestAPI", "Retrofit", "OkHTTP", "Bluetooth Printer Thermal", "Scan QR Code"],
            playstore: "https://play.google.com/store/apps/details?id=com.pcoding.tarsiuslaundry&pcampaignid=web_share",
        },
        {
            id: 5,
            logo: icApp5,
            title: "Nutricipe",
            subtitle: "Aplikasi Android",
            screenshot: fiturApp5,
            description: "Aplikasi berbasis android yang dapat mendeteksi buah-buahan atau sayuran dan memberikan resep makanan sehat berdasarkan buah-buahan atau sayuran yang di foto. Aplikasi ini merupakan aplikasi yang saya kembangkan bersama tim project campstone di Bangkit Academy 2023.",
            technologies: ["Kotlin", "MVVM pattern", "RestAPI", "Machine Learning", "Google Cloud"],
            github: "https://github.com/grandier/Nutricipe/blob/main/README.md"
        }
        ,
        {
            id: 6,
            logo: icApp6,
            title: "SiCeMor - Web",
            subtitle: "Aplikasi Web",
            screenshot: fiturApp6,
            description: "Aplikasi berbasis web untuk mengukur tingkat kecerdasan moral seseorang menggunakan kuisioner. Aplikasi ini merupakan aplikasi dari produk pengembangan kami di Cifest 2023 yang sebelumnya hanya berbasis Android namun disini saya menambah jangkauan pengguna dengan membuat versi Aplikasi Web-nya.",
            technologies: ["React.js", "Vite", "Firebase"],
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