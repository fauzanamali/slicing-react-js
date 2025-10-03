const Header = () => {
  return (
    <header className="flex justify-between items-center px-8 py-4 bg-[#7a0000] shadow-lg">
      <div className="text-xl font-extrabold tracking-wide">*FA*</div>
      <nav className="space-x-8">
        <a href="#" className="hover:text-yellow-300 transition">Home</a>
        <a href="#" className="hover:text-yellow-300 transition">About</a>
        <a href="#" className="hover:text-yellow-300 transition">Contact Us</a>
      </nav>
    </header>
  );
};

export default Header;
