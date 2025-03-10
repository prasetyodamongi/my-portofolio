import React, { useState } from "react"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    const { name, message } = formData;
    const phoneNumber = "6281523896088";
    const text = `Halo, saya ${name}%0A%0A*Pesan:*%0A${message}`;
    const waLink = `https://wa.me/${phoneNumber}?text=${text}`;
    window.open(waLink, "_blank");
  }

  return (
    <section id="contact" className="py-16 bg-gray-800 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Contact</h2>
        <form className="max-w-2xl mx-auto" onSubmit={handleWhatsAppSubmit}>
          <div className="mb-4">
            <label className="block text-gray-300 mb-2" htmlFor="name">
              Nama
            </label>
            <input
              id="name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 bg-gray-700 border border-gray-600 rounded-lg text-white"
              placeholder="Masukkan nama Anda"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-300 mb-2" htmlFor="message">
              Pesan
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-2 bg-gray-700 border border-gray-600 rounded-lg text-white"
              rows="5"
              placeholder="Masukkan pesan Anda"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600"
          >
            Kirim ke WhatsApp
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact