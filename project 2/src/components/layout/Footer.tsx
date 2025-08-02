import React from 'react';
import { Link } from 'react-router-dom';

// Icônes SVG de remplacement
const MessageSquare = () => (
  <svg className="h-6 w-6 text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 1.657-1.343 3-3 3H7l-4 4V5c0-1.657 1.343-3 3-3h12c1.657 0 3 1.343 3 3v7z" />
  </svg>
);

const Mail = () => (
  <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l9 6 9-6M21 8v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8m18-0L12 14 3 8" />
  </svg>
);

const Phone = () => (
  <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5h2l3.6 7.59-1.35 2.44A1 1 0 008 17h8a1 1 0 00.9-1.45L15.4 12H21" />
  </svg>
);

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <MessageSquare />
              <span className="text-xl font-bold">AlertBot</span>
            </div>
            <p className="text-gray-300 text-sm">
              Service d'alerte Telegram pour les auto-écoles et moniteurs indépendants.
              Recevez des notifications instantanées des places disponibles pour l'examen de permis de conduire.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white">Accueil</Link></li>
              <li><Link to="/pricing" className="text-gray-300 hover:text-white">Tarifs</Link></li>
              <li><Link to="/login" className="text-gray-300 hover:text-white">Connexion</Link></li>
              <li><Link to="/register" className="text-gray-300 hover:text-white">S'inscrire</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">Informations légales</h3>
            <ul className="space-y-2">
              <li><Link to="/terms" className="text-gray-300 hover:text-white">Conditions d'utilisation</Link></li>
              <li><Link to="/privacy" className="text-gray-300 hover:text-white">Politique de confidentialité</Link></li>
              <li><Link to="/refund" className="text-gray-300 hover:text-white">Politique de remboursement</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <Mail />
                <a href="mailto:contact@alertbot.fr" className="text-gray-300 hover:text-white">
                  contact@alertbot.fr
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Phone />
                <a href="tel:+33123456789" className="text-gray-300 hover:text-white">
                  +33 1 23 45 67 89
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 mt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} AlertBot. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;