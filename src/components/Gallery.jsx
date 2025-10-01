import naga from '../assets/naga.jpg';
import naga2 from '../assets/naga2.jpg';
import raja from '../assets/raja.jpg';
import orang from '../assets/orang.jpg';



const Gallery = () => {
  return (
    <section className="w-full bg-[#660000] py-16 px-8 text-white">
      <h2 className="text-3xl font-bold text-center mb-10">Galeri</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <img
          src={naga}
          alt="Galeri 1"
          className="w-full h-48 object-cover rounded-xl shadow-md hover:scale-105 transition duration-300"
        />
        <img
          src={naga2}
          alt="Galeri 2"
          className="w-full h-48 object-cover rounded-xl shadow-md hover:scale-105 transition duration-300"
        />
        <img
          src={raja}
          alt="Galeri 3"
          className="w-full h-48 object-cover rounded-xl shadow-md hover:scale-105 transition duration-300"
        />
        <img
          src={orang}
          alt="Galeri 4"
          className="w-full h-48 object-cover rounded-xl shadow-md hover:scale-105 transition duration-300"
        />
      </div>
    </section>
  );
};

export default Gallery;
