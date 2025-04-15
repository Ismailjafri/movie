import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-yellow-400">MovieDB</Link>
        <div className="space-x-6">
          <Link to="/" className="hover:text-yellow-400 transition">Home</Link>
          <Link to="/search" className="hover:text-yellow-400 transition">Search</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;