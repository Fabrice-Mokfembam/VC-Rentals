
import { Van } from '../../assets/images';
import { FaBolt, FaShieldAlt, FaTags, FaUsers, FaTruck } from 'react-icons/fa';

function WhyChooseUs() {
  const reasons = [
    { text: "We are", highlight: "Fast", icon: <FaBolt /> },
    { text: "We are", highlight: "Reliable", icon: <FaShieldAlt /> },
    { text: "We offer", highlight: "Discounts", icon: <FaTags /> },
    { text: "We have the", highlight: "Number", suffix: "you need", icon: <FaUsers /> },
  ];

  return (
    <section className="w-full min-h-screen py-16 px-4 bg-gray-100 font-['Inter',sans-serif]">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold text-center text-teal-800 mb-12 tracking-tight">
          Why <span className="text-[#F5C542]">Choose</span> Us
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className={`flex flex-col items-center p-6 bg-white rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300 animate-fade-in ${
                index === 1 ? 'animation-delay-200' : index === 2 ? 'animation-delay-400' : index === 3 ? 'animation-delay-600' : ''
              }`}
            >
              <div className="text-4xl text-[#F5C542] mb-4">{reason.icon}</div>
              <p className="text-lg sm:text-xl font-medium text-teal-800 text-center">
                {reason.text} <span className="text-[#F5C542]">{reason.highlight}</span>{' '}
                {reason.suffix || ''}
              </p>
            </div>
          ))}
        </div>

        <h2 className="text-2xl sm:text-3xl font-semibold text-center text-teal-800 mb-8">
          And <span className="text-[#F5C542]">More</span>
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 bg-gradient-to-r from-teal-50 to-gray-50 p-8 rounded-xl shadow-lg">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="text-4xl text-[#F5C542] mb-4">
              <FaTruck />
            </div>
            <h2 className="text-xl sm:text-2xl font-semibold text-teal-800">
              We Provide a Van for <span className="text-[#F5C542]">Easy</span> Transportation
            </h2>
            <p className="text-lg text-gray-600 mt-4 max-w-md">
              Our reliable transportation service ensures your rentals arrive on time, hassle-free, so you can focus on your event.
            </p>
          </div>
          <img
            src={Van}
            alt="image of van"
            className="w-full sm:w-[400px] h-auto rounded-lg shadow-md"
          />
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;