import { useState } from "react";
import { Link } from "react-scroll";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Home", to: "hero" },
    { name: "About", to: "about" },
    { name: "Skills", to: "skills" },
    { name: "Projects", to: "projects" },
    { name: "Experience", to: "experience" },
    { name: "Education", to: "education" },
    { name: "Why Hire Me", to: "why" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-xl border-b border-white/10">

      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}

        <Link
          to="hero"
          smooth={true}
          duration={500}
          className="text-2xl font-bold text-white cursor-pointer"
        >
          Likith<span className="text-violet-400">.</span>
        </Link>


        {/* DESKTOP NAVBAR */}

        <div className="hidden md:flex items-center gap-7">

          {menuItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              smooth={true}
              duration={500}
              offset={-80}
              className="text-gray-300 hover:text-white transition cursor-pointer"
            >
              {item.name}
            </Link>
          ))}

        </div>


        {/* MOBILE HAMBURGER */}

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden w-11 h-11 rounded-xl border border-white/10 bg-white/5 flex flex-col items-center justify-center gap-1.5 hover:border-violet-400 transition cursor-pointer"
        >

          <span
            className={`w-6 h-0.5 bg-white transition-all duration-300 ${
              isOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />

          <span
            className={`w-6 h-0.5 bg-white transition-all duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          />

          <span
            className={`w-6 h-0.5 bg-white transition-all duration-300 ${
              isOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />

        </button>

      </div>


      {/* MOBILE MENU */}

      <div
        className={`md:hidden absolute top-full right-5 mt-3 w-64 rounded-2xl bg-black/90 backdrop-blur-xl border border-white/10 shadow-2xl overflow-hidden transition-all duration-300 ${
          isOpen
            ? "opacity-100 translate-y-0 visible"
            : "opacity-0 -translate-y-3 invisible"
        }`}
      >

        <div className="p-3">

          {menuItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              smooth={true}
              duration={500}
              offset={-80}
              onClick={() => setIsOpen(false)}
              className="block px-5 py-3 rounded-xl text-gray-300 hover:text-white hover:bg-white/10 transition cursor-pointer"
            >
              {item.name}
            </Link>
          ))}

        </div>

      </div>

    </nav>
  );
}

export default Navbar;