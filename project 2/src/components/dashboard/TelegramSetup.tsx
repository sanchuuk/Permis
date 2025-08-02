import React, { useState } from 'react';
import { MessageSquare, Copy, CheckCircle, RefreshCw } from 'lucide-react';

const TelegramSetup: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [botConnected, setBotConnected] = useState(false);
  
  // Mock data
  const botUsername = '@RDVPermisAlertBot';
  const connectCode = 'AE123456789';

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const handleCheckConnection = () => {
    setIsLoading(true);
    
    // Simulate API check
    setTimeout(() => {
      setBotConnected(true);
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div>
      <div className="bg-white shadow-sm rounded-lg overflow-hidden">
        <div className="p-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Configuration Telegram</h1>
          <p className="text-gray-600 mb-6">
            Connectez votre compte Telegram pour recevoir des alertes en temps réel lorsque des places d'examen sont disponibles.
          </p>

          {botConnected ? (
            <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-medium text-green-800">Compte Telegram connecté</h3>
                  <p className="mt-2 text-green-700">
                    Votre compte Telegram est correctement configuré pour recevoir des alertes. 
                    Vous recevrez désormais des notifications dès qu'une place d'examen sera disponible dans les départements sélectionnés.
                  </p>
                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-green-700 bg-green-100 hover:bg-green-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                    >
                      Tester la notification
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-8">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="text-lg font-medium text-blue-800 mb-3">Étapes de configuration</h3>
                <ol className="space-y-4">
                  <li className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-8 w-8 rounded-full bg-blue-200 text-blue-600 font-bold">
                        1
                      </div>
                    </div>
                    <div className="ml-4">
                      <p className="text-blue-700">
                        Ouvrez l'application Telegram sur votre appareil mobile ou ordinateur.
                      </p>
                    </div>
                  </li>
                  
                  <li className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-8 w-8 rounded-full bg-blue-200 text-blue-600 font-bold">
                        2
                      </div>
                    </div>
                    <div className="ml-4">
                      <p className="text-blue-700">
                        Recherchez le bot AlertBot sur Telegram : <strong>{botUsername}</strong>
                        <button 
                          onClick={() => copyToClipboard(botUsername)}
                          className="ml-2 inline-flex items-center text-blue-600 hover:text-blue-800"
                        >
                          {copied ? <CheckCircle className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                        </button>
                      </p>
                      <div className="mt-2">
                        <a 
                          href={`https://t.me/RDVPermisAlertBot`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200"
                        >
                          <MessageSquare className="mr-2 h-4 w-4" />
                          Ouvrir dans Telegram
                        </a>
                      </div>
                    </div>
                  </li>
                  
                  <li className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-8 w-8 rounded-full bg-blue-200 text-blue-600 font-bold">
                        3
                      </div>
                    </div>
                    <div className="ml-4">
                      <p className="text-blue-700">
                        Démarrez une conversation avec le bot en cliquant sur "Démarrer" ou en envoyant la commande <code>/start</code>.
                      </p>
                    </div>
                  </li>
                  
                  <li className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-8 w-8 rounded-full bg-blue-200 text-blue-600 font-bold">
                        4
                      </div>
                    </div>
                    <div className="ml-4">
                      <p className="text-blue-700">
                        Envoyez le code de connexion suivant au bot :
                      </p>
                      <div className="mt-2 flex items-center">
                        <code className="px-3 py-2 bg-white border border-blue-300 rounded-md font-mono text-blue-800">
                          {connectCode}
                        </code>
                        <button 
                          onClick={() => copyToClipboard(connectCode)}
                          className="ml-2 inline-flex items-center px-2 py-1 border border-transparent text-sm font-medium rounded-md text-blue-600 hover:text-blue-700"
                        >
                          {copied ? <CheckCircle className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                        </button>
                      </div>
                    </div>
                  </li>
                  
                  <li className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-8 w-8 rounded-full bg-blue-200 text-blue-600 font-bold">
                        5
                      </div>
                    </div>
                    <div className="ml-4">
                      <p className="text-blue-700">
                        Une fois le code envoyé, cliquez sur "Vérifier la connexion" ci-dessous pour confirmer que tout fonctionne correctement.
                      </p>
                    </div>
                  </li>
                </ol>
              </div>

              <div className="flex justify-center">
                <button
                  onClick={handleCheckConnection}
                  disabled={isLoading}
                  className={`inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 ${
                    isLoading ? 'opacity-70 cursor-not-allowed' : 'hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
                  }`}
                >
                  {isLoading ? (
                    <>
                      <RefreshCw className="animate-spin mr-2 h-5 w-5" />
                      Vérification en cours...
                    </>
                  ) : (
                    <>
                      <RefreshCw className="mr-2 h-5 w-5" />
                      Vérifier la connexion
                    </>
                  )}
                </button>
              </div>
            </div>
          )}

          {/* Additional Telegram settings */}
          {botConnected && (
            <div className="mt-8">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Paramètres supplémentaires</h3>
              
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium text-gray-700">Utilisateurs autorisés</h4>
                    <p className="text-sm text-gray-500">
                      Ajoutez d'autres comptes Telegram autorisés à recevoir des alertes
                    </p>
                  </div>
                  <button className="px-3 py-1 bg-white border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">
                    Gérer
                  </button>
                </div>
              </div>
              
              <div className="mt-4 bg-gray-50 p-4 rounded-lg border border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-700">Mode silencieux</h4>
                    <p className="text-sm text-gray-500">
                      Les alertes seront envoyées sans notification sonore
                    </p>
                  </div>
                  <label className="inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" />
                    <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  </label>
                </div>
              </div>
              
              <div className="mt-4 bg-gray-50 p-4 rounded-lg border border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-700">Déconnexion</h4>
                    <p className="text-sm text-gray-500">
                      Déconnecter votre compte Telegram du service d'alertes
                    </p>
                  </div>
                  <button className="px-3 py-1 bg-white border border-red-300 rounded-md text-sm font-medium text-red-600 hover:bg-red-50">
                    Déconnecter
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TelegramSetup;