import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enAbout from '../../../../public/locales/en/about.json';
import enAdmin from '../../../../public/locales/en/admin.json';
import enArticles from '../../../../public/locales/en/articles.json';
import enMain from '../../../../public/locales/en/main.json';
import enProfile from '../../../../public/locales/en/profile.json';
import enTranslation from '../../../../public/locales/en/translation.json';
import uaAbout from '../../../../public/locales/ua/about.json';
import uaAdmin from '../../../../public/locales/ua/admin.json';
import uaArticles from '../../../../public/locales/ua/articles.json';
import uaMain from '../../../../public/locales/ua/main.json';
import uaProfile from '../../../../public/locales/ua/profile.json';
import uaTranslation from '../../../../public/locales/ua/translation.json';

const resources = {
  en: {
    translation: enTranslation,
    main: enMain,
    about: enAbout,
    profile: enProfile,
    articles: enArticles,
    admin: enAdmin,
  },
  ua: {
    translation: uaTranslation,
    main: uaMain,
    about: uaAbout,
    profile: uaProfile,
    articles: uaArticles,
    admin: uaAdmin,
  },
};

i18n.use(initReactI18next).init({
  resources,
  fallbackLng: 'ua',
  debug: __IS_DEV__,
  interpolation: {
    escapeValue: false, // not needed for react as it escapes by default
  },
});

export default i18n;
