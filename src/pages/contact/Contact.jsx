
import { FaWhatsapp, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

function Contact() {
  return (
    <div className="w-full bg-gray-100 font-['Inter',sans-serif]">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-br from-teal-800 to-gray-100 py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 tracking-tight animate-fade-in">
            Get in <span className="text-[#F5C542]">Touch</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-200 leading-relaxed max-w-3xl mx-auto mb-8 animate-fade-in animation-delay-200">
            We’re here to help make your event unforgettable. Reach out to us today via WhatsApp, email, or visit us in Newton, Limbe!
          </p>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="w-full py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="flex flex-col gap-6">
              <h2 className="text-3xl sm:text-4xl font-bold text-teal-800 mb-6">
                Contact <span className="text-[#F5C542]">Details</span>
              </h2>
              <div className="flex items-center gap-4">
                <FaMapMarkerAlt className="text-2xl text-[#F5C542]" />
                <p className="text-lg text-gray-600">
                  Lumpson Street, Newton, Limbe, Cameroon
                </p>
              </div>
              <div className="flex items-center gap-4">
                <FaPhone className="text-2xl text-[#F5C542]" />
                <p className="text-lg text-gray-600">
                  Phone: +237 689 906 756
                </p>
              </div>
              <div className="flex items-center gap-4">
                <FaEnvelope className="text-2xl text-[#F5C542]" />
                <p className="text-lg text-gray-600">
                  Email: info@vcrentals.com
                </p>
              </div>
              <a
                href="https://wa.me/+237689906756?text=Hello%20V%26C%20Rentals,%20I%20would%20like%20to%20inquire%20about%20your%20services!"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 flex items-center justify-center gap-2 py-4 px-6 text-lg text-white bg-[#25D366] hover:bg-[#20B356] rounded-lg transition-colors duration-300"
              >
                <FaWhatsapp className="text-xl" />
                Contact Us on WhatsApp
              </a>
            </div>

            <div className="w-full h-80 md:h-96 rounded-lg shadow-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.642227048656!2d9.1935!3d4.0235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNMKwMDEyNC41IlMgOSKwMTEnNDMuOCJF!5e0!3m2!1sen!2sus!4v1698259200000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="V&C Rentals Location in Newton, Limbe"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="w-full py-16 px-4 bg-gradient-to-r from-teal-50 to-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-teal-800 mb-12">
            Send Us a <span className="text-[#F5C542]">Message</span>
          </h2>
          <div className="max-w-2xl mx-auto bg-white p-6 md:p-8 rounded-xl shadow-lg">
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F5C542] focus:border-[#F5C542] outline-none"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F5C542] focus:border-[#F5C542] outline-none"
                  placeholder="Your Email"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F5C542] focus:border-[#F5C542] outline-none"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <button
                type="button"
                className="w-full py-4 px-6 text-lg text-teal-800 bg-[#F5C542] hover:bg-[#E5B532] rounded-lg transition-colors duration-300"
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;