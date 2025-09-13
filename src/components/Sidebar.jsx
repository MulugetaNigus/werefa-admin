import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { 
  BarChart3, 
  RotateCcw, 
  Plus, 
  FileText, 
  Baby, 
  Heart, 
  Settings, 
  Edit3, 
  LogOut,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

const Sidebar = ({ activeTab, setActiveTab, isCollapsed, setIsCollapsed }) => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const menuItems = [
    { id: 'ዳሽቦርድ', label: t('sidebar.dashboard'), icon: BarChart3, active: false },
    { id: 'መተወደሪ ዕድሳት', label: t('sidebar.residenceRenewal'), icon: RotateCcw, active: true },
    { id: 'አዲስ መተወደሪ', label: t('sidebar.newResidence'), icon: Plus, active: false },
    { id: 'የሞተ ሰርፍት', label: t('sidebar.deathCertificate'), icon: FileText, active: false },
    { id: 'ልደት ክርሰ', label: t('sidebar.birthCertificate'), icon: Baby, active: false },
    { id: 'የጋበን ሰርፍት', label: t('sidebar.marriageCertificate'), icon: Heart, active: false },
    { id: 'የአተከፍግፅ ወረልዎት', label: t('sidebar.administrativeServices'), icon: Settings, active: false },
    { id: 'ማስተከክፅዎት', label: t('sidebar.corrections'), icon: Edit3, active: false }
  ];

  return (
    <div className={`fixed left-0 top-0 h-full bg-white border-r border-gray-200 shadow-sm transition-all duration-300 ease-in-out z-40 ${
      isCollapsed 
        ? 'w-16' 
        : 'w-48 sm:w-52 md:w-56 lg:w-60 xl:w-64 2xl:w-72'
    }`}>
      <div className={`${isCollapsed ? 'p-2' : 'p-3 lg:p-4 xl:p-6'} transition-all duration-300`}>
        {/* Header with toggle button */}
        <div className="flex items-center justify-between mb-8 lg:mb-14">
          <h2 className={`font-bold text-gray-900 transition-all duration-300 ${
            isCollapsed 
              ? 'text-lg opacity-0 w-0 overflow-hidden' 
              : 'text-xl lg:text-2xl xl:text-3xl opacity-100'
          }`}>
            ወረፋ
          </h2>
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="p-1.5 rounded-lg hover:bg-gray-100 transition-colors duration-200 text-gray-600 hover:text-gray-900"
            aria-label={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          >
            {isCollapsed ? (
              <ChevronRight className="w-5 h-5 transition-transform duration-300" />
            ) : (
              <ChevronLeft className="w-5 h-5 transition-transform duration-300" />
            )}
          </button>
        </div>

        <nav className="space-y-2">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center rounded-lg transition-all duration-200 font-bold ${
                item.id === activeTab
                  ? 'bg-blue-500 text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              } ${
                isCollapsed 
                  ? 'px-3 py-3 justify-center' 
                  : 'px-2 lg:px-3 xl:px-4 py-2 lg:py-3 text-left'
              }`}
              title={isCollapsed ? item.label : ''}
            >
              <item.icon className={`w-5 h-5 ${isCollapsed ? '' : 'mr-2 lg:mr-3'}`} />
              <span className={`text-xs lg:text-sm xl:text-sm transition-all duration-300 ${
                isCollapsed 
                  ? 'opacity-0 w-0 overflow-hidden' 
                  : 'opacity-100'
              }`}>
                {item.label}
              </span>
            </button>
          ))}
        </nav>

        <div className={`${isCollapsed ? 'mt-4' : 'mt-4 lg:mt-6 xl:mt-8'} transition-all duration-300`}>
          <button
            onClick={() => navigate('/')}
            className={`w-full bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all duration-200 flex items-center font-bold ${
              isCollapsed 
                ? 'px-3 py-3 justify-center' 
                : 'px-2 lg:px-3 xl:px-4 py-2 lg:py-3 justify-center'
            }`}
            title={isCollapsed ? t('sidebar.logout') : ''}
          >
            <LogOut className={`w-5 h-5 ${isCollapsed ? '' : 'mr-1 lg:mr-2'}`} />
            <span className={`text-xs lg:text-sm transition-all duration-300 ${
              isCollapsed 
                ? 'opacity-0 w-0 overflow-hidden' 
                : 'opacity-100'
            }`}>
              {t('sidebar.logout')}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;