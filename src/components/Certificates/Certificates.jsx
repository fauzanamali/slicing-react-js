import { useState } from "react";
import image from "../../assets/image.png";
import java from "../../assets/javascript.png";
import Ai from "../../assets/ai.png";

const Certificates = () => {
  return (
    <section className="py-12 bg-[#7a0000] text-white">
      <h2 className="text-3xl font-bold text-center mb-8">Sertifikat</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 px-6">
        
        <div className="bg-white text-black shadow-lg rounded-xl overflow-hidden hover:scale-105 transition">
          <img src={image} alt="Dicoding Frontend" className="w-full h-48 object-contain" />
          <div className="p-4 text-center">
            <h3 className="font-semibold">Dicoding </h3>
          </div>
        </div>

        <div className="bg-white text-black shadow-lg rounded-xl overflow-hidden hover:scale-105 transition">
          <img src={java} alt="React Developer" className="w-full h-48 object-contain" />
          <div className="p-4 text-center">
            <h3 className="font-semibold">React Developer</h3>
          </div>
        </div>

        <div className="bg-white text-black shadow-lg rounded-xl overflow-hidden hover:scale-105 transition">
          <img src={Ai} alt="Tailwind CSS" className="w-full h-48 object-contain" />
          <div className="p-4 text-center">
            <h3 className="font-semibold">Dasar AI</h3>
          </div>
        </div>

        <div className="bg-white text-black shadow-lg rounded-xl overflow-hidden hover:scale-105 transition">
          <img src={java} alt="JavaScript Dasar" className="w-full h-48 object-contain" />
          <div className="p-4 text-center">
            <h3 className="font-semibold">JavaScript Dasar</h3>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Certificates;
