'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'am';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.about': 'About',
    'nav.reviews': 'Reviews',
    'nav.contact': 'Contact',
    'nav.callNow': 'Call Now',
    'nav.bookAppointment': 'Book Appointment',
    
    // Hero
    'hero.badge': 'Open 24 Hours • Emergency Ready',
    'hero.headline': 'Advanced Healthcare You Can Trust – 24/7',
    'hero.subheadline': 'Expert Doctors • Modern Facilities • Patient-Centered Care',
    
    // About
    'about.title': 'About Us',
    'about.heading': 'Nordic Medical Centre',
    'about.description': 'Nordic Medical Centre is a leading medical center in Bole, Addis Ababa, providing high-quality, patient-focused healthcare services through experienced doctors, professional nurses, and modern medical facilities — open 24 hours a day.',
    
    // Services
    'services.title': 'Our Services',
    'services.heading': 'Medical Services',
    'services.viewAll': 'View All Services',
    
    // Why Choose Us
    'why.title': 'Why Choose Us',
    'why.heading': 'Why Choose Nordic Medical Centre',
    
    // Reviews
    'reviews.title': 'Testimonials',
    'reviews.heading': 'Patient Reviews',
    
    // Contact
    'contact.title': 'Contact Us',
    'contact.phone': 'Phone',
    'contact.location': 'Location',
    'contact.hours': 'Hours',
    'contact.open24': 'Open 24 Hours',
    
    // CTA
    'cta.heading': 'Your Health Comes First',
    'cta.scheduleAppointment': 'Schedule Appointment',
    'cta.contactUs': 'Contact Us',
    
    // Footer
    'footer.quickLinks': 'Quick Links',
    'footer.ourServices': 'Our Services',
    'footer.contactUs': 'Contact Us',
  },
  am: {
    // Navigation
    'nav.home': 'መነሻ',
    'nav.services': 'አገልግሎቶች',
    'nav.about': 'ስለ እኛ',
    'nav.reviews': 'ግምገማዎች',
    'nav.contact': 'አድራሻ',
    'nav.callNow': 'ደውሉ',
    'nav.bookAppointment': 'ቀጠሮ ያስይዙ',
    
    // Hero
    'hero.badge': 'ለ24 ሰዓታት ክፍት • ድንገተኛ ዝግጁ',
    'hero.headline': 'እምነት ያለዎት የላቀ የጤና እንክብካቤ – 24/7',
    'hero.subheadline': 'ልምድ ያላቸው ዶክተሮች • ዘመናዊ ተቋማት • በታካሚ ላይ ያተኮረ እንክብካቤ',
    
    // About
    'about.title': 'ስለ እኛ',
    'about.heading': 'ኖርዲክ ሜዲካል ሴንተር',
    'about.description': 'ኖርዲክ ሜዲካል ሴንተር በቦሌ፣ አዲስ አበባ የሚገኝ ግንባር ቀደም የሕክምና ማዕከል ሲሆን በተሞክሮ ባለቤት ዶክተሮች፣ ሙያዊ ነርሶች እና ዘመናዊ የሕክምና መገልገያዎች አማካኝነት ከፍተኛ ጥራት ያለው፣ በታካሚ ላይ ያተኮረ የጤና አገልግሎት ይሰጣል — በቀን 24 ሰዓት ክፍት።',
    
    // Services
    'services.title': 'አገልግሎቶቻችን',
    'services.heading': 'የሕክምና አገልግሎቶች',
    'services.viewAll': 'ሁሉንም አገልግሎቶች ይመልከቱ',
    
    // Why Choose Us
    'why.title': 'ለምን እኛን ይምረጡ',
    'why.heading': 'ለምን ኖርዲክ ሜዲካል ሴንተርን ይምረጣሉ',
    
    // Reviews
    'reviews.title': 'ምስክርነቶች',
    'reviews.heading': 'የታካሚ ግምገማዎች',
    
    // Contact
    'contact.title': 'እኛን ያግኙ',
    'contact.phone': 'ስልክ',
    'contact.location': 'አድራሻ',
    'contact.hours': 'የስራ ሰዓት',
    'contact.open24': 'ለ24 ሰዓታት ክፍት',
    
    // CTA
    'cta.heading': 'ጤናዎ በመጀመሪያ ይመጣል',
    'cta.scheduleAppointment': 'ቀጠሮ ያስይዙ',
    'cta.contactUs': 'እኛን ያግኙ',
    
    // Footer
    'footer.quickLinks': 'ፈጣን አገናኞች',
    'footer.ourServices': 'አገልግሎቶቻችን',
    'footer.contactUs': 'እኛን ያግኙ',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}


