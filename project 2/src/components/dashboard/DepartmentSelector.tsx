import React, { useState } from 'react';
import { Search, Info, CheckCircle } from 'lucide-react';

const DepartmentSelector: React.FC = () => {
  // Mock data for French departments
  const allDepartments = [
    { code: '01', name: 'Ain', selected: false },
    { code: '02', name: 'Aisne', selected: false },
    { code: '03', name: 'Allier', selected: false },
    { code: '04', name: 'Alpes-de-Haute-Provence', selected: false },
    { code: '05', name: 'Hautes-Alpes', selected: false },
    { code: '06', name: 'Alpes-Maritimes', selected: false },
    { code: '07', name: 'Ardèche', selected: false },
    { code: '08', name: 'Ardennes', selected: false },
    { code: '09', name: 'Ariège', selected: false },
    { code: '10', name: 'Aube', selected: false },
    { code: '11', name: 'Aude', selected: false },
    { code: '12', name: 'Aveyron', selected: false },
    { code: '13', name: 'Bouches-du-Rhône', selected: false },
    { code: '14', name: 'Calvados', selected: false },
    { code: '15', name: 'Cantal', selected: false },
    { code: '16', name: 'Charente', selected: false },
    { code: '17', name: 'Charente-Maritime', selected: false },
    { code: '18', name: 'Cher', selected: false },
    { code: '19', name: 'Corrèze', selected: false },
    { code: '21', name: 'Côte-d\'Or', selected: false },
    { code: '22', name: 'Côtes-d\'Armor', selected: false },
    { code: '23', name: 'Creuse', selected: false },
    { code: '24', name: 'Dordogne', selected: false },
    { code: '25', name: 'Doubs', selected: false },
    { code: '26', name: 'Drôme', selected: false },
    { code: '27', name: 'Eure', selected: false },
    { code: '28', name: 'Eure-et-Loir', selected: false },
    { code: '29', name: 'Finistère', selected: false },
    { code: '2A', name: 'Corse-du-Sud', selected: false },
    { code: '2B', name: 'Haute-Corse', selected: false },
    { code: '30', name: 'Gard', selected: false },
    { code: '31', name: 'Haute-Garonne', selected: false },
    { code: '32', name: 'Gers', selected: false },
    { code: '33', name: 'Gironde', selected: false },
    { code: '34', name: 'Hérault', selected: false },
    { code: '35', name: 'Ille-et-Vilaine', selected: false },
    { code: '36', name: 'Indre', selected: false },
    { code: '37', name: 'Indre-et-Loire', selected: false },
    { code: '38', name: 'Isère', selected: false },
    { code: '39', name: 'Jura', selected: false },
    { code: '40', name: 'Landes', selected: false },
    { code: '41', name: 'Loir-et-Cher', selected: false },
    { code: '42', name: 'Loire', selected: false },
    { code: '43', name: 'Haute-Loire', selected: false },
    { code: '44', name: 'Loire-Atlantique', selected: false },
    { code: '45', name: 'Loiret', selected: false },
    { code: '46', name: 'Lot', selected: false },
    { code: '47', name: 'Lot-et-Garonne', selected: false },
    { code: '48', name: 'Lozère', selected: false },
    { code: '49', name: 'Maine-et-Loire', selected: false },
    { code: '50', name: 'Manche', selected: false },
    { code: '51', name: 'Marne', selected: false },
    { code: '52', name: 'Haute-Marne', selected: false },
    { code: '53', name: 'Mayenne', selected: false },
    { code: '54', name: 'Meurthe-et-Moselle', selected: false },
    { code: '55', name: 'Meuse', selected: false },
    { code: '56', name: 'Morbihan', selected: false },
    { code: '57', name: 'Moselle', selected: false },
    { code: '58', name: 'Nièvre', selected: false },
    { code: '59', name: 'Nord', selected: false },
    { code: '60', name: 'Oise', selected: false },
    { code: '61', name: 'Orne', selected: false },
    { code: '62', name: 'Pas-de-Calais', selected: false },
    { code: '63', name: 'Puy-de-Dôme', selected: false },
    { code: '64', name: 'Pyrénées-Atlantiques', selected: false },
    { code: '65', name: 'Hautes-Pyrénées', selected: false },
    { code: '66', name: 'Pyrénées-Orientales', selected: false },
    { code: '67', name: 'Bas-Rhin', selected: false },
    { code: '68', name: 'Haut-Rhin', selected: false },
    { code: '69', name: 'Rhône', selected: false },
    { code: '70', name: 'Haute-Saône', selected: false },
    { code: '71', name: 'Saône-et-Loire', selected: false },
    { code: '72', name: 'Sarthe', selected: false },
    { code: '73', name: 'Savoie', selected: false },
    { code: '74', name: 'Haute-Savoie', selected: false },
    { code: '75', name: 'Paris', selected: false },
    { code: '76', name: 'Seine-Maritime', selected: false },
    { code: '77', name: 'Seine-et-Marne', selected: false },
    { code: '78', name: 'Yvelines', selected: false },
    { code: '79', name: 'Deux-Sèvres', selected: false },
    { code: '80', name: 'Somme', selected: false },
    { code: '81', name: 'Tarn', selected: false },
    { code: '82', name: 'Tarn-et-Garonne', selected: false },
    { code: '83', name: 'Var', selected: false },
    { code: '84', name: 'Vaucluse', selected: false },
    { code: '85', name: 'Vendée', selected: false },
    { code: '86', name: 'Vienne', selected: false },
    { code: '87', name: 'Haute-Vienne', selected: false },
    { code: '88', name: 'Vosges', selected: false },
    { code: '89', name: 'Yonne', selected: false },
    { code: '90', name: 'Territoire de Belfort', selected: false },
    { code: '91', name: 'Essonne', selected: false },
    { code: '92', name: 'Hauts-de-Seine', selected: false },
    { code: '93', name: 'Seine-Saint-Denis', selected: false },
    { code: '94', name: 'Val-de-Marne', selected: false },
    { code: '95', name: 'Val-d\'Oise', selected: false },
    { code: '971', name: 'Guadeloupe', selected: false },
    { code: '972', name: 'Martinique', selected: false },
    { code: '973', name: 'Guyane', selected: false },
    { code: '974', name: 'La Réunion', selected: false },
    { code: '976', name: 'Mayotte', selected: false },
  ];

  const [departments, setDepartments] = useState(allDepartments);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSaving, setIsSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [selectedCount, setSelectedCount] = useState(0);
  const [maxAllowed, setMaxAllowed] = useState(5); // Set based on subscription

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    
    if (query.trim() === '') {
      setDepartments(allDepartments);
    } else {
      const filteredDepartments = allDepartments.filter(
        (dept) => 
          dept.name.toLowerCase().includes(query.toLowerCase()) ||
          dept.code.toLowerCase().includes(query.toLowerCase())
      );
      setDepartments(filteredDepartments);
    }
  };

  const toggleDepartment = (code: string) => {
    const newDepartments = departments.map(dept => {
      if (dept.code === code) {
        // If we're trying to select a new department, check if we've reached the limit
        if (!dept.selected && selectedCount >= maxAllowed) {
          return dept; // Don't change if max reached
        }
        return { ...dept, selected: !dept.selected };
      }
      return dept;
    });

    const newSelectedCount = newDepartments.filter(dept => dept.selected).length;
    setSelectedCount(newSelectedCount);
    setDepartments(newDepartments);
    
    // Update the allDepartments list to keep it in sync
    const newAllDepartments = allDepartments.map(dept => {
      if (dept.code === code) {
        if (!dept.selected && selectedCount >= maxAllowed) {
          return dept;
        }
        return { ...dept, selected: !dept.selected };
      }
      return dept;
    });
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
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Sélection des départements</h1>
          <p className="text-gray-600 mb-6">
            Choisissez les départements pour lesquels vous souhaitez recevoir des alertes.
            Votre abonnement actuel vous permet de sélectionner jusqu'à {maxAllowed} départements.
          </p>

          {/* Search box */}
          <div className="relative mb-6">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Rechercher un département..."
              value={searchQuery}
              onChange={handleSearch}
            />
          </div>

          {/* Selected count and info */}
          <div className="flex items-center justify-between mb-4">
            <div className="text-sm font-medium text-gray-700">
              {selectedCount} / {maxAllowed} départements sélectionnés
            </div>

            {selectedCount >= maxAllowed && (
              <div className="flex items-center text-amber-600 text-sm">
                <Info className="h-4 w-4 mr-1" />
                <span>Limite atteinte. Mettez à niveau votre abonnement pour plus de départements.</span>
              </div>
            )}
          </div>

          {/* France map would go here in a real implementation */}
          <div className="hidden md:block h-96 bg-blue-50 rounded-lg mb-6 flex items-center justify-center text-gray-500">
            <p>Carte interactive de la France</p>
          </div>

          {/* Departments grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-6">
            {departments.map((department) => (
              <button
                key={department.code}
                onClick={() => toggleDepartment(department.code)}
                disabled={!department.selected && selectedCount >= maxAllowed}
                className={`p-3 rounded-lg text-left transition-all ${
                  department.selected
                    ? 'bg-blue-100 text-blue-700 border-2 border-blue-300'
                    : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
                } ${
                  !department.selected && selectedCount >= maxAllowed
                    ? 'opacity-50 cursor-not-allowed'
                    : 'cursor-pointer'
                }`}
              >
                <div className="flex justify-between items-center">
                  <div>
                    <div className="font-medium">{department.code}</div>
                    <div className="text-sm truncate">{department.name}</div>
                  </div>
                  {department.selected && (
                    <CheckCircle className="h-5 w-5 text-blue-600" />
                  )}
                </div>
              </button>
            ))}
          </div>

          {/* Save button */}
          <div className="flex items-center justify-end space-x-4">
            {saved && (
              <div className="flex items-center text-green-600">
                <CheckCircle className="h-5 w-5 mr-1" />
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
                'Enregistrer les changements'
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DepartmentSelector;