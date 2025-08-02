import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, HelpCircle } from 'lucide-react';

const PricingPage: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const plans = [
    {
      name: 'Essentiel',
      monthlyPrice: 29.99,
      yearlyPrice: 299.90,
      yearlyDiscount: '17%',
      features: [
        'Accès à 1 département',
        'Alertes illimitées',
        'Support par email',
        '1 utilisateur Telegram',
      ],
      recommended: false,
      cta: 'Essayer gratuitement',
      link: '/register?plan=essential'
    },
    {
      name: 'Professionnel',
      monthlyPrice: 49.99,
      yearlyPrice: 479.90,
      yearlyDiscount: '20%',
      features: [
        'Accès à 5 départements',
        'Alertes illimitées',
        'Support prioritaire',
        '3 utilisateurs Telegram',
        'Tableau de bord analytique',
      ],
      recommended: true,
      cta: 'Essayer gratuitement',
      link: '/register?plan=professional'
    },
    {
      name: 'Entreprise',
      monthlyPrice: 99.99,
      yearlyPrice: 899.90,
      yearlyDiscount: '25%',
      features: [
        'Accès à tous les départements',
        'Alertes illimitées',
        'Support téléphonique dédié',
        'Utilisateurs Telegram illimités',
        'Tableau de bord analytique avancé',
        'API d\'intégration',
      ],
      recommended: false,
      cta: 'Essayer gratuitement',
      link: '/register?plan=enterprise'
    }
  ];

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Tarifs simples et transparents</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choisissez le plan qui correspond le mieux aux besoins de votre auto-école.
          </p>

          {/* Billing toggle */}
          <div className="flex justify-center mt-8">
            <div className="relative bg-gray-200 rounded-full p-1 flex">
              <button
                onClick={() => setBillingCycle('monthly')}
                className={`${
                  billingCycle === 'monthly' ? 'bg-white shadow-md' : 'bg-transparent'
                } relative w-32 py-2 text-sm font-medium rounded-full transition-all duration-200`}
              >
                Mensuel
              </button>
              <button
                onClick={() => setBillingCycle('yearly')}
                className={`${
                  billingCycle === 'yearly' ? 'bg-white shadow-md' : 'bg-transparent'
                } relative w-32 py-2 text-sm font-medium rounded-full transition-all duration-200`}
              >
                Annuel
                <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs py-0.5 px-2 rounded-full">
                  Économisez
                </span>
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl shadow-md overflow-hidden transform transition-all duration-200 hover:-translate-y-1 hover:shadow-xl ${
                plan.recommended ? 'ring-2 ring-blue-500 relative' : ''
              }`}
            >
              {plan.recommended && (
                <div className="absolute top-0 inset-x-0 transform translate-y-px">
                  <div className="bg-blue-500 text-white text-xs text-center font-semibold py-1">
                    RECOMMANDÉ
                  </div>
                </div>
              )}

              <div className={`px-6 py-8 ${plan.recommended ? 'pt-10' : ''}`}>
                <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
                <div className="mt-4 flex items-baseline">
                  <span className="text-4xl font-extrabold text-gray-900">
                    {billingCycle === 'monthly'
                      ? `${plan.monthlyPrice.toFixed(2)} €`
                      : `${plan.yearlyPrice.toFixed(2)} €`}
                  </span>
                  <span className="ml-1 text-xl font-medium text-gray-500">
                    {billingCycle === 'monthly' ? '/mois' : '/an'}
                  </span>
                </div>
                {billingCycle === 'yearly' && (
                  <p className="mt-1 text-sm text-green-600">
                    Économisez {plan.yearlyDiscount} par rapport au tarif mensuel
                  </p>
                )}

                <ul className="mt-6 space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <div className="flex-shrink-0">
                        <Check className="h-5 w-5 text-green-500" />
                      </div>
                      <p className="ml-3 text-gray-700">{feature}</p>
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <Link
                    to={plan.link}
                    className={`block w-full py-3 px-4 rounded-lg text-center font-medium ${
                      plan.recommended
                        ? 'bg-blue-600 text-white hover:bg-blue-700'
                        : 'bg-blue-50 text-blue-700 hover:bg-blue-100'
                    } transition-colors duration-200`}
                  >
                    {plan.cta}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">
            Questions fréquentes
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-0.5">
                  <HelpCircle className="h-5 w-5 text-blue-500" />
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-medium text-gray-900">
                    Comment fonctionne l'essai gratuit ?
                  </h3>
                  <p className="mt-2 text-gray-600">
                    Vous pouvez essayer gratuitement notre service pendant 7 jours. Aucune carte bancaire n'est requise pour l'essai. À la fin de la période d'essai, vous pourrez choisir un plan payant si le service vous convient.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-0.5">
                  <HelpCircle className="h-5 w-5 text-blue-500" />
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-medium text-gray-900">
                    Puis-je changer de plan à tout moment ?
                  </h3>
                  <p className="mt-2 text-gray-600">
                    Oui, vous pouvez passer à un plan supérieur à tout moment. Si vous passez à un plan inférieur, le changement prendra effet à la fin de votre cycle de facturation actuel.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-0.5">
                  <HelpCircle className="h-5 w-5 text-blue-500" />
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-medium text-gray-900">
                    Comment configurer les alertes Telegram ?
                  </h3>
                  <p className="mt-2 text-gray-600">
                    Après votre inscription, vous recevrez un lien pour rejoindre notre bot Telegram. Il vous suffit de suivre les instructions pour connecter votre compte et commencer à recevoir des alertes.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-0.5">
                  <HelpCircle className="h-5 w-5 text-blue-500" />
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-medium text-gray-900">
                    Y a-t-il une limite au nombre d'alertes ?
                  </h3>
                  <p className="mt-2 text-gray-600">
                    Non, tous nos plans incluent des alertes illimitées. Vous recevrez une notification chaque fois qu'une place d'examen devient disponible dans les départements que vous avez sélectionnés.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Vous avez d'autres questions ?
          </h2>
          <p className="text-gray-600 mb-6">
            Notre équipe est là pour vous aider. N'hésitez pas à nous contacter.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 transition-colors duration-200"
          >
            Contactez-nous
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;