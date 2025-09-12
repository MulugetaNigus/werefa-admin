import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslations from './locales/en.json';
import amTranslations from './locales/am.json';

const resources = {
  en: {
    translation: enTranslations
  },
  am: {
    translation: amTranslations
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'am', // default language (Amharic)
    fallbackLng: 'en',
    
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
