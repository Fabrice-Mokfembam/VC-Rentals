import { HeroImage } from '../../assets/images';

function Hero() {
  return (
    <section className="w-full h-[calc(100vh-80px)] bg-gradient-to-br from-teal-800 to-gray-100">
      <div className="max-w-[84vw] mx-auto h-[calc(100vh-200px)] flex items-center pt-16 px-4 md:pt-4">
        <div className="flex flex-col md:flex-row items-center justify-between w-full gap-10">
          <div className="text-hero flex flex-col gap-6 md:gap-10 w-full md:w-1/2">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Transform Your Event with Our <br />
              <span className="text-[#F5C542]">Premium Rentals</span>
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-200 leading-relaxed w-full md:w-[80%]">
              Impress your guests with furniture that exudes sophistication and comfort. Our high-quality chair and table rentals will make your event stand out, allowing you to focus on creating lasting memories.
            </p>
            <button className="mt-8 md:mt-12 w-full sm:w-64 text-center py-4 px-8 border-none cursor-pointer text-teal-800 text-lg sm:text-xl bg-[#F5C542] hover:bg-[#E5B532] rounded-lg transition-colors duration-300">
              Contact Us
            </button>
          </div>
          <div className="image-hero relative z-0 w-full md:w-1/2 flex justify-center md:justify-end">
            <img
              src={HeroImage}
              alt="hero image"
              className="w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] object-contain z-[-1]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;