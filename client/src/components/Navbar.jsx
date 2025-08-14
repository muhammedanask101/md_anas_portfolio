import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Menu, X } from "lucide-react";

const Navbar = () => {
 const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-amber-100 p-3 md:p-6 shadow-md/80 shadow-blue-300">
      <div className="flex justify-between items-center">
        <div className="font-bold text-[16px] md:text-[22px] tracking-wide">
          Web dev Portfolio
        </div>

        <div className="hidden md:flex text-[22px] space-x-4">
          <Link to="/" className="hover:text-cyan-50">Home</Link>
          <Link to="/projects" className="hover:text-cyan-50">Projects</Link>
          <Link to="/contact" className="hover:text-cyan-50">Contact</Link>
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden flex flex-col mt-2 text-[14px] space-y-2">
          <Link to="/" className="hover:text-cyan-50" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/projects" className="hover:text-cyan-50" onClick={() => setIsOpen(false)}>Projects</Link>
          <Link to="/contact" className="hover:text-cyan-50" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
};


export default Navbar;

