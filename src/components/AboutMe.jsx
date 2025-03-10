import React from "react"
import foptoProfil from "../assets/foto_profil.jpg"
import logoBangkit from "../assets/logo_bangkit.png"
import logoCifest from "../assets/logo_cifest.png"

const AboutMe = () => {
    const experiences = [
        {
            id: 1,
            logo: logoBangkit,
            certificate: "/certificates/certificate_1.pdf",
            title: "Bangkit Academy 2023",
            subtitle: "Mobile Development (Android)",
            duration: "Februari 2023 - Juli 2023",
            description: (
                <>
                    <b>Bangkit Academy</b> adalah program pelatihan teknologi dari Kampus Merdeka yang didukung oleh Google, GoTo, dan Traveloka.
                    Saya mengambil learning path <strong>Mobile Development</strong> dan mempelajari pengembangan aplikasi Android menggunakan <b>Kotlin</b> dan <b>Jetpack Compose</b>.
                    Selama program ini, saya menyelesaikan berbagai modul teknis maupun non-teknis, mengerjakan proyek akhir bersama tim capstone, dan berhasil mendapatkan <strong>sertifikat kelulusan</strong>.
                </>
            )
        },
        {
            id: 2,
            logo: logoCifest,
            certificate: "../assets/certificate_2.pdf",
            title: "KPK Cifest 2023",
            subtitle: "Kategori Penelitian/Pengembangan",
            duration: "Agustus 2023 - September 2023",
            description: (
                <>
                    <b>CIFEST 2023</b> adalah kompetisi proposal tingkat nasional yang diselenggarakan oleh <strong>KPK</strong> untuk mendorong inovasi dalam bidang integritas dan antikorupsi.
                    Saya bersama tim <b>SISKOM20-Trinita</b> mengikuti kompetisi ini dan berhasil meraih <strong>Peringkat ke-2 dalam Kategori Penelitian/Pengembangan</strong>.
                    Kami merancang aplikasi android <strong>SiCeMor (Sistem Informasi Kecerdasan Moral)</strong> untuk mengukur tingkat kecerdasan moral seseorang dengan mengerjakan kuisioner.
                </>
            )
        }
    ];

    return (
        <section id="about" className="py-16 bg-gray-800 text-white">
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center">
                    <img
                        src={foptoProfil}
                        alt="Foto Saya"
                        className="w-32 h-32 rounded-full mb-6"
                    />
                    <h2 className="text-3xl font-bold text-center mb-8">About Me</h2>
                    <p className="text-gray-400 text-center max-w-2x1 mx-auto">
                        Halo! Saya <b>Prasetyo Yermia Damongi</b> seorang <b>Mobile Developer (Android)</b>. Saya adalah lulusan Program Studi Sistem Komputer, Universitas Trinita Manado. Saya telah mengembangkan aplikasi Android sejak tahun 2020 hingga sekarang. Berikut adalah 2 pengalaman berharga saya dalam pembelajaran dan pengembangan aplikasi Android.
                    </p>
                </div>

                <div className="mt-6 mb-6 grid grid-cols-1 md:grid-cols-2 gap-8">
                    {experiences.map((exp) => (
                        <div key={exp.id} className="bg-gray-700 p-6 rounded-lg shadow-lg">

                            <h3 className="text-xl font-semibold">{exp.title}</h3>
                            <p className="text-gray-300 italic text-sm mb-4">{exp.subtitle}</p>

                            <div className="flex items-center mb-4">
                                <img src={exp.logo} alt={exp.title} className="h-16 mr-4" />
                            </div>

                            <p className="text-sm text-gray-300 mb-2">{exp.duration}</p>
                            <p className="text-gray-400 mb-4">{exp.description}</p>

                            <a
                                href={exp.certificate}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-400 hover:text-blue-300 underline"
                            >
                                <button
                                    type="submit"
                                    className="bg-gray-900 text-white px-6 py-2 rounded-lg hover:bg-gray-800"
                                >
                                    Lihat Sertifikat
                                </button>
                            </a>
                        </div>
                    ))}
                </div>

                <div className="flex flex-col items-center">
                    <p className="text-gray-400 text-center max-w-2x1 mx-auto">
                        Saya memiliki pengalaman dalam pengembangan aplikasi android maupun website. Saya selalu bersemangat untuk mempelajari hal-hal baru dan menghadapi tantangan kreatif.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default AboutMe