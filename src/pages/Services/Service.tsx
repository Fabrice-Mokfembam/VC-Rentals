import React from 'react';
import { Tables, stackedchairs } from '../../assets/images';

const Service = () => {
  return (
    <div className="w-full bg-gray-100 font-['Inter',sans-serif]">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-br from-teal-800 to-gray-100 py-32 md:py-40 min-h-[60vh] sm:min-h-[70vh]">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-8 tracking-tight animate-fade-in">
            Our <span className="text-[#F5C542]">Services</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-200 leading-relaxed max-w-3xl mx-auto mb-10 animate-fade-in animation-delay-200">
            Transform your events with our premium chair and table rentals. We provide stylish, durable furniture to ensure comfort and elegance for any occasion.
          </p>
          <a
            href="/contact"
            className="inline-block py-4 px-8 text-lg sm:text-xl text-teal-800 bg-[#F5C542] hover:bg-[#E5B532] rounded-lg transition-colors duration-300 animate-fade-in animation-delay-400"
          >
            Get in Touch
          </a>
        </div>
      </section>

      {/* Chair Rentals Section */}
      <section className="w-full py-24 md:py-32 px-4 min-h-[70vh] sm:min-h-[80vh]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-teal-800 mb-16">
            Chair <span className="text-[#F5C542]">Rentals</span>
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-12">
            <div className="w-full md:w-1/2 flex justify-center">
              <img
                src={stackedchairs}
                alt="Chairs"
                className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[450px] h-auto rounded-lg object-contain"
              />
            </div>
            <div className="w-full md:w-1/2">
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-6">
                Elevate your event’s ambiance with our extensive collection of over 500 beautifully designed chairs. Crafted for durability and style, our chairs are easy to decorate and built to withstand any occasion, ensuring your guests experience unmatched comfort.
              </p>
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
                Whether it’s a wedding, corporate event, or private gathering, our chairs provide the perfect blend of elegance and functionality. Rent all you need in one place.
              </p>
              <a
                href="/contact"
                className="inline-block mt-8 md:mt-12 py-4 px-8 text-lg sm:text-xl text-teal-800 bg-[#F5C542] hover:bg-[#E5B532] rounded-lg transition-colors duration-300"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Table Rentals Section */}
      <section className="w-full py-24 md:py-32 px-4 bg-gradient-to-r from-teal-50 to-gray-50 min-h-[70vh] sm:min-h-[80vh]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-teal-800 mb-16">
            Table <span className="text-[#F5C542]">Rentals</span>
          </h2>
          <div className="flex flex-col md:flex-row-reverse items-center justify-center gap-12">
            <div className="w-full md:w-1/2 flex justify-center">
              <img
                src={Tables}
                alt="Tables"
                className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] h-auto rounded-lg object-contain"
              />
            </div>
            <div className="w-full md:w-1/2">
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-6">
                Complete your event setup with our diverse selection of over 200 high-quality tables. From elegant banquet tables to modern cocktail tables, our inventory offers versatility to suit any event size or theme.
              </p>
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
                Pair our tables with our chair rentals for a coordinated, visually stunning setup. Our tables are designed to enhance your event’s aesthetic while providing practical functionality.
              </p>
              <a
                href="/contact"
                className="inline-block mt-8 md:mt-12 py-4 px-8 text-lg sm:text-xl text-teal-800 bg-[#F5C542] hover:bg-[#E5B532] rounded-lg transition-colors duration-300"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="w-full py-24 md:py-32 px-4 bg-teal-800 text-white min-h-[50vh] sm:min-h-[60vh]">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8">
            Ready to <span className="text-[#F5C542]">Elevate Your Event?</span>
          </h2>
          <p className="text-lg sm:text-xl mb-10">
            Contact us today to discover how V&C Rentals can make your event unforgettable with our premium furniture rentals.
          </p>
          <a
            href="/contact"
            className="inline-block py-4 px-8 text-lg sm:text-xl text-teal-800 bg-[#F5C542] hover:bg-[#E5B532] rounded-lg transition-colors duration-300"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
};

export default Service;