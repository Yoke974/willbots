const Header = () => (
  <header className="fixed w-full top-0 left-0 z-50 py-4 px-6 backdrop-blur-md bg-[#0a0f1c]/80 border-b border-[#1a1f2e]">
    <div className="container mx-auto flex justify-between items-center">
      <div className="flex items-center space-x-3">
        <div className="w-3 h-3 rounded-full bg-[#00d4ff] animate-pulse"></div>
        <div className="text-2xl font-bold">
          <span className="text-[#00d4ff]">Will</span> <span className="text-white">Gigan</span>
        </div>
      </div>
      <nav className="hidden md:flex space-x-8 items-center">
        <a href="#services" className="nav-link text-[#8892b0] hover:text-white">Services</a>
        <a href="#pricing" className="nav-link text-[#8892b0] hover:text-white">Pricing</a>
        <a href="#linkedin" className="nav-link text-[#8892b0] hover:text-white">Latest Post</a>
        <a href="#contact" className="nav-link text-[#8892b0] hover:text-white">Contact</a>
        <a href="https://www.linkedin.com/in/will-gigan-639721376/" target="_blank" className="text-[#00d4ff] hover:text-[#ff00ff] transition-colors">
          <i className="fab fa-linkedin-in text-xl"></i>
        </a>
      </nav>
    </div>
  </header>
);

export default Header; 