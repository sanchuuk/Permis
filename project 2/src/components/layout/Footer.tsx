import React from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <MessageSquare className="h-6 w-6 text-blue-400" />
              <span className="text-xl font-bold">AlertBot</span>
            </div>
            <p className="text-gray-300 text-sm">
              Service d'alerte Telegram pour les auto-écoles et moniteurs indépendants. Recevez des notifications instantanées des places disponibles pour l'examen de permis de conduire.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition duration-150">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-gray-300 hover:text-white transition duration-150">
                  Tarifs
                </Link>
              </li>
              <li>
                <Link to="/login" className="text-gray-300 hover:text-white transition duration-150">
                  Connexion
                </Link>
              </li>
              <li>
                <Link to="/register" className="text-gray-300 hover:text-white transition duration-150">
                  S'inscrire
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Informations légales</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/terms" className="text-gray-300 hover:text-white transition duration-150">
                  Conditions d'utilisation
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-300 hover:text-white transition duration-150">
                  Politique de confidentialité
                </Link>
              </li>
              <li>
                <Link to="/refund" className="text-gray-300 hover:text-white transition duration-150">
                  Politique de remboursement
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-gray-400" />
                <a href="mailto:contact@alertbot.fr" className="text-gray-300 hover:text-white transition duration-150">
                  contact@alertbot.fr
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-gray-400" />
                <a href="tel:+33123456789" className="text-gray-300 hover:text-white transition duration-150">
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