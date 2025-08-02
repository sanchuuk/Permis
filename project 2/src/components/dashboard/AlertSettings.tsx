import React, { useState } from 'react';
import { Bell, Clock, Calendar, Save } from 'lucide-react';

const AlertSettings: React.FC = () => {
  const [settings, setSettings] = useState({
    enableAlerts: true,
    dailyLimit: 20,
    timeRestrictions: {
      enabled: false,
      startTime: '08:00',
      endTime: '20:00',
    },
    dayRestrictions: {
      enabled: false,
      days: {
        monday: true,
        tuesday: true,
        wednesday: true,
        thursday: true,
        friday: true,
        saturday: false,
        sunday: false,
      },
    },
    autoReservation: false,
  });

  const [isSaving, setIsSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  const handleToggle = (field: string) => {
    setSettings(prev => ({
      ...prev,
      [field]: !prev[field as keyof typeof prev],
    }));
  };

  const handleNestedToggle = (parent: string, field: string) => {
    setSettings(prev => ({
      ...prev,
      [parent]: {
        ...prev[parent as keyof typeof prev],
        [field]: !(prev[parent as keyof typeof prev] as any)[field],
      },
    }));
  };

  const handleDayToggle = (day: string) => {
    setSettings(prev => ({
      ...prev,
      dayRestrictions: {
        ...prev.dayRestrictions,
        days: {
          ...prev.dayRestrictions.days,
          [day]: !prev.dayRestrictions.days[day as keyof typeof prev.dayRestrictions.days],
        },
      },
    }));
  };

  const handleTimeChange = (field: string, value: string) => {
    setSettings(prev => ({
      ...prev,
      timeRestrictions: {
        ...prev.timeRestrictions,
        [field]: value,
      },
    }));
  };

  const handleDailyLimitChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value >= 0) {
      setSettings(prev => ({
        ...prev,
        dailyLimit: value,
      }));
    }
  };

  const handleSave = () => {
    setIsSaving(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSaving(false);
      setSaved(true);
      
      // Reset saved state after 3 seconds
      setTimeout(() => {
        setSaved(false);
      }, 3000);
    }, 1000);
  };

  return (
    <div>
      <div className="bg-white shadow-sm rounded-lg overflow-hidden">
        <div className="p-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Paramètres d'alertes</h1>
          <p className="text-gray-600 mb-6">
            Personnalisez la façon dont vous souhaitez recevoir les alertes de disponibilité d'examen.
          </p>

          <div className="space-y-6">
            {/* General Settings */}
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <h3 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
                <Bell className="h-5 w-5 text-blue-500 mr-2" />
                Paramètres généraux
              </h3>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium text-gray-700">Activer les alertes</h4>
                    <p className="text-sm text-gray-500">
                      Recevez des notifications lorsque des places sont disponibles
                    </p>
                  </div>
                  <label className="inline-flex items-center cursor-pointer">
                    <input 
                      type="checkbox" 
                      className="sr-only peer" 
                      checked={settings.enableAlerts}
                      onChange={() => handleToggle('enableAlerts')}
                    />
                    <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  </label>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium text-gray-700">Limite journalière d'alertes</h4>
                    <p className="text-sm text-gray-500">
                      Nombre maximum d'alertes à recevoir par jour
                    </p>
                  </div>
                  <input
                    type="number"
                    min="0"
                    value={settings.dailyLimit}
                    onChange={handleDailyLimitChange}
                    disabled={!settings.enableAlerts}
                    className="w-20 px-3 py-2 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-blue-500 focus:border-blue-500 disabled:opacity-50 disabled:bg-gray-100"
                  />
                </div>
              </div>
            </div>

            {/* Time Restrictions */}
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <h3 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
                <Clock className="h-5 w-5 text-blue-500 mr-2" />
                Restrictions horaires
              </h3>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium text-gray-700">Activer les restrictions horaires</h4>
                    <p className="text-sm text-gray-500">
                      Limiter les alertes à certaines heures de la journée
                    </p>
                  </div>
                  <label className="inline-flex items-center cursor-pointer">
                    <input 
                      type="checkbox" 
                      className="sr-only peer" 
                      checked={settings.timeRestrictions.enabled}
                      onChange={() => handleNestedToggle('timeRestrictions', 'enabled')}
                      disabled={!settings.enableAlerts}
                    />
                    <div className={`relative w-11 h-6 ${!settings.enableAlerts ? 'bg-gray-200 opacity-50' : 'bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300'} rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600`}></div>
                  </label>
                </div>

                {settings.timeRestrictions.enabled && (
                  <div className="grid grid-cols-2 gap-4 mt-2">
                    <div>
                      <label htmlFor="startTime" className="block text-sm font-medium text-gray-700 mb-1">
                        Heure de début
                      </label>
                      <input
                        type="time"
                        id="startTime"
                        value={settings.timeRestrictions.startTime}
                        onChange={(e) => handleTimeChange('startTime', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="endTime" className="block text-sm font-medium text-gray-700 mb-1">
                        Heure de fin
                      </label>
                      <input
                        type="time"
                        id="endTime"
                        value={settings.timeRestrictions.endTime}
                        onChange={(e) => handleTimeChange('endTime', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Day Restrictions */}
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <h3 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
                <Calendar className="h-5 w-5 text-blue-500 mr-2" />
                Restrictions par jour
              </h3>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium text-gray-700">Activer les restrictions par jour</h4>
                    <p className="text-sm text-gray-500">
                      Limiter les alertes à certains jours de la semaine
                    </p>
                  </div>
                  <label className="inline-flex items-center cursor-pointer">
                    <input 
                      type="checkbox" 
                      className="sr-only peer" 
                      checked={settings.dayRestrictions.enabled}
                      onChange={() => handleNestedToggle('dayRestrictions', 'enabled')}
                      disabled={!settings.enableAlerts}
                    />
                    <div className={`relative w-11 h-6 ${!settings.enableAlerts ? 'bg-gray-200 opacity-50' : 'bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300'} rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600`}></div>
                  </label>
                </div>

                {settings.dayRestrictions.enabled && (
                  <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-2 mt-2">
                    {Object.entries({
                      monday: 'Lun',
                      tuesday: 'Mar',
                      wednesday: 'Mer',
                      thursday: 'Jeu',
                      friday: 'Ven',
                      saturday: 'Sam',
                      sunday: 'Dim'
                    }).map(([day, label]) => (
                      <div key={day} className="text-center">
                        <button
                          type="button"
                          onClick={() => handleDayToggle(day)}
                          className={`w-full py-2 px-3 rounded-md text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
                            settings.dayRestrictions.days[day as keyof typeof settings.dayRestrictions.days]
                              ? 'bg-blue-100 text-blue-700 border border-blue-300'
                              : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                          }`}
                        >
                          {label}
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Advanced Features */}
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                Fonctionnalités avancées
              </h3>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium text-gray-700">Réservation automatique</h4>
                    <p className="text-sm text-gray-500">
                      Tenter de réserver automatiquement la place lorsqu'elle est disponible (version bêta)
                    </p>
                  </div>
                  <label className="inline-flex items-center cursor-pointer">
                    <input 
                      type="checkbox" 
                      className="sr-only peer" 
                      checked={settings.autoReservation}
                      onChange={() => handleToggle('autoReservation')}
                      disabled={!settings.enableAlerts}
                    />
                    <div className={`relative w-11 h-6 ${!settings.enableAlerts ? 'bg-gray-200 opacity-50' : 'bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300'} rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600`}></div>
                  </label>
                </div>
              </div>
            </div>

            {/* Save button */}
            <div className="flex items-center justify-end space-x-4">
              {saved && (
                <div className="flex items-center text-green-600">
                  <svg className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Paramètres enregistrés</span>
                </div>
              )}
              <button
                onClick={handleSave}
                disabled={isSaving}
                className={`inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 ${
                  isSaving ? 'opacity-70 cursor-not-allowed' : 'hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
                }`}
              >
                {isSaving ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Enregistrement...
                  </>
                ) : (
                  <>
                    <Save className="mr-2 h-4 w-4" />
                    Enregistrer les changements
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlertSettings;