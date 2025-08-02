import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { user, logout } = useAuth();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path: string) => {
    return location.pathname === path
      ? 'text-blue-700 font-medium'
      : 'text-gray-700 hover:text-blue-600';
  };

  // Icônes SVG de remplacement
  const MessageSquare = () => (
    <svg className="h-8 w-8 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 1.657-1.343 3-3 3H7l-4 4V5c0-1.657 1.343-3 3-3h12c1.657 0 3 1.343 3 3v7z" />
    </svg>
  );

  const MenuIcon = () => (
    <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );

  const CloseIcon = () => (
    <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  );

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <MessageSquare />
              <span className="text-xl font-bold text-gray-900">AlertBot</span>
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className={`${isActive('/')} transition duration-150`}>
              Accueil
            </Link>
            <Link to="/pricing" className={`${isActive('/pricing')} transition duration-150`}>
              Tarifs
            </Link>
            {user ? (
              <>
                <Link to="/dashboard" className={`${isActive('/dashboard')} transition duration-150`}>
                  Tableau de bord
                </Link>
                <button
                  onClick={logout}
                  className="text-gray-700 hover:text-blue-600 transition duration-150"
                >
                  Déconnexion
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className={`${isActive('/login')} transition duration-150`}>
                  Connexion
                </Link>
                <Link
                  to="/register"
                  className="bg-blue-600 text-white px-4 py-2 rounded-md font-medium hover:bg-blue-700 transition duration-150"
                >
                  S'inscrire
                </Link>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className={`block px-3 py-2 rounded-md ${isActive('/')} text-base font-medium`}
              onClick={toggleMenu}
            >
              Accueil
            </Link>
            <Link
              to="/pricing"
              className={`block px-3 py-2 rounded-md ${isActive('/pricing')} text-base font-medium`}
              onClick={toggleMenu}
            >
              Tarifs
            </Link>
            {user ? (
              <>
                <Link
                  to="/dashboard"
                  className={`block px-3 py-2 rounded-md ${isActive('/dashboard')} text-base font-medium`}
                  onClick={toggleMenu}
                >
                  Tableau de bord
                </Link>
                <button
                  onClick={() => {
                    logout();
                    toggleMenu();
                  }}
                  className="block w-full text-left px-3 py-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 text-base font-medium"
                >
                  Déconnexion
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className={`block px-3 py-2 rounded-md ${isActive('/login')} text-base font-medium`}
                  onClick={toggleMenu}
                >
                  Connexion
                </Link>
                <Link
                  to="/register"
                  className="block px-3 py-2 rounded-md bg-blue-600 text-white text-base font-medium"
                  onClick={toggleMenu}
                >
                  S'inscrire
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;