import { Gallery1, Gallery2, Gallery3, Gallery4, Gallery5, Gallery6 } from '../../assets/images';
import { FaArrowRight } from 'react-icons/fa';

function HomeGallery() {
  return (
    <section className="home-gallery-container w-full min-h-screen mt-32 flex flex-col gap-8 md:gap-12 px-4">
      <h1 className="text-center text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
        Get the right{" "}
        <span className="text-yellow-300">solution </span>
        for your events <br />
        <span className="text-yellow-300">all</span> in{" "}
        <strong>one</strong> place
      </h1>

      <div className="gallery grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mt-8">
        <img src={Gallery1} alt="Gallery 1" className="w-full h-64 md:h-80 object-cover rounded-lg" />
        <img src={Gallery2} alt="Gallery 2" className="w-full h-64 md:h-80 object-cover rounded-lg" />
        <img src={Gallery3} alt="Gallery 3" className="w-full h-64 md:h-80 object-cover rounded-lg" />
        <img src={Gallery4} alt="Gallery 4" className="w-full h-64 md:h-80 object-cover rounded-lg" />
        <img src={Gallery5} alt="Gallery 5" className="w-full h-64 md:h-80 object-cover rounded-lg" />
        <img src={Gallery6} alt="Gallery 6" className="w-full h-64 md:h-80 object-cover rounded-lg" />
      </div>

      <button className="mx-auto mt-6 w-full sm:w-64 flex items-center justify-center gap-2 py-4 px-6 text-lg md:text-xl text-gray-900 bg-gray-200 hover:bg-yellow-600 hover:text-white rounded-lg border-none cursor-pointer transition-colors duration-300">
        Browse Our Gallery
        <FaArrowRight className="arrow-icon text-yellow-600 hover:text-white ml-2 transition-colors duration-300" />
      </button>
    </section>
  );
}

export default HomeGallery;