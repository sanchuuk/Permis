import React from 'react';
import { Routes, Route, NavLink, useNavigate } from 'react-router-dom';
import { MessageSquare, MapPin, Bell, Settings, LogOut, Home, CreditCard, BarChart2, AlertCircle, ChevronDown, User } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import DepartmentSelector from '../components/dashboard/DepartmentSelector';
import AlertSettings from '../components/dashboard/AlertSettings';
import TelegramSetup from '../components/dashboard/TelegramSetup';
import AccountSettings from '../components/dashboard/AccountSettings';
import BillingHistory from '../components/dashboard/BillingHistory';
import Overview from '../components/dashboard/Overview';

const DashboardPage: React.FC = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-white shadow-md fixed inset-y-0 pt-16 hidden md:block">
          <div className="px-4 py-6">
            <div className="flex items-center space-x-3 mb-8">
              <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                <User className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <p className="font-medium text-gray-900">{user?.firstName} {user?.lastName}</p>
                <p className="text-sm text-gray-500">{user?.companyName}</p>
              </div>
            </div>

            <nav className="space-y-1">
              <NavLink
                to="/dashboard"
                end
                className={({ isActive }) =>
                  `flex items-center px-4 py-3 text-sm font-medium rounded-md ${
                    isActive
                      ? 'bg-blue-50 text-blue-700'
                      : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                  }`
                }
              >
                <Home className="mr-3 h-5 w-5" />
                Tableau de bord
              </NavLink>

              <NavLink
                to="/dashboard/departments"
                className={({ isActive }) =>
                  `flex items-center px-4 py-3 text-sm font-medium rounded-md ${
                    isActive
                      ? 'bg-blue-50 text-blue-700'
                      : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                  }`
                }
              >
                <MapPin className="mr-3 h-5 w-5" />
                Départements
              </NavLink>

              <NavLink
                to="/dashboard/telegram"
                className={({ isActive }) =>
                  `flex items-center px-4 py-3 text-sm font-medium rounded-md ${
                    isActive
                      ? 'bg-blue-50 text-blue-700'
                      : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                  }`
                }
              >
                <MessageSquare className="mr-3 h-5 w-5" />
                Configuration Telegram
              </NavLink>

              <NavLink
                to="/dashboard/alerts"
                className={({ isActive }) =>
                  `flex items-center px-4 py-3 text-sm font-medium rounded-md ${
                    isActive
                      ? 'bg-blue-50 text-blue-700'
                      : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                  }`
                }
              >
                <Bell className="mr-3 h-5 w-5" />
                Paramètres d'alertes
              </NavLink>

              <NavLink
                to="/dashboard/billing"
                className={({ isActive }) =>
                  `flex items-center px-4 py-3 text-sm font-medium rounded-md ${
                    isActive
                      ? 'bg-blue-50 text-blue-700'
                      : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                  }`
                }
              >
                <CreditCard className="mr-3 h-5 w-5" />
                Facturation
              </NavLink>

              <NavLink
                to="/dashboard/account"
                className={({ isActive }) =>
                  `flex items-center px-4 py-3 text-sm font-medium rounded-md ${
                    isActive
                      ? 'bg-blue-50 text-blue-700'
                      : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                  }`
                }
              >
                <Settings className="mr-3 h-5 w-5" />
                Paramètres du compte
              </NavLink>

              <button
                onClick={handleLogout}
                className="w-full flex items-center px-4 py-3 text-sm font-medium rounded-md text-gray-700 hover:bg-gray-50 hover:text-gray-900"
              >
                <LogOut className="mr-3 h-5 w-5" />
                Déconnexion
              </button>
            </nav>
          </div>
        </div>

        {/* Mobile navbar */}
        <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-10">
          <div className="grid grid-cols-5 h-16">
            <NavLink
              to="/dashboard"
              end
              className={({ isActive }) =>
                `flex flex-col items-center justify-center ${
                  isActive ? 'text-blue-600' : 'text-gray-600'
                }`
              }
            >
              <Home className="h-6 w-6" />
              <span className="text-xs mt-1">Accueil</span>
            </NavLink>

            <NavLink
              to="/dashboard/departments"
              className={({ isActive }) =>
                `flex flex-col items-center justify-center ${
                  isActive ? 'text-blue-600' : 'text-gray-600'
                }`
              }
            >
              <MapPin className="h-6 w-6" />
              <span className="text-xs mt-1">Départements</span>
            </NavLink>

            <NavLink
              to="/dashboard/telegram"
              className={({ isActive }) =>
                `flex flex-col items-center justify-center ${
                  isActive ? 'text-blue-600' : 'text-gray-600'
                }`
              }
            >
              <MessageSquare className="h-6 w-6" />
              <span className="text-xs mt-1">Telegram</span>
            </NavLink>

            <NavLink
              to="/dashboard/alerts"
              className={({ isActive }) =>
                `flex flex-col items-center justify-center ${
                  isActive ? 'text-blue-600' : 'text-gray-600'
                }`
              }
            >
              <Bell className="h-6 w-6" />
              <span className="text-xs mt-1">Alertes</span>
            </NavLink>

            <NavLink
              to="/dashboard/account"
              className={({ isActive }) =>
                `flex flex-col items-center justify-center ${
                  isActive ? 'text-blue-600' : 'text-gray-600'
                }`
              }
            >
              <Settings className="h-6 w-6" />
              <span className="text-xs mt-1">Compte</span>
            </NavLink>
          </div>
        </div>

        {/* Main content */}
        <div className="md:ml-64 flex-1">
          <div className="py-16 px-4 sm:px-6 lg:px-8">
            <Routes>
              <Route path="/" element={<Overview />} />
              <Route path="/departments" element={<DepartmentSelector />} />
              <Route path="/telegram" element={<TelegramSetup />} />
              <Route path="/alerts" element={<AlertSettings />} />
              <Route path="/billing" element={<BillingHistory />} />
              <Route path="/account" element={<AccountSettings />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;