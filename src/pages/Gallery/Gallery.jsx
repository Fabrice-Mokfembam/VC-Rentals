
const Gallery = () => {
  // Placeholder images for the gallery (replace with actual event setup images)
  const galleryImages = [
    { src: 'https://via.placeholder.com/600x400?text=Wedding+Setup', alt: 'Wedding event setup with chairs and tables' },
    { src: 'https://via.placeholder.com/600x400?text=Corporate+Event', alt: 'Corporate event with modern tables' },
    { src: 'https://via.placeholder.com/600x400?text=Outdoor+Party', alt: 'Outdoor party with decorative chairs' },
    { src: 'https://via.placeholder.com/600x400?text=Banquet+Hall', alt: 'Banquet hall with elegant furniture' },
    { src: 'https://via.placeholder.com/600x400?text=Cocktail+Reception', alt: 'Cocktail reception with high tables' },
    { src: 'https://via.placeholder.com/600x400?text=Birthday+Celebration', alt: 'Birthday celebration with colorful chairs' },
  ];

  return (
    <div className="w-full bg-gray-100 font-['Inter',sans-serif]">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-br from-teal-800 to-gray-100 py-32 md:py-40 min-h-[60vh] sm:min-h-[70vh]">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-8 tracking-tight animate-fade-in">
            Our <span className="text-[#F5C542]">Gallery</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-200 leading-relaxed max-w-3xl mx-auto mb-10 animate-fade-in animation-delay-200">
            Explore our stunning event setups featuring premium chair and table rentals. Get inspired by how V&C Rentals transforms occasions into unforgettable experiences.
          </p>
          <a
            href="/contact"
            className="inline-block py-4 px-8 text-lg sm:text-xl text-teal-800 bg-[#F5C542] hover:bg-[#E5B532] rounded-lg transition-colors duration-300 animate-fade-in animation-delay-400"
          >
            Contact Us
          </a>
        </div>
      </section>

      {/* Gallery Grid Section */}
      <section className="w-full py-24 md:py-32 px-4 min-h-[70vh] sm:min-h-[80vh]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-teal-800 mb-16">
            Event <span className="text-[#F5C542]">Showcase</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className={`relative overflow-hidden rounded-lg shadow-lg animate-fade-in ${
                  index % 3 === 1 ? 'animation-delay-200' : index % 3 === 2 ? 'animation-delay-400' : ''
                }`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-[250px] sm:h-[300px] md:h-[350px] object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-30 transition-opacity duration-300 flex items-center justify-center opacity-0 hover:opacity-100">
                  <p className="text-white text-lg font-semibold">{image.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="w-full py-24 md:py-32 px-4 bg-teal-800 text-white min-h-[50vh] sm:min-h-[60vh]">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8">
            Ready to <span className="text-[#F5C542]">Create Your Event?</span>
          </h2>
          <p className="text-lg sm:text-xl mb-10">
            Let V&C Rentals bring your vision to life with our premium furniture rentals. Contact us today to start planning your unforgettable event.
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

export default Gallery;