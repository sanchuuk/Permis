import React from 'react';
import { Link } from 'react-router-dom';
import { Bell, Clock, Map, Shield, MessageSquare, CheckCircle } from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Ne manquez plus aucune place d'examen de permis
              </h1>
              <p className="text-xl text-blue-100">
                Recevez des alertes instantanées sur Telegram dès qu'une place d'examen de permis de conduire est disponible sur RDV Permis.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
                <Link
                  to="/register"
                  className="bg-white text-blue-700 hover:bg-blue-50 px-6 py-3 rounded-lg font-medium text-center transition-all duration-200 transform hover:scale-105 shadow-lg"
                >
                  Commencer maintenant
                </Link>
                <Link
                  to="/pricing"
                  className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-700 px-6 py-3 rounded-lg font-medium text-center transition-all duration-200"
                >
                  Voir les tarifs
                </Link>
              </div>
            </div>
            <div className="hidden md:block relative">
              <div className="bg-white rounded-lg shadow-2xl p-6 transform rotate-3 z-10 max-w-md mx-auto">
                <div className="flex items-center mb-4">
                  <MessageSquare className="h-10 w-10 text-blue-500" />
                  <div className="ml-3">
                    <h3 className="text-lg font-medium text-gray-900">AlertBot</h3>
                    <p className="text-gray-500">Notification</p>
                  </div>
                </div>
                <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
                  <p className="text-gray-800">
                    🚨 <strong>Nouvelle place disponible!</strong>
                  </p>
                  <p className="text-gray-600 mt-1">
                    Centre: Paris 15ème <br />
                    Date: 15 Juin 2025 <br />
                    Heure: 10:30
                  </p>
                  <div className="mt-3">
                    <a href="#" className="text-blue-600 font-medium hover:underline">Réserver maintenant →</a>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 bg-blue-200 rounded-lg transform rotate-6 -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Comment ça fonctionne</h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Un service simple et efficace pour ne plus manquer aucune place d'examen de permis.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-md p-6 transition-all duration-200 hover:shadow-lg">
              <div className="rounded-full bg-blue-100 w-12 h-12 flex items-center justify-center mb-4">
                <Bell className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Alertes instantanées</h3>
              <p className="text-gray-600">
                Recevez des notifications en temps réel directement sur Telegram dès qu'une place se libère.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 transition-all duration-200 hover:shadow-lg">
              <div className="rounded-full bg-blue-100 w-12 h-12 flex items-center justify-center mb-4">
                <Map className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Sélection par département</h3>
              <p className="text-gray-600">
                Configurez les départements qui vous intéressent pour recevoir uniquement les alertes pertinentes.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 transition-all duration-200 hover:shadow-lg">
              <div className="rounded-full bg-blue-100 w-12 h-12 flex items-center justify-center mb-4">
                <Clock className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Gain de temps</h3>
              <p className="text-gray-600">
                Plus besoin de vérifier manuellement. Notre bot surveille le site RDV Permis pour vous 24h/24.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Pourquoi choisir AlertBot?</h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Des avantages concrets pour les auto-écoles et moniteurs indépendants.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <CheckCircle className="h-6 w-6 text-green-500" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Optimisation du temps
                </h3>
                <p className="text-gray-600">
                  Concentrez-vous sur votre enseignement pendant que notre bot surveille les disponibilités. Économisez jusqu'à 10 heures par semaine.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <CheckCircle className="h-6 w-6 text-green-500" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Satisfaction client
                </h3>
                <p className="text-gray-600">
                  Offrez un service de qualité à vos élèves en leur trouvant des places d'examen plus rapidement.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <CheckCircle className="h-6 w-6 text-green-500" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Taux de réussite
                </h3>
                <p className="text-gray-600">
                  Permettez à vos élèves de passer leur examen quand ils sont prêts, pas quand les places sont disponibles.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <CheckCircle className="h-6 w-6 text-green-500" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Service clé en main
                </h3>
                <p className="text-gray-600">
                  Aucune compétence technique requise. Configuration simple et intuitive en quelques minutes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Ce que nos clients disent</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold text-xl">
                  M
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-900">Michel Dupont</h4>
                  <p className="text-gray-500">Auto-école Sécurité, Lyon</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "Grâce à AlertBot, nous avons réduit le temps d'attente pour nos élèves de 3 mois à seulement 2 semaines. Un outil indispensable pour toute auto-école !"
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold text-xl">
                  S
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-900">Sophie Martin</h4>
                  <p className="text-gray-500">Monitrice indépendante, Paris</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "En tant que monitrice indépendante, je n'ai pas le temps de vérifier constamment les disponibilités. AlertBot m'a permis d'être plus efficace et d'offrir un meilleur service à mes élèves."
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold text-xl">
                  J
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-900">Jean-Pierre Lefèvre</h4>
                  <p className="text-gray-500">Auto-école du Centre, Bordeaux</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "Un service fiable qui nous a permis d'améliorer significativement notre organisation. Nos élèves sont ravis de pouvoir passer leur examen plus rapidement."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Prêt à optimiser votre auto-école?</h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Rejoignez les centaines d'auto-écoles qui font confiance à AlertBot pour trouver des places d'examen rapidement.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link
              to="/register"
              className="bg-white text-blue-700 hover:bg-blue-50 px-8 py-4 rounded-lg font-medium text-center transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              Commencer maintenant
            </Link>
            <Link
              to="/pricing"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-700 px-8 py-4 rounded-lg font-medium text-center transition-all duration-200"
            >
              Voir les tarifs
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;