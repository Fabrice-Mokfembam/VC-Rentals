import { Tables, stackedchairs } from '../../assets/images';

function Services() {
  return (
    <div className="service-main-container w-full min-h-[60vh] flex flex-col gap-8 md:gap-12 mt-8 px-4 " id="services">
      <h1 className="text-4xl sm:text-5xl font-bold text-center text-teal-800">
        <span className="text-5xl sm:text-6xl">O</span>ur{" "}
        <span className="text-[#F5C542]">Services</span>
      </h1>

      <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 p-4 m-4">
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={stackedchairs}
            alt="chairs"
            className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[450px] h-auto rounded-lg object-contain md:ml-4"
          />
        </div>
        <div className="info-chairs flex flex-col justify-start items-start w-full md:w-1/2 h-auto md:h-[58vh] p-4 md:pl-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-teal-800">
            We Rent <span className="text-[#F5C542] text-3xl sm:text-4xl">Chairs</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mt-4">
            Elevate the ambiance of your event with our extensive collection of durable and beautifully designed chairs. Our chairs are easy to decorate and built to withstand the demands of any occasion, ensuring your guests enjoy unparalleled comfort and style.
          </p>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mt-4">
            There are <strong>500+ chairs</strong>, Rent all in one place.
          </p>
          <button className="mt-8 md:mt-12 w-full sm:w-64 text-center py-4 px-8 border-none cursor-pointer text-teal-800 text-lg sm:text-xl bg-[#F5C542] hover:bg-[#E5B532] rounded-lg transition-colors duration-300">
            Get in touch
          </button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row-reverse items-center justify-center gap-6 md:gap-8 p-4 m-4">
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={Tables}
            alt="tables"
            className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] h-auto rounded-lg object-contain md:mr-4"
          />
        </div>
        <div className="info-chairs tables flex flex-col justify-start items-start w-full md:w-1/2 h-auto md:h-[58vh] p-4 md:pr-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-teal-800">
            We Rent <span className="text-[#F5C542] text-3xl sm:text-4xl">Tables</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mt-4">
            Complete the perfect setting for your event with our diverse selection of high-quality tables. From elegant banquet tables to modern cocktail tables, our extensive inventory offers the versatility to accommodate any event size or theme. Pair our tables with our chair rentals for a coordinated and visually stunning setup.
          </p>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mt-4">
            Choose from <strong>200+ table options</strong>, all available for rent.
          </p>
          <button className="mt-8 md:mt-12 w-full sm:w-64 text-center py-4 px-8 border-none cursor-pointer text-teal-800 text-lg sm:text-xl bg-[#F5C542] hover:bg-[#E5B532] rounded-lg transition-colors duration-300">
            Get in touch
          </button>
        </div>
      </div>
    </div>
  );
}

export default Services;