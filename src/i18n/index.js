import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslation from './locales/en.json'; // Example English translations
import esTranslation from './locales/es.json'; // Example French translations

// Add more language translations as needed

i18n.use(initReactI18next).init({
	lng: 'en',
	fallbackLng: 'en',
	resources: {
		en: {
			translation: enTranslation,
		},
		es: {
			translation: esTranslation,
		},
	},
	interpolation: {
		escapeValue: false,
	},
});

export default i18n;
