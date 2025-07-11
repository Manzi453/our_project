import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Translations
const resources = {
  en: {
    translation: {
      welcome: "Welcome to AgriConnect",
      login: "Login",
      signup: "Sign Up",
      auth: {
        title: "Login / Sign up",
        emailPlaceholder: "Email",
        passwordPlaceholder: "Password",
        loginButton: "Login",
        createAccount: "Create an account",
        farmerQuestion: "Are you a farmer?",
        requestMembership: "Request membership"
      },
      dashboard: {
        greeting: "Hello, Farmer!"
      }
    }
  },
  fr: {
    translation: {
      welcome: "Bienvenue à AgriConnect",
      login: "Connexion",
      signup: "S'inscrire",
      auth: {
        title: "Connexion / Inscription",
        emailPlaceholder: "Email",
        passwordPlaceholder: "Mot de passe",
        loginButton: "Connexion",
        createAccount: "Créer un compte",
        farmerQuestion: "Êtes-vous agriculteur?",
        requestMembership: "Demander une adhésion"
      },
      dashboard: {
        greeting: "Bonjour, Agriculteur!"
      }
    }
  },
  rw: {
    translation: {
      welcome: "Murakaza neza kuri AgriConnect",
      login: "Injira",
      signup: "Iyandikishe",
      auth: {
        title: "Injira / Iyandikishe",
        emailPlaceholder: "Imeri",
        passwordPlaceholder: "Ijambobanga",
        loginButton: "Injira",
        createAccount: "Kora konti",
        farmerQuestion: "Uri umuhinzi?",
        requestMembership: "Saba ubumemberi"
      },
      dashboard: {
        greeting: "Mwaramutse, Muhinzi!"
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;