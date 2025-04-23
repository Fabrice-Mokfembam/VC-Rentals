import { FaHandshake, FaStar, FaTruck, FaUsers } from 'react-icons/fa';

function About() {
  const values = [
    { icon: <FaHandshake />, title: "Customer Commitment", description: "We prioritize your satisfaction, ensuring every event is a success with personalized service." },
    { icon: <FaStar />, title: "Quality Excellence", description: "Our furniture is meticulously selected for durability, style, and comfort to elevate your events." },
    { icon: <FaTruck />, title: "Reliable Delivery", description: "With our dedicated vans, we ensure timely and hassle-free transportation for your rentals." },
    { icon: <FaUsers />, title: "Community Focus", description: "We support local events and build lasting relationships with our clients and partners." },
  ];

  const team = [
    { name: "Emily Carter", role: "Founder & CEO", image: "https://via.placeholder.com/150" },
    { name: "James Okoro", role: "Operations Manager", image: "https://via.placeholder.com/150" },
    { name: "Aisha Mwangi", role: "Event Specialist", image: "https://via.placeholder.com/150" },
  ];

  return (
    <div className="w-full bg-gray-100 font-['Inter',sans-serif]">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-br from-teal-800 to-gray-100 py-32 md:py-40 min-h-[60vh] sm:min-h-[70vh]">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-8 tracking-tight animate-fade-in">
            About <span className="text-[#F5C542]">V&C Rentals</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-200 leading-relaxed max-w-3xl mx-auto mb-10 animate-fade-in animation-delay-200">
            We’re passionate about transforming events with premium furniture rentals, delivering sophistication, comfort, and unforgettable experiences.
          </p>
          <a
            href="/contact"
            className="inline-block py-4 px-8 text-lg sm:text-xl text-teal-800 bg-[#F5C542] hover:bg-[#E5B532] rounded-lg transition-colors duration-300 animate-fade-in animation-delay-400"
          >
            Get in Touch
          </a>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="w-full py-24 md:py-32 px-4 min-h-[70vh] sm:min-h-[80vh]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-teal-800 mb-16">
            Our <span className="text-[#F5C542]">Story</span>
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <img
                src="https://via.placeholder.com/600x400"
                alt="Event setup"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2">
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Founded in 2018, V&C Rentals started with a simple mission: to make events extraordinary. Our founders, Emily Carter and Victor Limbe, saw a gap in the market for high-quality, stylish furniture rentals that could transform any occasion. From weddings to corporate events, we’ve grown to serve hundreds of clients across the region.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Today, with over 500 chairs and 200 tables in our inventory, we pride ourselves on offering a seamless rental experience, complete with reliable delivery and exceptional customer service. Let us help you create memories that last a lifetime.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="w-full py-24 md:py-32 px-4 bg-gradient-to-r from-teal-50 to-gray-50 min-h-[70vh] sm:min-h-[80vh]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-teal-800 mb-16">
            Our <span className="text-[#F5C542]">Values</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className={`flex flex-col items-center p-8 bg-white rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300 animate-fade-in ${
                  index === 1 ? 'animation-delay-200' : index === 2 ? 'animation-delay-400' : index === 3 ? 'animation-delay-600' : ''
                }`}
              >
                <div className="text-5xl text-[#F5C542] mb-6">{value.icon}</div>
                <h3 className="text-xl font-semibold text-teal-800 mb-3">{value.title}</h3>
                <p className="text-base text-gray-600 text-center">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="w-full py-24 md:py-32 px-4 min-h-[70vh] sm:min-h-[80vh]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-teal-800 mb-16">
            Meet <span className="text-[#F5C542]">Our Team</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {team.map((member, index) => (
              <div
                key={index}
                className={`flex flex-col items-center p-8 bg-white rounded-xl shadow-lg animate-fade-in ${
                  index === 1 ? 'animation-delay-200' : index === 2 ? 'animation-delay-400' : ''
                }`}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-40 h-40 rounded-full mb-6 object-cover"
                />
                <h3 className="text-xl font-semibold text-teal-800">{member.name}</h3>
                <p className="text-base text-gray-600">{member.role}</p>
              </div>
            ))}
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
            Contact us today to discover how V&C Rentals can make your event unforgettable.
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
}

export default About;