import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="w-full bg-teal-800 text-white font-['Inter',sans-serif] py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="footer-content grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="footer-section">
            <h3 className="text-lg sm:text-xl font-semibold mb-4">
              About <span className="text-[#F5C542]">Us</span>
            </h3>
            <p className="text-sm sm:text-base leading-relaxed">
              V&C Rentals provides top-quality furniture rentals for events, ensuring sophistication, comfort, and unforgettable experiences. Let us elevate your next event!
            </p>
          </div>

          <div className="footer-section">
            <h3 className="text-lg sm:text-xl font-semibold mb-4">
              Quick <span className="text-[#F5C542]">Links</span>
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-sm sm:text-base hover:text-[#F5C542] transition-colors duration-200"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-sm sm:text-base hover:text-[#F5C542] transition-colors duration-200"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-sm sm:text-base hover:text-[#F5C542] transition-colors duration-200"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="text-lg sm:text-xl font-semibold mb-4">
              Contact <span className="text-[#F5C542]">Us</span>
            </h3>
            <p className="text-sm sm:text-base leading-relaxed">
              Lumpson Street, Newton Limbe
              <br />
              Phone: +237 689 906 756
              <br />
              Email: info@vcrentals.com
            </p>
          </div>

          <div className="footer-section">
            <h3 className="text-lg sm:text-xl font-semibold mb-4">
              Follow <span className="text-[#F5C542]">Us</span>
            </h3>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-[#F5C542] transition-colors duration-200"
                aria-label="Facebook"
              >
                <FaFacebook />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-[#F5C542] transition-colors duration-200"
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-[#F5C542] transition-colors duration-200"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-[#F5C542] transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom text-center mt-12 border-t border-teal-700 pt-6">
          <p className="text-sm sm:text-base">
            &copy; 2024 V&C <span className="text-[#F5C542]">Rentals</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;