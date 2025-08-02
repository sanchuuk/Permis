import React from 'react';
import { Bell, MapPin, Users, CheckCircle, Clock, BarChart2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Overview: React.FC = () => {
  // Mock data
  const stats = {
    selectedDepartments: 3,
    alertsReceived: 47,
    successfulBookings: 12,
    responsiveness: '92%',
  };

  const recentAlerts = [
    { id: 1, department: '75 - Paris', date: '15 Juin 2025', time: '10:30', wasBooked: true },
    { id: 2, department: '92 - Hauts-de-Seine', date: '20 Juin 2025', time: '14:15', wasBooked: false },
    { id: 3, department: '75 - Paris', date: '22 Juin 2025', time: '09:00', wasBooked: true },
    { id: 4, department: '94 - Val-de-Marne', date: '30 Juin 2025', time: '11:45', wasBooked: false },
  ];

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Tableau de bord</h1>
        <p className="text-gray-600">
          Bienvenue sur votre tableau de bord de gestion des alertes d'examen du permis de conduire.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <div className="flex items-center">
            <div className="rounded-full bg-blue-100 p-3 mr-4">
              <MapPin className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">Départements suivis</p>
              <p className="text-2xl font-bold text-gray-900">{stats.selectedDepartments}</p>
            </div>
          </div>
          <div className="mt-4">
            <Link to="/dashboard/departments" className="text-sm text-blue-600 hover:text-blue-800">
              Modifier les départements →
            </Link>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <div className="flex items-center">
            <div className="rounded-full bg-amber-100 p-3 mr-4">
              <Bell className="h-6 w-6 text-amber-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">Alertes reçues</p>
              <p className="text-2xl font-bold text-gray-900">{stats.alertsReceived}</p>
            </div>
          </div>
          <div className="mt-4">
            <Link to="/dashboard/alerts" className="text-sm text-blue-600 hover:text-blue-800">
              Configurer les alertes →
            </Link>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <div className="flex items-center">
            <div className="rounded-full bg-green-100 p-3 mr-4">
              <CheckCircle className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">Réservations réussies</p>
              <p className="text-2xl font-bold text-gray-900">{stats.successfulBookings}</p>
            </div>
          </div>
          <div className="mt-4">
            <Link to="/dashboard/history" className="text-sm text-blue-600 hover:text-blue-800">
              Voir l'historique →
            </Link>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <div className="flex items-center">
            <div className="rounded-full bg-purple-100 p-3 mr-4">
              <Clock className="h-6 w-6 text-purple-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">Taux de réactivité</p>
              <p className="text-2xl font-bold text-gray-900">{stats.responsiveness}</p>
            </div>
          </div>
          <div className="mt-4">
            <Link to="/dashboard/stats" className="text-sm text-blue-600 hover:text-blue-800">
              Voir les statistiques →
            </Link>
          </div>
        </div>
      </div>

      {/* Recent Alerts */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-100 mb-8">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-medium text-gray-900">Alertes récentes</h2>
        </div>
        <div className="divide-y divide-gray-200">
          {recentAlerts.map((alert) => (
            <div key={alert.id} className="px-6 py-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className={`rounded-full h-10 w-10 flex items-center justify-center ${alert.wasBooked ? 'bg-green-100 text-green-600' : 'bg-blue-100 text-blue-600'}`}>
                    {alert.wasBooked ? (
                      <CheckCircle className="h-5 w-5" />
                    ) : (
                      <Bell className="h-5 w-5" />
                    )}
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-900">{alert.department}</p>
                    <p className="text-sm text-gray-500">
                      {alert.date} à {alert.time}
                    </p>
                  </div>
                </div>
                <div>
                  {alert.wasBooked ? (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Réservé
                    </span>
                  ) : (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      Notifié
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="px-6 py-4 bg-gray-50 rounded-b-lg">
          <Link to="/dashboard/history" className="text-sm text-blue-600 hover:text-blue-800">
            Voir toutes les alertes →
          </Link>
        </div>
      </div>

      {/* Activity Chart */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-100">
        <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
          <h2 className="text-lg font-medium text-gray-900">Activité récente</h2>
          <div className="flex space-x-2">
            <select className="text-sm border-gray-300 rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50">
              <option>7 derniers jours</option>
              <option>30 derniers jours</option>
              <option>3 derniers mois</option>
            </select>
          </div>
        </div>
        <div className="p-6">
          <div className="h-60 flex items-center justify-center bg-gray-50 rounded-lg">
            <div className="text-center">
              <BarChart2 className="h-10 w-10 text-gray-400 mx-auto mb-2" />
              <p className="text-gray-500">Graphique d'activité</p>
              <p className="text-sm text-gray-400">Représentation des alertes au fil du temps</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;