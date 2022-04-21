import 'react-i18next';
import translation from '../../public/locales/en/translation.json';

export const resources = {
  en: {
    translation,
  },
} as const;

declare module 'react-i18next' {
  interface CustomTypeOptions {
    // defaultNS: typeof defaultNS;
    resources: typeof resources['en'];
  }
}
