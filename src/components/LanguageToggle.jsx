import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageToggle = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'am' ? 'en' : 'am';
    i18n.changeLanguage(newLang);
  };

  return (
    <div className="text-blue-500 text-sm font-medium cursor-pointer" onClick={toggleLanguage}>
      <span className={`${i18n.language === 'am' ? 'text-blue-600' : 'text-gray-500'}`}>አማ</span>
      <span className="mx-1 text-gray-400">/</span>
      <span className={`${i18n.language === 'en' ? 'text-blue-600' : 'text-gray-500'}`}>Eng</span>
    </div>
  );
};

export default LanguageToggle;
