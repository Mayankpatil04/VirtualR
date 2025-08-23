import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../assets/logo.png";
import { navItems } from "../constants";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <img className="h-10 w-10 mr-2" src={logo} alt="logo" />
            <span className="text-xl  tracking-tight">VirtualR</span>
          </div>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => (
              <li key={index}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>

          {/* Desktop Buttons */}
          <div className="hidden lg:flex justify-between items-center space-x-12">
            <a href="#" className="py-2 px-3 border rounded-md">
              Sign In
            </a>
            <a
              href="#"
              className="py-2 px-3 rounded-md bg-gradient-to-r from-orange-500 to-orange-800"
            >
              Create an Account
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden md:flex flex-col justify-end"
            onClick={toggleMenu}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav (when open) */}
        {isOpen && (
          <div className="lg:hidden mt-4 flex flex-col space-y-4">
            {navItems.map((item, index) => (
              <a key={index} href={item.href} className="block">
                {item.label}
              </a>
            ))}
            
            <a href="#" className="py-2 px-3 border rounded-md">
              Sign In
            </a>
            <a
              href="#"
              className="py-2 px-3 rounded-md bg-gradient-to-r from-orange-500 to-orange-800"
            >
              Create an Account
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
