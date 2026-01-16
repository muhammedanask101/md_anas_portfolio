import { useState } from 'react';
import { Menu, X } from "lucide-react";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { logout, reset } from '../slices/authSlice';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { admin } = useSelector(state => state.auth);

  const handleLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/adminlogin");
  };

  return (
    <nav className="bg-black text-amber-100 p-4 md:p-6 shadow-md/80 shadow-blue-300">
      <div className="flex justify-between items-center">
        <div className="font-bold text-[22px] tracking-wide">
          Web dev Portfolio
        </div>

        <div className="hidden md:flex text-[22px] space-x-4">
          <Link to="/" className="hover:text-cyan-50">Home</Link>
          <Link to="/contact" className="hover:text-cyan-50">Contact</Link>
          {admin && location.pathname.startsWith("/admin") && 
          ( <button onClick={handleLogout} className='hover:text-red-500 transition'>Logout</button> )}
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
          <Link to="/contact" className="hover:text-cyan-50" onClick={() => setIsOpen(false)}>Contact</Link>
          {admin && location.pathname.startsWith("/admin") && 
          ( <button onClick={handleLogout} className='text-left hover:text-red-500 transition'>Logout</button> )}
        </div>
      )}
    </nav>
  );
};


export default Navbar;

