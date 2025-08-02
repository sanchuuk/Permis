import React from 'react';
import { Download, CreditCard } from 'lucide-react';

const BillingHistory: React.FC = () => {
  // Mock data
  const invoices = [
    {
      id: 'INV-2025-001',
      amount: '49.99',
      status: 'Payé',
      date: '01/06/2025',
      description: 'Abonnement Professionnel - Juin 2025',
    },
    {
      id: 'INV-2025-002',
      amount: '49.99',
      status: 'Payé',
      date: '01/05/2025',
      description: 'Abonnement Professionnel - Mai 2025',
    },
    {
      id: 'INV-2025-003',
      amount: '49.99',
      status: 'Payé',
      date: '01/04/2025',
      description: 'Abonnement Professionnel - Avril 2025',
    },
    {
      id: 'INV-2025-004',
      amount: '49.99',
      status: 'Payé',
      date: '01/03/2025',
      description: 'Abonnement Professionnel - Mars 2025',
    },
  ];

  const paymentMethods = [
    {
      id: 'pm-1',
      type: 'card',
      last4: '4242',
      expMonth: '12',
      expYear: '2028',
      brand: 'Visa',
      isDefault: true,
    },
  ];

  return (
    <div>
      <div className="bg-white shadow-sm rounded-lg overflow-hidden mb-8">
        <div className="p-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Facturation</h1>
          <p className="text-gray-600 mb-6">
            Gérez vos moyens de paiement et consultez l'historique de vos factures.
          </p>

          <div className="space-y-8">
            {/* Subscription info */}
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Abonnement actuel</h3>

              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="font-medium text-gray-900">Forfait Professionnel</h4>
                    <p className="text-sm text-gray-500">49.99€ par mois</p>
                    <ul className="mt-2 text-sm text-gray-500 space-y-1">
                      <li className="flex items-center">
                        <svg className="h-4 w-4 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Accès à 5 départements
                      </li>
                      <li className="flex items-center">
                        <svg className="h-4 w-4 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Alertes illimitées
                      </li>
                      <li className="flex items-center">
                        <svg className="h-4 w-4 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        3 utilisateurs Telegram
                      </li>
                    </ul>
                  </div>
                  <span className="px-2 py-1 text-xs font-medium rounded-full text-green-800 bg-green-100">
                    Actif
                  </span>
                </div>
                <div className="mt-4 border-t border-gray-200 pt-4 text-sm text-gray-500">
                  <p>
                    Prochain prélèvement le <span className="font-medium">15 juillet 2025</span>
                  </p>
                  <div className="mt-2 flex space-x-4">
                    <a
                      href="#"
                      className="text-blue-600 hover:text-blue-800 font-medium"
                    >
                      Changer de forfait
                    </a>
                    <a
                      href="#"
                      className="text-blue-600 hover:text-blue-800 font-medium"
                    >
                      Annuler l'abonnement
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Payment methods */}
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-medium text-gray-900">Moyens de paiement</h3>
                <button className="inline-flex items-center px-3 py-1 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                  Ajouter
                </button>
              </div>

              <div className="space-y-4">
                {paymentMethods.map((method) => (
                  <div key={method.id} className="bg-white p-4 rounded-lg border border-gray-200">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="flex-shrink-0">
                          <CreditCard className="h-8 w-8 text-gray-400" />
                        </div>
                        <div className="ml-4">
                          <p className="text-sm font-medium text-gray-900">
                            {method.brand} **** {method.last4}
                          </p>
                          <p className="text-sm text-gray-500">
                            Expire {method.expMonth}/{method.expYear}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        {method.isDefault && (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            Par défaut
                          </span>
                        )}
                        <div className="flex space-x-2">
                          <button className="text-sm text-blue-600 hover:text-blue-800">
                            Modifier
                          </button>
                          <button className="text-sm text-red-600 hover:text-red-800">
                            Supprimer
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Billing history */}
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Historique de facturation</h3>

              <div className="overflow-hidden border border-gray-200 rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        N° de facture
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Date
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Description
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Montant
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Statut
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {invoices.map((invoice) => (
                      <tr key={invoice.id}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {invoice.id}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {invoice.date}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {invoice.description}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {invoice.amount}€
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                            {invoice.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <button className="text-blue-600 hover:text-blue-900 inline-flex items-center">
                            <Download className="h-4 w-4 mr-1" />
                            PDF
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BillingHistory;