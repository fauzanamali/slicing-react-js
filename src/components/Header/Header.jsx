import gambar from '../assets/zaid.jpg';

const Header = () => {
  
  return (
    <div className="w-full bg-[#660000] text-white font-sans">

      <section className="flex flex-col md:flex-row items-center justify-between px-8 md:px-16 py-16">
        <div className="max-w-lg space-y-4">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            There’s a <br /> better way to <br /> grow
          </h1>
          <p className="text-gray-200">
            Are you having a hard time growing your online business? Our team can help.
          </p>
          <button className="bg-yellow-400 text-black font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-yellow-500 hover:scale-105 transition">
            GET STARTED
          </button>
        </div>  

        <div className="mt-10 md:mt-0">
          <img
            src={gambar}
            alt="Hero"
            className="w-[380px] rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500"
          />
        </div>
      </section>

      
    </div>
  );
};

export default Header;
