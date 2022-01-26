import I18n from 'i18next';
import detector from "i18next-browser-languagedetector";
import { reactI18nextModule } from 'react-i18next'

import * as translationEN from '../public/locales/en/translation.json'
import * as translationID from '../public/locales/id/translation.json'

const resources = {
    en: {
        translation: translationEN
    },
    id:{
        translation: translationID
    }
}

I18n
    .use(detector)
    .use(reactI18nextModule)
    .init({
        resources,
        fallbackLng: 'en',
        keySeparator: false,
        interpolation: {
            escapeValue: false
        }
    })

export default I18n;