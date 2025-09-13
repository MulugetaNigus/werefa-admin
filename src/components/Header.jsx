import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { UserPlus, Printer } from 'lucide-react';
import { useLanguageContext } from '../contexts/LanguageContext';
import AddResidentModal from './AddResidentModal';
import LanguageToggle from './LanguageToggle';

const Header = ({ activeTab = 'መተወደሪ ዕድሳት' }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { t } = useTranslation();
  const { currentLanguage } = useLanguageContext();

  // Get dynamic title based on active tab
  const getHeaderTitle = () => {
    const titleKey = `header.titles.${activeTab}`;
    const dynamicTitle = t(titleKey);
    
    // Fallback to default title if translation doesn't exist
    return dynamicTitle !== titleKey ? dynamicTitle : t('header.title');
  };

  return (
    <header className="bg-white border-b border-gray-200 px-3 lg:px-4 xl:px-6 py-3 lg:py-4 font-bold">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2 lg:space-x-3 xl:space-x-4">
          <h1 className="text-blue-500 text-sm lg:text-base xl:text-lg font-bold">{getHeaderTitle()}</h1>
        </div>
        
        <div className="flex items-center space-x-2 lg:space-x-3 xl:space-x-4">
          {/* Language Toggle */}
          <LanguageToggle />
          
          {/* User Avatar */}
          <div className="w-8 h-8 lg:w-9 lg:h-9 xl:w-10 xl:h-10 bg-blue-500 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-xs lg:text-sm">ወራ</span>
          </div>
        </div>
      </div>
      
      {/* Search and Filter Bar */}
      {/* <div className="mt-3 lg:mt-4 flex flex-col lg:flex-row lg:items-center justify-between gap-3 lg:gap-0">
        <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-3 lg:space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder={t('header.searchPlaceholder')}
              className="w-full sm:w-auto pl-8 lg:pl-10 pr-3 lg:pr-4 py-1.5 lg:py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <svg className="w-4 h-4 lg:w-5 lg:h-5 text-gray-400 absolute left-2 lg:left-3 top-2 lg:top-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          
          <div className="flex items-center space-x-2">
            <span className="text-gray-600 text-sm">{t('header.year')}</span>
            <select className="border border-gray-300 rounded px-2 lg:px-3 py-1 text-xs lg:text-sm">
              <option>▼</option>
            </select>
          </div>
        </div> */}
        
        {/* Action buttons moved to DataTable component */}
      {/* </div> */}
      
      {/* Add Resident Modal */}
      <AddResidentModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </header>
  );
};

export default Header;