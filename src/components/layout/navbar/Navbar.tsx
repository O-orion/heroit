import { Link } from 'react-router-dom';

export function Navbar() {
  return (
    <nav className="bg-gray-800 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="text-2xl font-bold hover:text-blue-400">
            Hero-Git
          </Link>

          <ul className="flex space-x-6">
            <li>
              <Link to="/" className="hover:text-blue-400">Home</Link>
            </li>
            <li>
              <Link to="/sobre" className="hover:text-blue-400">Sobre</Link>
            </li>
            <li>
              <Link to="/contato" className="hover:text-blue-400">Contato</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}