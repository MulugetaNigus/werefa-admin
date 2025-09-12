import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Sidebar = ({ activeTab, setActiveTab }) => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  
  const menuItems = [
    { id: 'ዳሽቦርድ', label: t('sidebar.dashboard'), active: false },
    { id: 'መተወደሪ ዕድሳት', label: t('sidebar.residenceRenewal'), active: true },
    { id: 'አዲስ መተወደሪ', label: t('sidebar.newResidence'), active: false },
    { id: 'የሞተ ሰርፍት', label: t('sidebar.deathCertificate'), active: false },
    { id: 'ልደት ክርሰ', label: t('sidebar.birthCertificate'), active: false },
    { id: 'የጋበን ሰርፍት', label: t('sidebar.marriageCertificate'), active: false },
    { id: 'የአተከፍግፅ ወረልዎት', label: t('sidebar.administrativeServices'), active: false },
    { id: 'ማስተከክፅዎት', label: t('sidebar.corrections'), active: false }
  ];

  return (
    <div className="fixed left-0 top-0 h-full w-48 lg:w-56 xl:w-64 2xl:w-72 bg-white border-r border-gray-200 shadow-sm">
      <div className="p-3 lg:p-4 xl:p-6">
        <h2 className="text-xl lg:text-2xl xl:text-3xl font-bold text-gray-900 mb-14">ወረፋ</h2>
        
        <nav className="space-y-2">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full text-left px-2 lg:px-3 xl:px-4 py-2 lg:py-3 rounded-lg text-xs lg:text-sm xl:text-sm transition-colors ${
                item.id === activeTab
                  ? 'bg-blue-500 text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>
        
        <div className="mt-4 lg:mt-6 xl:mt-8">
          <button 
            onClick={() => navigate('/')}
            className="w-full bg-blue-500 text-white px-2 lg:px-3 xl:px-4 py-2 lg:py-3 rounded-lg text-xs lg:text-sm hover:bg-blue-600 flex items-center justify-center"
          >
            <span className="mr-1 lg:mr-2">📋</span>
            {t('sidebar.logout')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;