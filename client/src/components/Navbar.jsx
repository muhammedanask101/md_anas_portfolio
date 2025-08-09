import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-black text-amber-100 p-6 flex justify-between">
      <div className="font-bold text-[22px]">My Portfolio</div>
      <div className="space-x-4">
        <Link to="/" className="hover:text-cyan-50 text-[22px]">Home</Link>
        <Link to="/projects" className="hover:text-cyan-50 text-[22px]">Projects</Link>
        <Link to="/contact" className="hover:text-cyan-50 text-[22px]">Contact</Link>
      </div>
    </nav>
  );
}

