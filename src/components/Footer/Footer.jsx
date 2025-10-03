

function Footer() {
    return (

        
    <footer className="bg-[#7a0000] text-center py-6 text-gray-200">
        <footer className="bg-[#7a0000] py-12 px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 text-sm">
        
          <div>
            <h2 className="font-bold text-lg">*FA*</h2>
          </div>

         
          <div>
            <h3 className="font-semibold mb-3">Navigation</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-300">Home</a></li>
              <li><a href="#" className="hover:text-gray-300">About</a></li>
              <li><a href="#" className="hover:text-gray-300">Contact Us</a></li>
            </ul>
          </div>

         
          <div>
            <h3 className="font-semibold mb-3">Contact</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-300">Facebook</a></li>
              <li><a href="#" className="hover:text-gray-300">Instagram</a></li>
              <li><a href="#" className="hover:text-gray-300">LinkedIn</a></li>
            </ul>
          </div>

       
          <div>
            <h3 className="font-semibold mb-3">Address</h3>
            <p>3807 Geneva Street<br />Brooklyn, New York</p>
          </div>

         
          <div>
            <h3 className="font-semibold mb-3">Newsletter</h3>
            <form className="flex">
              <input
                type="email"
                placeholder="Email Address"
                className="px-3 py-2 rounded-l text-black focus:outline-none w-full"
              />
              <button className="bg-[#660000] px-4 py-2 rounded-r hover:bg-[#4d0000] transition">
                ➤
              </button>
            </form>
          </div>
        </div>
      </footer>
        <p>&copy; 2025 Fauzan. All rights reserved.</p>
      </footer>
  );
}

export default Footer;
