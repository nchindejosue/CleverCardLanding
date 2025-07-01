import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'fr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Header
    'nav.features': 'Features',
    'nav.solutions': 'Solutions',
    'nav.forSchools': 'For Schools',
    'nav.forTeachers': 'For Teachers',
    'nav.forParents': 'For Parents & Students',
    'nav.pricing': 'Pricing',
    'nav.mission': 'Our Mission',
    'nav.blog': 'Blog',
    'nav.downloadApp': 'Download App',
    
    // Home page
    'home.hero.title': 'Transform Education with AI Power',
    'home.hero.subtitle': 'CleverCard empowers educators with AI-powered tools that transform administrative burdens into developmental opportunities. Save time, gain insights, and focus on what matters most - teaching.',
    'home.hero.downloadFree': 'Download Free App',
    'home.hero.watchDemo': 'Watch Demo',
    'home.hero.freeToStart': 'Free to start',
    'home.hero.worksOffline': 'Works offline',
    'home.hero.securePrivate': 'Secure & private',
    
    // Problem statement
    'home.problem.title': 'The Global Educational Crisis',
    'home.problem.subtitle': 'Across Africa, Asia, and the developing world, dedicated educators are drowning in administrative tasks, while brilliant students\' potential remains hidden in outdated systems that fail to recognize diverse learning styles.',
    'home.problem.teacherBurnout.title': 'Teacher Burnout',
    'home.problem.teacherBurnout.description': 'Teachers spend up to 30% of their time on paperwork instead of teaching, leading to exhaustion and reduced passion for education. This administrative burden prevents the personalized attention every child deserves.',
    'home.problem.dataBlindness.title': 'Data Blindness',
    'home.problem.dataBlindness.description': 'Paper records can\'t reveal learning patterns, leaving schools unable to identify at-risk students, recognize diverse intelligences, or make informed decisions about individual learning needs.',
    'home.problem.digitalDivide.title': 'Digital Divide',
    'home.problem.digitalDivide.description': '90% of schools in developing regions lack computer infrastructure, forcing reliance on outdated paper-based systems that cannot adapt to different learning styles or provide actionable insights.',
    
    // Stats
    'stats.title': 'The Numbers Tell the Story',
    'stats.subtitle': 'Behind every statistic is a teacher working late, a student\'s potential waiting to be unlocked, and a school system ready for transformation.',
    'stats.students.label': 'Students in Sub-Saharan Africa',
    'stats.students.description': 'Primary school students who could benefit from personalized learning solutions',
    'stats.paperwork.label': 'Time Spent on Paperwork',
    'stats.paperwork.description': 'Of teachers\' working hours lost to administrative tasks instead of personalized instruction',
    'stats.schools.label': 'Schools Without Digital Systems',
    'stats.schools.description': 'Primary schools still relying on paper-based systems that cannot identify individual learning needs',
    'stats.timeSaved.label': 'Weekly Time Saved',
    'stats.timeSaved.description': 'Average time CleverCard saves teachers per week for personalized instruction',
    
    // Features
    'features.title': 'Powerful Features, Simple Experience',
    'features.subtitle': 'CleverCard combines cutting-edge AI technology with intuitive design to create a solution that recognizes every child\'s unique learning style and potential.',
    
    // Download popup
    'download.popup.title': 'Get CleverCard',
    'download.popup.subtitle': 'Join the waitlist for Play Store release or download directly',
    'download.popup.emailPlaceholder': 'Enter your email address',
    'download.popup.joinWaitlist': 'Join Waitlist',
    'download.popup.downloadApk': 'Download APK Now',
    'download.popup.close': 'Close',
    'download.popup.waitlistSuccess': 'Thank you! We\'ll notify you when CleverCard is available on the Play Store.',
    
    // Footer
    'footer.description': 'Empowering educators with AI-powered tools that transform administrative burdens into developmental opportunities. Recognizing every child\'s unique potential.',
    'footer.contact.location': 'Bamenda, Cameroon',
    'footer.downloadAndroid': 'Download for Android',
    'footer.downloadIos': 'Download for iOS',
    'footer.copyright': 'CleverCard Initiative. All rights reserved.',
  },
  fr: {
    // Header
    'nav.features': 'Fonctionnalités',
    'nav.solutions': 'Solutions',
    'nav.forSchools': 'Pour les Écoles',
    'nav.forTeachers': 'Pour les Enseignants',
    'nav.forParents': 'Pour les Parents et Élèves',
    'nav.pricing': 'Tarifs',
    'nav.mission': 'Notre Mission',
    'nav.blog': 'Blog',
    'nav.downloadApp': 'Télécharger l\'App',
    
    // Home page
    'home.hero.title': 'Transformez l\'Éducation avec l\'IA',
    'home.hero.subtitle': 'CleverCard donne aux éducateurs des outils alimentés par l\'IA qui transforment les charges administratives en opportunités de développement. Économisez du temps, obtenez des insights, et concentrez-vous sur l\'essentiel - enseigner.',
    'home.hero.downloadFree': 'Télécharger Gratuitement',
    'home.hero.watchDemo': 'Voir la Démo',
    'home.hero.freeToStart': 'Gratuit pour commencer',
    'home.hero.worksOffline': 'Fonctionne hors ligne',
    'home.hero.securePrivate': 'Sécurisé et privé',
    
    // Problem statement
    'home.problem.title': 'La Crise Éducative Mondiale',
    'home.problem.subtitle': 'À travers l\'Afrique, l\'Asie et le monde en développement, des éducateurs dévoués se noient dans les tâches administratives, tandis que le potentiel brillant des élèves reste caché dans des systèmes obsolètes qui ne reconnaissent pas les styles d\'apprentissage diversifiés.',
    'home.problem.teacherBurnout.title': 'Épuisement des Enseignants',
    'home.problem.teacherBurnout.description': 'Les enseignants passent jusqu\'à 30% de leur temps sur la paperasserie au lieu d\'enseigner, menant à l\'épuisement et à une passion réduite pour l\'éducation. Cette charge administrative empêche l\'attention personnalisée que chaque enfant mérite.',
    'home.problem.dataBlindness.title': 'Cécité des Données',
    'home.problem.dataBlindness.description': 'Les dossiers papier ne peuvent révéler les modèles d\'apprentissage, laissant les écoles incapables d\'identifier les élèves à risque, de reconnaître les intelligences diverses, ou de prendre des décisions éclairées sur les besoins d\'apprentissage individuels.',
    'home.problem.digitalDivide.title': 'Fracture Numérique',
    'home.problem.digitalDivide.description': '90% des écoles dans les régions en développement manquent d\'infrastructure informatique, forçant la dépendance sur des systèmes papier obsolètes qui ne peuvent s\'adapter aux différents styles d\'apprentissage ou fournir des insights exploitables.',
    
    // Stats
    'stats.title': 'Les Chiffres Racontent l\'Histoire',
    'stats.subtitle': 'Derrière chaque statistique se trouve un enseignant qui travaille tard, le potentiel d\'un élève qui attend d\'être débloqué, et un système scolaire prêt pour la transformation.',
    'stats.students.label': 'Élèves en Afrique Subsaharienne',
    'stats.students.description': 'Élèves du primaire qui pourraient bénéficier de solutions d\'apprentissage personnalisées',
    'stats.paperwork.label': 'Temps Passé sur la Paperasserie',
    'stats.paperwork.description': 'Des heures de travail des enseignants perdues aux tâches administratives au lieu de l\'instruction personnalisée',
    'stats.schools.label': 'Écoles Sans Systèmes Numériques',
    'stats.schools.description': 'Écoles primaires qui dépendent encore de systèmes papier qui ne peuvent identifier les besoins d\'apprentissage individuels',
    'stats.timeSaved.label': 'Temps Économisé par Semaine',
    'stats.timeSaved.description': 'Temps moyen que CleverCard économise aux enseignants par semaine pour l\'instruction personnalisée',
    
    // Features
    'features.title': 'Fonctionnalités Puissantes, Expérience Simple',
    'features.subtitle': 'CleverCard combine une technologie IA de pointe avec un design intuitif pour créer une solution qui reconnaît le style d\'apprentissage unique et le potentiel de chaque enfant.',
    
    // Download popup
    'download.popup.title': 'Obtenir CleverCard',
    'download.popup.subtitle': 'Rejoignez la liste d\'attente pour la sortie Play Store ou téléchargez directement',
    'download.popup.emailPlaceholder': 'Entrez votre adresse email',
    'download.popup.joinWaitlist': 'Rejoindre la Liste d\'Attente',
    'download.popup.downloadApk': 'Télécharger APK Maintenant',
    'download.popup.close': 'Fermer',
    'download.popup.waitlistSuccess': 'Merci ! Nous vous notifierons quand CleverCard sera disponible sur le Play Store.',
    
    // Footer
    'footer.description': 'Donner aux éducateurs des outils alimentés par l\'IA qui transforment les charges administratives en opportunités de développement. Reconnaître le potentiel unique de chaque enfant.',
    'footer.contact.location': 'Bamenda, Cameroun',
    'footer.downloadAndroid': 'Télécharger pour Android',
    'footer.downloadIos': 'Télécharger pour iOS',
    'footer.copyright': 'CleverCard Initiative. Tous droits réservés.',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};