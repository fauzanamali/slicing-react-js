import gambar from '../assets/zaid.jpg';

const Page = () => {
  
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

      <section className="bg-[#7a0000] py-12">
        <div className="text-center mb-6 font-semibold text-lg">FEATURED ON</div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center px-8">
          <div className="bg-[#800000] py-6 rounded-xl shadow-md hover:bg-[#990000] transition">LOGO HERE</div>
          <div className="bg-[#800000] py-6 rounded-xl shadow-md hover:bg-[#990000] transition">LOGO HERE</div>
          <div className="bg-[#800000] py-6 rounded-xl shadow-md hover:bg-[#990000] transition">LOGO HERE</div>
          <div className="bg-[#800000] py-6 rounded-xl shadow-md hover:bg-[#990000] transition">LOGO HERE</div>
        </div>
      </section>

      <section className="bg-[#660000] text-white py-20 text-center px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Discover new <br /> business strategies
        </h2>
        <p className="text-gray-200 max-w-xl mx-auto mb-6">
          Thousands of startups trust us with our effective and efficient business techniques
        </p>
        <button className="bg-yellow-400 text-black font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-yellow-500 hover:scale-105 transition">
          ABOUT US
        </button>
      </section>

      <section className="bg-[#660000] text-white py-20 px-6 md:px-16 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1">
          <img
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
            alt="Work"
            className="rounded-2xl shadow-xl w-full md:w-[450px] hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="flex-1 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">
            We take our <br /> work seriously
          </h2>
          <p className="text-gray-200">
            Wasting time is not in our vocabulary. You can expect to get effective results in no time.
          </p>
          <button className="bg-yellow-400 text-black font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-yellow-500 hover:scale-105 transition">
            CONTACT US
          </button>
        </div>
      </section>

      <section className="bg-[#660000] text-white py-20 px-6 md:px-16 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">
            Grow your <br /> business fast
          </h2>
          <p className="text-gray-200">
            We understand how hard it is to grow a business. That's why we're here to do it for you.
          </p>
          <button className="bg-yellow-400 text-black font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-yellow-500 hover:scale-105 transition">
            CONTACT US
          </button>
        </div>
        <div className="flex-1">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
            alt="Business meeting"
            className="rounded-2xl shadow-xl w-full md:w-[450px] hover:scale-105 transition-transform duration-500"
          />
        </div>
      </section>

      <section className="bg-[#660000] text-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="uppercase text-sm tracking-widest mb-2">Testimonials</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Read what others <br /> say about us
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#800000] p-8 rounded-lg shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1502945015378-0e284ca1a5be?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHdlYnNpdGV8ZW58MHx8MHx8fDA%3D"
                alt="Ron Williams"
                className="w-20 h-20 rounded-full mx-auto mb-4 border-4 border-white/20"
              />
              <h3 className="font-bold text-lg mb-2">Website</h3>
              <p className="text-gray-200 text-sm leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam a leo lacus. Sed ac libero nibh.
              </p>
            </div>

            <div className="bg-[#800000] p-8 rounded-lg shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1586717799252-bd134ad00e26?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dWklMkZ1eHxlbnwwfHwwfHx8MA%3D%3D"
                alt="Anna Phils"
                className="w-20 h-20 rounded-full mx-auto mb-4 border-4 border-white/20"
              />
              <h3 className="font-bold text-lg mb-2">UI/UX</h3>
              <p className="text-gray-200 text-sm leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam a leo lacus. Sed ac libero nibh.
              </p>
            </div>

            <div className="bg-[#800000] p-8 rounded-lg shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1607706189992-eae578626c86?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29kaW5nfGVufDB8fDB8fHww"
                alt="Mary Madison"
                className="w-20 h-20 rounded-full mx-auto mb-4 border-4 border-white/20"
              />
              <h3 className="font-bold text-lg mb-2">CODING</h3>
              <p className="text-gray-200 text-sm leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam a leo lacus. Sed ac libero nibh.
              </p>
            </div>
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default Page;
