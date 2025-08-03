import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav>
      <div>My Portfolio</div>
      <div>
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}
