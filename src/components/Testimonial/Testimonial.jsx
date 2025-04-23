import  { useState } from "react";
import { FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";

function Testimonial() {
  const testimonials = [
    {
      name: "Fabrice Mokfembam",
      quote:
        "V&C Rentals transformed our event with their stunning furniture. The process was seamless, and their customer service was top-notch. Highly recommend!",
      rating: 5,
    },
    {
      name: "Sarah Johnson",
      quote:
        "The chairs and tables we rented were elegant and comfortable. V&C made our wedding reception unforgettable. Thank you for the excellent service!",
      rating: 4,
    },
    {
      name: "Michael Chen",
      quote:
        "Reliable, fast, and affordable! V&C Rentals provided everything we needed for our corporate event. Their team went above and beyond to ensure success.",
      rating: 5,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const generateStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <FaStar
          key={i}
          className={`text-2xl ${i < rating ? "text-[#F5C542]" : "text-gray-300"}`}
        />
      );
    }
    return stars;
  };

  return (
    <section className="w-full py-20 px-4 bg-gray-100 font-['Inter',sans-serif]">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-teal-800 mb-4 tracking-tight">
          Testimonials
        </h1>
        <div className="text-xl sm:text-2xl text-gray-600 mb-12">
          What Our Amazing Customers{" "}
          <span className="text-[#F5C542]">Say</span>
        </div>

        <div className="flex items-center justify-center gap-4 md:gap-6">
          <button
            onClick={handlePrev}
            aria-label="Previous testimonial"
            className="text-4xl md:text-5xl text-teal-800 hover:text-[#F5C542] transition-colors duration-300"
          >
            <FaChevronLeft />
          </button>

          <div className="testimonial bg-white p-6 md:p-8 rounded-xl shadow-lg max-w-lg md:max-w-2xl transform transition-all duration-500 animate-fade-in">
            <div className="stars flex justify-center gap-1 mb-4">
              {generateStars(testimonials[currentIndex].rating)}
            </div>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-6">
              {testimonials[currentIndex].quote}
            </p>
            <h3 className="text-xl md:text-2xl font-semibold text-teal-800">
              {testimonials[currentIndex].name}
            </h3>
          </div>

          <button
            onClick={handleNext}
            aria-label="Next testimonial"
            className="text-4xl md:text-5xl text-teal-800 hover:text-[#F5C542] transition-colors duration-300"
          >
            <FaChevronRight />
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, index) => (
            <span
              key={index}
              className={`w-3 h-3 rounded-full ${
                index === currentIndex ? "bg-[#F5C542]" : "bg-gray-300"
              } transition-colors duration-300`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonial;